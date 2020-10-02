showNotes();
function toggleMenu() {
    let navigation = document.querySelector('.navigation');
    let toggle = document.querySelector('.toggle');
    navigation.classList.toggle('active');
    toggle.classList.toggle('active');
}

console.log('my notes')

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', addNotes)

function addNotes() {

    let addHead = document.getElementById('addHead');
    let addTxt = document.getElementById('addTxt');
    let Notes = localStorage.getItem('Notes');
    let NotesObj;
    if (Notes == null) {
        NotesObj = [];
    }
    else {
        NotesObj = JSON.parse(Notes);
    }
    let MyNotesObj = {
        Head: addHead.value,
        Txt: addTxt.value
    }
    NotesObj.push(MyNotesObj);
    localStorage.setItem('Notes', JSON.stringify(NotesObj))
    showNotes();
    addHead.value = "";
    addTxt.value = "";
}

function showNotes() {
    let Notes = localStorage.getItem('Notes');
    if (Notes == null) {
        NotesObj = [];
    }
    else {
        NotesObj = JSON.parse(Notes);
    }
    let string = " ";
    NotesObj.forEach(function (element, index) {
        string += `
                <div class="card my-3 mx-auto noteCard " style="width: 18rem;">
                    <div class="card-body text-center">
                        <h3 class="card-title ">${index + 1}. ${element.Head}</h3>
                        <p class="card-text">${element.Txt}</p>
                        <button class="btn btn-primary" onclick="deleteNote(this.id)" id=${index} >Delete Note</a>
                    </div>
                </div>
                `;
    });

    let notesElem = document.getElementById('notes');
    if (NotesObj.length != 0) {
        notesElem.innerHTML = string;
    }
    else {
        notesElem.innerHTML = `<p class="text-center justify-content-center mx-auto px-auto" style="font-size:20px;">**Nothing to show , Please Add your Notes using the 'Add a Note' section above , it seems tht you haven't added anything.<p>`;
    }
}


function deleteNote(index) {
    let Notes = localStorage.getItem('Notes');
    if (Notes == null) {
        NotesObj = [];
    }
    else {
        NotesObj = JSON.parse(Notes);
    }

    NotesObj.splice(index, 1);
    localStorage.setItem('Notes', JSON.stringify(NotesObj));
    showNotes();
}

let search = document.getElementById('searchTxt');
search.addEventListener('input', function () {

    let searchTxt = search.value.toLowerCase();

    let noteCard = document.getElementsByClassName('noteCard');
    Array.from(noteCard).forEach(function (element) {
        let head = element.getElementsByTagName('h5')[0].innerText.toLowerCase();
        let text = element.getElementsByTagName('p')[0].innerText.toLowerCase();

        if (head.includes(searchTxt) || text.includes(searchTxt)) {
            element.style.display = 'block';
        }
        else {
            element.style.display = 'none';
        }
    })

})