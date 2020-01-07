import { saveNote } from "./NoteDateProvider"

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
    const render = () => {
        contentTarget.innerHTML = `
            <input type="text" id="note-text">
            <input type="text" id="note-suspect">
            <input type="date" id="note-datestamp">

            <button id="saveNote">Save Note</button>
        `
    }

    render()
}

export default NoteFormComponent

