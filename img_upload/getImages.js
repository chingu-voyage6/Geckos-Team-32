const cloudName = "dkltr3zmo";
const unsignedUploadPreset = "kj42vsaw";

// *********** Get files ******************** //
function handleFiles() {
    let recipieId = document.getElementById('idInput').value;

    try {
        getImages(recipieId);
    } catch {
        document.getElementById("header").textContent = "Something goes wrong.";
        document.getElementById("header").style.color = "red";
    }
};

function getImages(recipieId) {

}