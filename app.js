const newTitle = document.getElementById("newTitleInput");
const newText = document.getElementById("newTextInput");
const createBtn = document.getElementById("createBtn");
const notesContainer = document.getElementById("notesListContainer");
const notesListContainer = document.getElementById("notesListContainer")

createBtn.addEventListener("click", addNote);

function addNote() {

    // on récupère les input de la note à créer
  let title = newTitle.value;
  let text = newText.value;
  var noteObject = {
    title: title,
    text: text,
  };
// on définit l'array ou seront stocké les notes
 

  // si des notes sont stockées :
  if (localStorage.getItem("notes")) {
// on les récupère :
 let noteExistantes = localStorage.getItem("notes");
 console.log("les notes récupérées : " + noteExistantes);
 
 // on les parse :
 let noteParses = JSON.parse(noteExistantes);
 console.log("les notes après le parse : " + noteParses);

// on les push dans le tableau

    noteParses.push(noteObject);
    console.log("le nouveau tableau : " + noteParses);
  localStorage.setItem("notes", JSON.stringify(noteParses));

    alert("on a un objet")
  } else {
    var noteArrays = [];
    noteArrays.push(noteObject);
  localStorage.setItem("notes", JSON.stringify(noteArrays));

    alert("on pousse la note dans le tableau")
  }
  // on push l'ensemble dans le localStorage :

  alert("vous avez ajouter la note " + title);
}

function displayNote() {
  const parseNote = JSON.parse(localStorage.getItem("notes"));

  console.log(parseNote);

for (i = 0; i < parseNote.length; i++) {

  let ulCreate = document.createElement("ul");
  ulCreate.innerHTML  = `<h1> ${parseNote[i].title} </h1>` + `<p> ${ parseNote[i].text} </p>` ;
  notesListContainer.appendChild(ulCreate);
}
}

displayNote();
