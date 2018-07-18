const cloudName = "dkltr3zmo";
const unsignedUploadPreset = "kj42vsaw";
const timeStamp = new Date().getTime();
const storageRef = storage.ref();

var fileSelect = document.getElementById("fileSelect"),
  fileElem = document.getElementById("fileElem");

fileSelect.addEventListener(
  "click",
  function (e) {
    if (fileElem) {
      fileElem.click();
    }
    e.preventDefault();
  },
  false
);

// ************************ Drag and drop ***************** //
function dragenter(e) {
  e.stopPropagation();
  e.preventDefault();
}

function dragover(e) {
  e.stopPropagation();
  e.preventDefault();
}

dropbox = document.getElementById("dropbox");
dropbox.addEventListener("dragenter", dragenter, false);
dropbox.addEventListener("dragover", dragover, false);
dropbox.addEventListener("drop", drop, false);

function drop(e) {
  e.stopPropagation();
  e.preventDefault();

  var dt = e.dataTransfer;
  var files = dt.files;

  handleFiles(files);
}

// *********** Upload file to Cloudinary ******************** //
function uploadFil1(file, fileNumber) {
  var url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
  var xhr = new XMLHttpRequest();
  var fd = new FormData();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");

  // Reset the upload progress bar
  document.getElementById("progress").style.width = 0;

  // Update progress (can be used to show progress indicator)
  xhr.upload.addEventListener("progress", function (e) {
    var progress = Math.round((e.loaded * 100.0) / e.total);
    document.getElementById("progress").style.width = progress + "%";

    console.log(`fileuploadprogress data.loaded: ${e.loaded},
  data.total: ${e.total}`);
  });

  xhr.onreadystatechange = function (e) {
    if (xhr.readyState == 4 && xhr.status == 200) {
      // File uploaded successfully
      var response = JSON.parse(xhr.responseText);
      // https://res.cloudinary.com/cloudName/image/upload/v1483481128/public_id.jpg
      var url = response.secure_url;
      // Create a thumbnail of the uploaded image, with 150px width
      var tokens = url.split("/");
      //tokens.splice(-2, 0, 'w_150,c_scale');
      var img = new Image(); // HTML5 Constructor
      img.src = tokens.join("/");
      img.alt = response.public_id;
      img.id = "recipeImg";
      document.getElementBy
      document.getElementById("gallery").appendChild(img); Id("header").textContent =
        "Upload completed successfully.";
      document.getElementById("header").style.color = "yellowgreen";
      document.getElementById("progress").style.width = 0;
    }
    else {
      document.getElementById("header").textContent = "Something goes wrong.";
      document.getElementById("header").style.color = "red";
    }
  };

  fd.append("upload_preset", unsignedUploadPreset);
  fd.append("tags", String(timeStamp));
  fd.append("file", file);
  fd.append("folder", String(timeStamp));
  fd.append("public_id", String(fileNumber));
  xhr.send(fd);
}

function uploadFile(file, fileNumber) {
  var metadata = {
    contentType: 'image/jpeg',
  };

  //ref.put(file, metadata).then(function(snapshot) {
  //  console.log('Uploaded a blob or file!');
  //});

  var uploadTask = storageRef.child('images/' + file.name).put(file, metadata);


  // Listen for state changes, errors, and completion of the upload.
  uploadTask.on(storage.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
    function (snapshot) {
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      var progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
      switch (snapshot.state) {
        case firebase.storage.TaskState.PAUSED: // or 'paused'
          console.log('Upload is paused');
          break;
        case firebase.storage.TaskState.RUNNING: // or 'running'
          console.log('Upload is running');
          break;
      }
    }, function (error) {

      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case 'storage/unauthorized':
          // User doesn't have permission to access the object
          break;

        case 'storage/canceled':
          // User canceled the upload
          break;

        case 'storage/unknown':
          // Unknown error occurred, inspect error.serverResponse
          break;
      }
    }, function () {
      // Upload completed successfully, now we can get the download URL
      uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
        console.log('File available at', downloadURL);
      });
    });
}



// *********** Handle selected files ******************** //
var handleFiles = function (files) {
  for (var i = 0; i < files.length; i++) {
    try {
      uploadFile(files[i], i + 1); // call the function to upload the file
    } catch {
      // document.getElementById("header").textContent = "Something goes wrong.";
      // document.getElementById("header").style.color = "red";
    }
  }
};
