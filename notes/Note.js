const noteComponent = (note) => {
    return `
    <div class="note">
    <div>Date: ${note.date}</div>
    <div>Suspect: ${note.noteSuspect}</div>
    <div>Note: ${note.noteText}</div>
    <button id="deleteNote--${note.id}">Delete</button>
    <button id="editNote--${note.id}">Edit</button>
    </div>
    `
  }
  
  export default noteComponent