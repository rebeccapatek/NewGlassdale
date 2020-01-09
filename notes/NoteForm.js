import { saveNote, editNote, useNotes } from "./NoteDateProvider.js"


const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".noteFormContainer")

const NoteFormComponent = () => {
    eventHub.addEventListener("editButtonClicked", event => {
        const noteToBeEdited = event.detail.id

        const allNotesArray = useNotes()

        const theFoundedNote = allNotesArray.find(
            (currentNoteObject) => {
                return currentNoteObject.id === parseInt(noteToBeEdited, 10)
            }
        )

        document.querySelector("#note-id").value = theFoundedNote.id
        document.querySelector("#note-text").value = theFoundedNote.text
        document.querySelector("#note-suspect").value = theFoundedNote.suspect
    })
    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === "saveNote") {
            const hiddenInputValue = document.querySelector("#note-id").value
            if (hiddenInputValue !== "") {
                const editedNote = {
                    id: parseInt(document.querySelector("#note-id").value, 10),
                    text: document.querySelector("#note-text").value,
                    suspect: document.querySelector("#note-suspect").value,
                    date: Date.now()
                }

                editNote(editedNote).then(() => {
                    eventHub.dispatchEvent(new CustomEvent("noteHasBeenEdited"))
                })
            }
            else {
            const newNote = {
                "noteText": document.querySelector("#note-text").value,
                "noteSuspect": document.querySelector("#note-suspect").value,
                "date": Date.now()

            }
            saveNote(newNote)
        }
    }})

    eventHub.addEventListener("click", clickEvent  => {
        if(clickEvent.target.id === "showNotes") {
        const message = new CustomEvent("showNoteButtonClicked")
        eventHub.dispatchEvent(message)
        console.log("show notes was clicked")
    }})
    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id ==="showWitnesses") {
            const showW = new CustomEvent ("showWitnessesButtonClicked")
            eventHub.dispatchEvent(showW)
            console.log("show Witness button was clicked")
        }
    })

    const render = () => {
        contentTarget.innerHTML = `
            <div>
                <br><input type="hidden" id="note-id"></br>
                <br><input type="text" id="note-text">What is your note?</br>
                <br><input type="text" id="note-suspect">Who is your note about?</br>
                <input type="date" id="note-datestamp">
                <button id="saveNote">Save Note</button>
                <button id="showNotes">Show Notes</button>
                <button id="showWitnesses">Show Witnesses</button>
            </div>
        `
    }

    render()
}

export default NoteFormComponent

