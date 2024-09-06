const newTitle = document.getElementById("newTitleInput");
const newText = document.getElementById("newTextInput");
const createBtn = document.getElementById("createBtn");
const notesContainer = document.getElementById("notesListContainer");


createBtn.addEventListener("click", addNote);

function addNote() {
    let title = newTitle.value;
    let text = newText.value;
    var noteObject = {
        title: title,
        text: text,
    };
    var noteArrays = [];
    noteArrays.push(noteObject);
    localStorage.setItem("Notes", JSON.stringify(noteArrays));
    
    // alert("vous avez ajouter la note" + title);
}