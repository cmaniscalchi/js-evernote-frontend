document.addEventListener("DOMContentLoaded", () => {

})

const usersUrl = 'http://localhost:3000/api/v1/users';
const notesUrl = 'http://localhost:3000/api/v1/notes';
const sidebar = document.getElementById('sidenav')
const displayNotes = document.getElementById('display-notes')

const note = {user_id: "1", title:"Claudia's Test", body:'Posting my first note!'}
const noteConfig = {
  method: "POST",
  headers: {'Content-Type': 'application/json'},
  body: JSON.stringify(note)
}

// ---get notes---
fetch(notesUrl).then(res => res.json()).then(data => displayNotesInSidebar(data))
// ---create new note---
// fetch(notesUrl, noteConfig).then(res => res.json()).then(response => console.log(response))

// ---get user---
// fetch(usersUrl).then(res => res.json()).then(data => displayUsers(data));

function displayNotesInSidebar(data) {
  data.forEach(note => {
    let div = document.createElement('div')
    div.id = `note-${note.id}`
    div.className = "note-titles"
    div.innerHTML =
    `<p>${note.title}</p>
    <button id="button-${note.id}">Read</button>
    <hr>`
    sidebar.appendChild(div)
  })
}

sidebar.addEventListener("click", (event => {fetchSelectedNotes(event)}))

function fetchSelectedNotes(event) {
  if (event.target.id.includes("button-")) {
    const buttonId = event.target.id.slice(7)
    fetch(`${notesUrl}/${buttonId}`).then(res => res.json()).then(data => displaySelectedNotes(data))
  }
}

function displaySelectedNotes(data) {
  console.log(data)
  const div = document.createElement('div')
  console.log(div)
  div.id = `note-${note.id}`
  div.className = "note-details"
  div.innerHTML =
  `<h3>${data.title}</h3>
  <p>${data.body}<p>
  <hr>`
  displayNotes.appendChild(div)

}
