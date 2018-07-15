const UserName = document.querySelector("#UserName");
const UserEmail = document.querySelector("#UserEmail");
const userBtn = document.querySelector("#UserBtn");
const errMsg = document.querySelector("#errorMsg");



userBtn.addEventListener("click", () => {
    if(UserName.value==""){
        alert("Provide a username");
    }else if(UserEmail.value==""){
        alert("Provide an email");
    }else{
        db.collection("users").where("email", "==", UserEmail.value)
            .get()
            .then((querySnapshot) => {
                console.log("querySnapshot.docs");
                console.log(querySnapshot.docs);
                if(querySnapshot.docs[0].exists == true){          
                    querySnapshot.forEach((doc)=> {
                        let userObj = doc.data();
                        console.log(userObj.email);
                        console.log(userObj.name);
                        if(userObj.email == UserEmail.value && userObj.name == UserName.value){
                            errMsg.style.color = "green";
                            errMsg.textContent = "logged in";
            /* this part sets two localsorage vars and redirects in user page */
                            localStorage.setItem("user", UserName.value);
                            localStorage.setItem("login", "in");
                            location.href = "user_page.html";
                            
                        }else{
                            errMsg.style.color = "red";
                            errMsg.textContent = "Check name spelling";
                        }

                    });
                }
            })
            .catch(function(error) {
                errMsg.style.color = "red";
                errMsg.textContent = "Check mail spelling";
                console.log("Error getting documents: ", error);
    });

            
            
            
           /* console.log(snapshot.docs);
            if(snapshot.docs.lenght > 0){ 
            console.log(doc.id, " => ", doc.data()); 
            }else{
                alert("no record");
            }
            });*/
    }
});