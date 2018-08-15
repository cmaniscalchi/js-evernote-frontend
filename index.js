document.addEventListener("DOMContentLoaded", () => {


  console.log("DOM loaded");

})
const notesUrl = 'http://localhost:3000/api/v1/notes';
const usersUrl = 'http://localhost:3000/api/v1/users';
const post1 = {title:"Claudia's Test", body:'Posting my first note!', user:'claudia-new'}
const config = {
	method: "POST",
	headers: {'Content-Type': 'application/json'},
	body: JSON.stringify(post1)
}

fetch(notesUrl).then(res => res.json()).then(response => console.log(response));

fetch(notesUrl, config).then(res => res.json()).then(response => console.log(response))
