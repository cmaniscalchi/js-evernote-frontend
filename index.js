document.addEventListener("DOMContentLoaded", () => {

})

const usersUrl = 'http://localhost:3000/api/v1/users';
const notesUrl = 'http://localhost:3000/api/v1/notes';

const note = {user_id: "1", title:"Claudia's Test", body:'Posting my first note!'}
const noteConfig = {
  method: "POST",
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify(note)
}

// ---get notes---
fetch(notesUrl).then(res => res.json()).then(data => displayNotesInSidebar(data));

// ---create new note---
// fetch(notesUrl, noteConfig).then(res => res.json()).then(response => console.log(response))

// ---get user---
// fetch(usersUrl).then(res => res.json()).then(data => displayUsers(data));

function displayNotesInSidebar(data) {
  const sidebarNotes = document.getElementById('sidenav')
  data.forEach(note => {
    let div = document.createElement('div')
    div.id = note.id
    div.className = "note-titles"
    div.innerHTML =
    `<p>${note.title}</p>
    <button>Read</button>
    <hr>`
    sidebarNotes.appendChild(div)
  })
}




// document.addEventListener("click", (event => {
//   if (event.target.innerText === "Read") {console.log(BUTTON!)}
// }))
