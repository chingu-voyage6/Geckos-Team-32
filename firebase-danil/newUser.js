const newUserForm = document.querySelector(".newUser");
const newUserName = document.querySelector("#newUserName");
const newUserFamilyName = document.querySelector("#newUserFamilyName");
const newUserEmail = document.querySelector("#newUserEmail");
const newUserCountry = document.querySelector("#newUserCountry");
const newUserCity = document.querySelector("#newUserCity");
const errMsg = document.querySelector("#errorMsg");
const newUserBtn = document.querySelector("#newUserBtn");

var locationFindedItem = '';
var IsUerExist = false;


newUserBtn.addEventListener("click", () => {
    let userItem = db.collection('users').where('email', '==', newUserEmail.value.trim());
    console.log("1 " + userItem);
    userItem.get().then(function (snapshot) {
        console.log("2 " + snapshot);
        if (snapshot.docs.length > 0) {
            errMsg.textContent = "The user with e-mail:" + newUserEmail.value.trim() + " is already exist!";
            //return IsUerExist;
        } else {

            console.log("3 " + snapshot.docs.length);
            checkLocation();
        }

        if (locationFindedItem == '') {
            //db.collection('locations').add({
            //    city: newUserCity.value.trim(),
            //    country: newUserCountry.value.trim()
            //})

        }
    });
});


function checkLocation() {

    console.log(newUserCity.value.trim());
    console.log(newUserCountry.value.trim());

    let localionItem = db.collection('locations');
    localionItem = localionItem.where("city", "==", newUserCountry.value.trim());
    console.log(localionItem);
    localionItem = localionItem.where('country', '==', newUserCountry.value.trim());
    console.log(localionItem);
    localionItem.get().then((snapshot) => {
        if (snapshot.docs.length > 0) {
            doc = snapshot.docs[0];
            locationFindedItem = doc;
            //locationFindedItem = doc.id;
            console.log(doc.id);
        }
    });
}

db.collection('recipe').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        let docData = doc.data();
        IsUerExist = false;
    });
});


