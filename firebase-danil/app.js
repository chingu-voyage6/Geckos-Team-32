const recepieList = document.querySelector(".content");

function renderRecepis(doc) {
    var recUl = document.createElement("ol");
    recUl.textContent = doc.Title;
    recepieList.appendChild(recUl);
    var ingUl = document.createElement("ul");
    ingUl.textContent = "Ingredients:";

    doc.ingredients.forEach(ing => {
        let ingli = document.createElement("li");
        let docRef = db.collection("Ingredients").doc(ing.id);
        docRef.get().then(
            function (ingDoc) {
                ingli.textContent = ingDoc.data().Name;

            })
        let priceDoc = db.collection('prices').where('ingredient', '==', ing);
        priceDoc.get()
            .then(function (ingPrice) {
                ingPrice.forEach(function (price) {
                    ingli.textContent += " (price:" + price.data().price + ')';
                });
            })
        ingUl.appendChild(ingli);
        recUl.appendChild(ingUl);
    });
}

db.collection('recipe').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderRecepis(doc.data());
    });
});