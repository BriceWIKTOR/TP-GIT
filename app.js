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

  if (localStorage.getItem("notes")) {
    noteArrays.push(JSON.parse(localStorage.getItem("notes")));
  } else {
    noteArrays.push(noteObject);
  }
  localStorage.setItem("notes", JSON.stringify(noteArrays));
  // alert("vous avez ajouter la note" + title);
}

function displayNote() {
  const parseNote = JSON.parse(localStorage.getItem("notes"));

  console.log(parseNote);
}

displayNote();
