const recipeList = document.querySelector('#recipes-list');
const PersonalList = document.querySelector('#personal-list');
const recipe = document.querySelector('#recipes');
var paoloRef = firebase.database().ref("users/paolo");
var key = localStorage.getItem("user");

//personal list creation

document.addEventListener('DOMContentLoaded', function personal_page(){
    if(document.querySelector("#myspan")){
        document.getElementById("myspan").textContent = key + "'s";
        }
    }, false);



/*element list creation

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
    Remove.textContent = "x"

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

*/

//personal list creation

function renderpersonalRecipes(doc){
    let li = document.createElement('li');
    let Title = document.createElement('span');
    let Ingredients = document.createElement('span');
    let Directions = document.createElement('span');
    let Remove = document.createElement('div');
    let Edit = document.createElement('BUTTON');
    Edit.className = "edit";
    
// element data getting methods

    li.setAttribute('data-id', doc.id);
    Title.textContent = doc.data().Title;
    Ingredients.textContent = doc.data().Ingredients;
    Directions.textContent = doc.data().Directions;
    Remove.textContent = "x"
    Edit.textContent = "Edit" //not biulded yet!!!!

// appending elements as childs of li element

    li.appendChild(Title);
    li.appendChild(Ingredients);
    li.appendChild(Directions);
    li.appendChild(Remove);
    li.appendChild(Edit);

// appending elements as childs of ul

    PersonalList.appendChild(li);

    Remove.addEventListener('click', (e) => {
        e.stopPropagation();
        let id = e.target.parentElement.getAttribute('data-id');
        db.collection('Recipes').doc(id).delete();
    });
}

// get data
 /*   db.collection('Recipes').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderpersonalRecipes(doc);
    });
} );*/

    db.collection('Recipes').where("User", "==", key).get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        console.log("recipe");
        renderpersonalRecipes(doc);
    });
} );
// save data

recipe.addEventListener('submit', (e) => {
    e.preventDefault();
        db.collection('Recipes').add({
        Title: recipe.title.value,
        Ingredients: recipe.ingredients.value,
        Directions: recipe.directions.value,
        user: key
    });
        recipe.title.value = "";
        recipe.ingredients.value = "";
        recipe.directions.value = "";
});