const cloudName = "dkltr3zmo";
const unsignedUploadPreset = "kj42vsaw";
const timeStamp = new Date().getTime();

var fileSelect = document.getElementById("fileSelect"),
  fileElem = document.getElementById("fileElem");

fileSelect.addEventListener(
  "click",
  function(e) {
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
function uploadFile(file, fileNumber) {
  var url = `https://api.cloudinary.com/v1_1/${cloudName}/upload`;
  var xhr = new XMLHttpRequest();
  var fd = new FormData();
  xhr.open("POST", url, true);
  xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");

  // Reset the upload progress bar
  document.getElementById("progress").style.width = 0;

  // Update progress (can be used to show progress indicator)
  xhr.upload.addEventListener("progress", function(e) {
    var progress = Math.round((e.loaded * 100.0) / e.total);
    document.getElementById("progress").style.width = progress + "%";

    console.log(`fileuploadprogress data.loaded: ${e.loaded},
  data.total: ${e.total}`);
  });

  xhr.onreadystatechange = function(e) {
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
      document.getElementById("gallery").appendChild(img);Id("header").textContent =
        "Upload completed successfully.";
      document.getElementById("header").style.color = "yellowgreen";
      document.getElementById("progress").style.width = 0;
    }
    else{
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

// *********** Handle selected files ******************** //
var handleFiles = function(files) {
  for (var i = 0; i < files.length; i++) {
    try {
      uploadFile(files[i], i + 1); // call the function to upload the file
    } catch {
      document.getElementById("header").textContent = "Something goes wrong.";
      document.getElementById("header").style.color = "red";
    }
  }
};
