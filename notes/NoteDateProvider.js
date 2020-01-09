let notes = []

export const useNotes = () => {
    return notes;
};

export const getNotes = () => {
    return fetch('http://localhost:8088/notes', {
        method: "GET",
}
    ).then(response => response.json())
    .then(parsedNotes => {
            // console.table(parsedNotes);
            notes = parsedNotes.slice()
        })

    }

export const saveNote = note => {
    fetch('http://localhost:8088/notes', {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(note)
    })
    .then(getNotes)
}
export const deleteNote = noteId => {
    return fetch(`http://localhost:8088/notes/${noteId}`, {
        method: "DELETE"
    })
        .then(getNotes)
}
export const editNote = (note) => {
    return fetch(`http://localhost:8088/notes/${note.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(note)
    })
        .then(getNotes)
}
