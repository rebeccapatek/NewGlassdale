let notes = []

export const useNotes = () => {
    return notes;
};

export const getNotes = () => {
    debugger
    return fetch('http://localhost:8088/notes', {
        method: "GET",
}
    ).then(response => response.json())
    .then(parsedNotes => {
            // console.table(parsedNotes);
            notes = parsedNotes.slice()
        })

    }

// export const getNotes = () => {
//     // Load database state into application state
//     return fetch("http://localhost:8088/notes")
//         .then(response => response.json())
//         .then((noteArray) => {
//             notes = noteArray.slice()
//         })
// }
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
