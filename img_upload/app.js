
const timeStamp = new Date().getTime();


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

function uploadFile(file, fileNumber) {
  document.getElementById("progress").style.width = 0;
  document.getElementById("header").textContent = "";
  var storageRef = storage.ref(String(timeStamp) + '/' + file.name);

  var task = storageRef.put(file);

  task.on('state_changed',
    function progress(snapshot) {
      var percentage = Math.round((snapshot.bytesTransferred * 100.0) / snapshot.totalBytes);
      document.getElementById("progress").style.width = percentage + "%";
    },

    function error(err) {
      document.getElementById("header").textContent = "Something goes wrong." + err;
      document.getElementById("header").style.color = "red";
    },
    function complete() {
      document.getElementById("header").textContent =
        "Upload completed successfully.";
      document.getElementById("header").style.color = "yellowgreen";
      document.getElementById("progress").style.width = 0;
    }
  );
}

// *********** Handle selected files ******************** //
var handleFiles = function (files) {
  for (var i = 0; i < files.length; i++) {
    try {
      uploadFile(files[i], i + 1); // call the function to upload the file
    } catch {
      document.getElementById("header").textContent = "Something goes wrong.";
      document.getElementById("header").style.color = "red";
    }
  }
};
