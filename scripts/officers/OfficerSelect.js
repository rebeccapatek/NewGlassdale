
import { useOfficers } from "./OfficerProvider.js"


// Get a reference to the DOM element where the <select> will be rendered
const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__officer")
const officerSelect = () => {
    // Get all convictions from application state
    const officers = useOfficers()
    eventHub.addEventListener("change", changeEvent => {
        if (changeEvent.target.classList.contains("dropdown")) {
            const selectedOfficer = changeEvent.target.value.split("-").join(" ")
            const message = new CustomEvent("officerSelected", {
                detail: {
                   officer: selectedOfficer 
                }
            })
            eventHub.dispatchEvent(message)
        }
    })

    const render = officerCollection => {
        console.log(officerCollection)
        // Goes through all the objects in an array and passes each one through a new function
        let options = officerCollection.map(officer => 
        `<option value=${officer.split(" ").join("-")}>${officer}</option>` ).join(" ")  
        /*
            Use interpolation here to invoke the map() method on
            the convictionsCollection to generate the option elements.
            Look back at the example provided above.
        */
        contentTarget.innerHTML = `
            <select class="dropdown" id="officerSelect">
                <option value="0">Please select an arresting officer...</option>
                ${options}

            </select>
            `
    }
      

    render(officers)
}


export default officerSelect