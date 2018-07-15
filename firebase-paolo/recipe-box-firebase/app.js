const recipeList = document.querySelector('#recipes-list');
const PersonalList = document.querySelector('#personal-list');
const recipe = document.querySelector('#recipes');
var paoloRef = firebase.database().ref("users/paolo");
const key = localStorage.getItem("user");
const logged = localStorage.getItem("login");

console.log(logged);

// user button click that modify const logged  
    log_button.addEventListener("click", () =>{
    document.getElementById("log_button").innerHTML = "log in";
    document.getElementById("user_button").style.display = "none";
    localStorage.setItem("login", "out");
});

// set users page button hided / visible on logged true/false

if(logged == "in"){
document.getElementById("user_button").style.display = "block";
document.getElementById("log_button").innerHTML = "log out";
};

//personal list creation

document.addEventListener('DOMContentLoaded', function personal_page(){
    if(document.querySelector("#myspan")){
        document.getElementById("myspan").textContent = key + "'s";
        }
    }, false);



//element list creation

function renderRecipes(doc){
    let li = document.createElement('li');
    let Title = document.createElement('span');
    let Ingredients = document.createElement('span');
    let Directions = document.createElement('span');
    let Remove = document.createElement('div');
    
// element data getting methods

    li.setAttribute('data-id', doc.id);
    Title.textContent = doc.data().Title;
    Ingredients.textContent = doc.data().Ingredients;
    Directions.textContent = doc.data().Directions;
    

// appending elements as childs of li element

    li.appendChild(Title);
    li.appendChild(Ingredients);
    li.appendChild(Directions);
    li.appendChild(Remove);


// appending elements as childs of ul

    recipeList.appendChild(li);

    Remove.addEventListener('click', (e) => {
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute('data-id');
        db.collection('Recipes').doc(id).delete();
    });
}

//pesonal list creation

function renderpersonalRecipes(doc){
    let li = document.createElement('li');
    let Title = document.createElement('span');
    let Ingredients = document.createElement('span');
    let Directions = document.createElement('span');
    let Remove = document.createElement('div');
    
// element data getting methods

    li.setAttribute('data-id', doc.id);
    Title.textContent = doc.data().Title;
    Ingredients.textContent = doc.data().Ingredients;
    Directions.textContent = doc.data().Directions;

// appending elements as childs of li element

    li.appendChild(Title);
    li.appendChild(Ingredients);
    li.appendChild(Directions);
    li.appendChild(Remove);
// appending elements as childs of ul

    PersonalList.appendChild(li);

    Remove.addEventListener('click', (e) => {
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute('data-id');
        db.collection('Recipes').doc(id).delete();
    });
}

// get data
db.collection('Recipes').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderRecipes(doc);
    });
} );

db.collection('Recipes').where("User", "==", key).get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderpersonalRecipes(doc);
    });
} );