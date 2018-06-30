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

newUserBtn.addEventListener("click", function () {
    
    checkUser();
    if (!IsUerExist) {
        checkLocation();
    }
    else {
        errMsg.textContent = "The user with e-mail:" + newUserEmail.value.trim() + " is already exist!";
    }
});

function checkUser() {

    let userItem = db.collection('users').where('email', '==', newUserEmail.value.trim());
    userItem.get().then(function (snapshot) {
        if (snapshot.docs.length > 0) {
            IsUerExist = true;
        }
    });
    
    console.log(IsUerExist);
}



function checkLocation() {

    console.log(newUserCity.value.trim());
    console.log(newUserCountry.value.trim());

    let localionItem = db.collection('locations');
    localionItem = localionItem.where('city', '==', newUserCity.value.trim());
    localionItem = localionItem.where('country', '==', newUserCountry.value.trim());
    localionItem.get().then((snapshot) => {
        if (snapshot.docs.length > 0) {
            doc = snapshot.docs[0];
            locationFindedItem = doc;
            //locationFindedItem = doc.id;
            console.log(doc.id);
        }
    });
}
