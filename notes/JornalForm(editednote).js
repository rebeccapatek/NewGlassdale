const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".noteFormContainer")
const EditNoteComponent = note => {
    eventHub.addEventListener("click", clickEvent => {
      if(clickEvent.target.id.startsWith("saveEditedNote--")) {
  
    
        console.log("edited note save button clicked")
    
        const editedNote = new CustomEvent ("noteEdited",
        {
          detail: {
            date: document.querySelector("#editNoteDate").value,
            suspect: document.querySelector("#editNoteSuspect").value,
            text: document.querySelector("#editNoteSuspect").value,
            id: document.querySelector("#editNoteId").value
          }
        })
        
        eventHub.dispatchEvent(editedNote)
      }})
    const render = () => {
        contentTarget.innerHTML = `
    <div>
        <input type="hidden" id="editNoteId" value="${note.id}">
        <br><input type="text" id="editNoteEntry" value="${note.noteText}>What is your note?</br>
        <br><input type="text" id="id="editNoteSuspect"" value="${note.noteSuspect}>Who is your note about? </br>
        <input type="date" id="editNoteDate">
        <button id="saveEditedNote--${note.id}">Save Note</button>
    </div>
  `
    }
  render()
}
  export default EditNoteComponent
