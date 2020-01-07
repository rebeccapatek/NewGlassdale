import { useNotes } from "./NoteDateProvider.js";
import noteComponent from "./Note.js";


const eventHub = document.querySelector(".container")
const contentElement = document.querySelector(".noteListContainer")


const NoteListComponent = () => {
    // Get a reference to the `<article class="content">` element (tells which class to insert the HTML)
    eventHub.addEventListener("showNoteButtonClicked", event => {
        const allTheNotes = useNotes()
        
        render(allTheNotes)
    })

    const render = (notesCollection) => {

    
    contentElement.innerHTML = `
        <section class="noteListContainer">
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
