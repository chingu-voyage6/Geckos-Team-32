const showRecipesBtn = document.querySelector("#showRecipesBtn");

const userNameTD = document.querySelector("#userNameTD");
const userFamilyNameTD = document.querySelector("#userFNTD");
const userEmailTD = document.querySelector("#userEmailTD");
const userLocTD = document.querySelector("#userLocTD");

const userEmail = document.querySelector("#userEmail");

const errMsg = document.querySelector("#errorMsg");

var locationFindedItem = "";
var IsUerExist = false;

showRecipesBtn.addEventListener("click", () => {
  let userItem = db
    .collection("users")
    .where("email", "==", userEmail.value.trim());
  console.log("1 " + userItem);
  userItem.get().then(function(snapshot) {
    console.log("2 " + snapshot);
    if ((snapshot.docs.length = 0)) {
      errMsg.textContent =
        "The user with e-mail:" + userEmail.value.trim() + " does not exist!";
    } else {
      let ustItem = snapshot.docs[0].data();
      console.log("3 " + ustItem);
      userNameTD.textContent = ustItem.name;
      userFamilyNameTD.textContent = ustItem.familyname;
      userEmailTD.textContent = ustItem.email;
      checkLocation(ustItem.location.id);
      try {
        userLocTD.textContent =
          locationFindedItem.country.trim() + ", " + locationFindedItem.city.trim();
      } catch {
        userLocTD.textContent = "1";
      }
      let a = 0;
    }
  });
});

function checkLocation(locID) {
  let localionItem = db.collection("locations");
  //localionItem = localionItem.where("id", "==", locID.trim());
  localionItem
    .doc(locID.trim())
    .get()
    .then(snapshot => {
      if (snapshot.exists) {
        doc = snapshot.data();

        console.log("4 " + doc);
        locationFindedItem = doc;
      }
    });
}

db.collection("recipe")
  .get()
  .then(snapshot => {
    snapshot.docs.forEach(doc => {
      let docData = doc.data();
      IsUerExist = false;
      console.log("0 " + docData);
    });
  });
