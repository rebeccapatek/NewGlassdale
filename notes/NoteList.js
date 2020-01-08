import { useNotes, deleteNote } from "./NoteDateProvider.js";
import noteComponent from "./Note.js";





const eventHub = document.querySelector(".container")
const contentElement = document.querySelector(".noteListContainer")


const NoteListComponent = () => {
    // Get a reference to the `<article class="content">` element (tells which class to insert the HTML)
    eventHub.addEventListener("click", clickEvent => {
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
