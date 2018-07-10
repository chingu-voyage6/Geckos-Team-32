const content = document.querySelector(".content");
const showRecipesBtn = document.querySelector("#showRecipesBtn");
const userNameTD = document.querySelector("#userNameTD");
const userFamilyNameTD = document.querySelector("#userFNTD");
const userEmailTD = document.querySelector("#userEmailTD");
const userLocTD = document.querySelector("#userLocTD");
const userID = document.querySelector("#userID");

const userEmail = document.querySelector("#userEmail");

const errMsg = document.querySelector("#errorMsg");

var locationFindedItem = "";
var IsUerExist = false;
var userid='';

showRecipesBtn.addEventListener("click", () => {
  let userItem = db
    .collection("users")
    .where("email", "==", userEmail.value.trim());
  //console.log("1 " + userItem);
  userItem.get().then(function (snapshot) {
    //console.log("2 " + snapshot);
    if ((snapshot.docs.length == 0)) {
      errMsg.textContent =
        "The user with e-mail:" + userEmail.value.trim() + " does not exist!";
    } else {
      let ustItem = snapshot.docs[0].data();
      userid=snapshot.docs[0].id;
      //console.log("3 " + ustItem);
      userNameTD.textContent = ustItem.name;
      userFamilyNameTD.textContent = ustItem.familyname;
      userEmailTD.textContent = ustItem.email;
      userID.textContent=userid;
      //checkLocation(ustItem.location.id);

     // let localionItem = db.collection("locations");
      //localionItem = localionItem.where("id", "==", locID.trim());
      //localionItem
      //  .doc(ustItem.location.id.trim())
      //  .get()
      //  .then(snapshot => {
      //    if (snapshot.exists) {
      //      doc = snapshot.data();
      //      try {
      //        userLocTD.textContent =
      //          doc.country.trim() + ", " + doc.city.trim();
      //      } catch {
      //        userLocTD.textContent = "1";
      //      }

      //    }
      //  });

      let recipesCollection = db
        .collection("Recipes")
        .where("User", "==", userid);

        recipesCollection.get().then(function (snapshot) {
        snapshot.docs.forEach(doc => {
          let UL = document.createElement("ul");
          UL.textContent = doc.data().Title;
          content.appendChild(UL);

        });


      });
    }
  });
});

db.collection("recipe")
  .get()
  .then(snapshot => {
    snapshot.docs.forEach(doc => {
      let docData = doc.data();
      IsUerExist = false;
      //console.log("0 " + docData);
    });
  });
