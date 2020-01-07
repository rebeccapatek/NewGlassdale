import { saveNote } from "./NoteDateProvider.js"

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".noteFormContainer")

const NoteFormComponent = () => {
    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === "saveNote") {
            const newNote = {
                "noteText": document.querySelector("#note-text").value,
                "noteSuspect": document.querySelector("#note-suspect").value,
                "date": Date.now()

            }
            saveNote(newNote)
        }
    })
    eventHub.addEventListener("click", clickEvent  => {
        if(clickEvent.target.id === "showNotes") {
        const message = new CustomEvent("showNoteButtonClicked")
        eventHub.dispatchEvent(message)
        console.log("show notes was clicked")
    }})

    const render = () => {
        contentTarget.innerHTML = `
            <div>
                <br><input type="text" id="note-text">What is your note?</br>
                <br><input type="text" id="note-suspect">Who is your note about?</br>
                <input type="date" id="note-datestamp">
                <button id="saveNote">Save Note</button>
                <button id="showNotes">Show Notes</button>
            </div>
        `
    }

    render()
}

export default NoteFormComponent

