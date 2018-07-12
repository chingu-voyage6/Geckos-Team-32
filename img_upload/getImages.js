const cloudName = "dkltr3zmo";
const unsignedUploadPreset = "kj42vsaw";

// *********** Get files ******************** //
function getFiles() {
  let recipieId = document.getElementById("idInput").value;

  try {
    getImages(recipieId);
  } catch {
    //document.getElementById("header").textContent = "Something goes wrong.";
    //document.getElementById("header").style.color = "red";
  }
}

function getImages(recipieId) {
  // Create a request variable and assign a new XMLHttpRequest object to it.
  var request = new XMLHttpRequest();

  // Open a new connection, using the GET request on the URL endpoint
  //request.open(
  //  "GET",
  //  "https://677479621951343:5PumNgZTJk62RHJOaDZrewIEZsg@api.cloudinary.com/v1_1/dkltr3zmo/resources/search?expression=resource_type:image",
  //  true
  //);
  //CLOUDINARY_URL=cloudinary://677479621951343:5PumNgZTJk62RHJOaDZrewIEZsg@dkltr3zmo
  //request.onload = function() {
  //  var data = JSON.parse(this.response);

  //data.forEach(movie => {
  // Log each movie's title
  //  console.log(movie.title);
  //});
  // };
  // Send request
  // request.send();

  for (i == 1; i <= 10; i++) {
    let imgExist = checkUrl(
      "https://res.cloudinary.com/dkltr3zmo/1531390276433/" + String(i)
    );
    if (imgExist) {
      console.log(
        "https://res.cloudinary.com/dkltr3zmo/1531390276433/" +
          String(i) +
          "-Exist!"
      );
    }
  }
}

function checkUrl(url) {
  var request = false;
  if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    request = new ActiveXObject("Microsoft.XMLHttp");
  }

  if (request) {
    request.open("GET", url);
    if (request.status == 200) {
      return true;
    }
  }

  return false;
}
