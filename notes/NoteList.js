import { useNotes, deleteNote, editNote } from "./NoteDateProvider.js";
import noteComponent from "./Note.js";





const eventHub = document.querySelector(".container")
const contentElement = document.querySelector(".noteListContainer")
// const contentTarget = document.querySelector(".noteFormContainer")


const NoteListComponent = () => {
    // Get a reference to the `<article class="content">` element (tells which class to insert the HTML)
    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id.startsWith("editNote--")) {
            const [prefix, id] = clickEvent.target.id.split("--")
            const editEvent =  new CustomEvent ("edit button clicked", {
                detail: {
                    id: id
                }
            })
        }
        if (clickEvent.target.id.startsWith("deleteNote--")) {
            const [prefix, id] = clickEvent.target.id.split("--")
            
            /*
                Invoke the function that performs the delete operation.
    
                Once the operation is complete you should THEN invoke
                useNotes() and render the note list again.
            */
           deleteNote(id).then(
               () => {
                   const updatedNotes = useNotes()
                   render(updatedNotes)
               }
           )
        }
    })
    eventHub.addEventListener("showNoteButtonClicked", event => {
        const allTheNotes = useNotes()
        
        render(allTheNotes)
    })
    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id.startsWith("editNote--")) {
          const [prefix, Id] = clickEvent.target.id.split("--");
          const currentnotes = useNotes()
          let theNotethatMatchestheEditButton = currentnotes.find(note =>
              note.id === parseInt(Id, 10))

              console.log(theNotethatMatchestheEditButton)

        document.querySelector("#note-id").value = theNotethatMatchestheEditButton.id
        document.querySelector("#note-text").value = theNotethatMatchestheEditButton.noteText
        document.querySelector("#note-suspect").value = theNotethatMatchestheEditButton.noteSuspect
          // find object by id then send to editNoteComponent
          //use the find array method, on current notes to find the note with an id that matches the id you grabbed off the edit button
          //console log that note 
          
        }
      });
    
      eventHub.addEventListener("noteEdited", clickEvent => {
        console.log("edited note message heard")
    
          editNote(clickEvent.detail).then(() => render(useNotes()));
        
      });
    

    const render = (notesCollection) => {

    
    contentElement.innerHTML = `
        <h2>Cold Case Notes</h2>
            ${
                notesCollection.map(
                    currentnote => {
                return noteComponent(currentnote);
              })
              .join("")}
        </section>
    `;
  }
}

export default NoteListComponent
