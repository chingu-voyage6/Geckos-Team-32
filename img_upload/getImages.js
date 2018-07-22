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
  let docRef = db.collection("imagesUrls").where("recipeID", "==", recipieId);
  var i = 1;
  docRef.get()
    .then(function (querySnapshot) {
      querySnapshot.forEach(function (doc) {
        let dData = doc.data();

        var storageRef = storage.ref(dData.imgUrl);

        storageRef.getDownloadURL().then(function (url) {

          // Or inserted into an <img> element:
          var img = new Image(); // HTML5 Constructor
          img.src = url;

          img.alt = "recipeImg" + String(i);
          img.id = "recipeImg" + String(i);
          let col = document.querySelector(".column");
          col.appendChild(img);
          console.log(url);
          i++;
        });


      }).catch(function (error) {
        // Handle any errors


        console.log(doc.data());
      });
    })
    .catch(function (error) {
      console.log("Error getting documents: ", error);
    });

}


function getImages1(recipieId) {

  //1531390276433
  for (i = 1; i <= 10; i++) {
    let imgExist = checkUrl(
      "https://res.cloudinary.com/dkltr3zmo/" +
      recipieId +
      "/" +
      String(i) +
      ".jpg"
    );

    if (!imgExist) {
      imgExist = checkUrl(
        "https://res.cloudinary.com/dkltr3zmo/" +
        recipieId +
        "/" +
        String(i) +
        ".jepg"
      );
    }

    if (!imgExist) {
      imgExist = checkUrl(
        "https://res.cloudinary.com/dkltr3zmo/" +
        recipieId +
        "/" +
        String(i) +
        ".png"
      );
    }

    if (!imgExist) {
      imgExist = checkUrl(
        "https://res.cloudinary.com/dkltr3zmo/" +
        recipieId +
        "/" +
        String(i) +
        ".gif"
      );
    }
    if (imgExist) {
      var img = new Image(); // HTML5 Constructor
      img.src =
        "https://res.cloudinary.com/dkltr3zmo/" +
        recipieId +
        "/" +
        String(i) +
        ".jpg";
      img.alt = "recipeImg" + String(i);
      img.id = "recipeImg" + String(i);
      let col = document.querySelector(".column");
      col.appendChild(img);
      console.log(
        "https://res.cloudinary.com/dkltr3zmo/" +
        recipieId +
        "/" +
        String(i) +
        ".jpg" +
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
    request.open("GET", url, false);
    request.send();
    if (request.status == 200) {
      return true;
    }
  }

  return false;
}
