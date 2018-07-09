const newUserForm = document.querySelector(".newUser");
const newUserName = document.querySelector("#newUserName");
const newUserFamilyName = document.querySelector("#newUserFamilyName");
const newUserEmail = document.querySelector("#newUserEmail");

const errMsg = document.querySelector("#errorMsg");
const newUserBtn = document.querySelector("#newUserBtn");

var locationFindedItem = '';
var IsUerExist = false;

newUserBtn.addEventListener("click", () => {
    newUserBtn.disabled=true;
    errMsg.textContent = "";
    /* required imput fields */ 
    let userItem = db.collection('users').where('email', '==', newUserEmail.value.trim());
    //console.log("1 " + userItem);
    userItem.get().then(function (snapshot) {
        //console.log("2 " + snapshot);
        if(newUserName.value.length == 0){
            alert("name required");
        }else if(newUserEmail.value.length == 0){
            alert("Mail required");
        }else if (snapshot.docs.length > 0) {
            errMsg.style.color = "red";
            errMsg.textContent = "The user with e-mail:" + newUserEmail.value.trim() + " already exist!";

        } else {
            try {
                db.collection('users').add({
                    email: newUserEmail.value.trim(),
                    familyname: newUserFamilyName.value.trim(),
                    name: newUserName.value.trim()
                })
                errMsg.style.color = "green";
                errMsg.textContent = "User succesfully created!";
            }
            catch{
                errMsg.style.color = "red";
                errMsg.textContent = "Something gone wrong!!!";
            }
            
        }
        newUserBtn.disabled=false;
    });
});
