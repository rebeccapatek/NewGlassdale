import { useConvictions } from "./ConvictionProvider.js"

// Get a reference to the DOM element where the <select> will be rendered
const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__crime")
const ConvictionSelect = () => {
    // Get all convictions from application state
    const convictions = useConvictions()
    eventHub.addEventListener("change", changeEvent => {
        if (changeEvent.target.classList.contains("dropdown")) {
            const selectedConviction = changeEvent.target.value.split("-").join(" ")
            const message = new CustomEvent("convictionSelected", {
                detail: {
                   crime: selectedConviction 
                }
            })
            eventHub.dispatchEvent(message)
        }
    })

    const render = convictionsCollection => {
        console.log(convictionsCollection)
        // Goes through all the objects in an array and passes each one through a new function
        let options = convictionsCollection.map(conviction => 
        `<option value=${conviction.split(" ").join("-")}>${conviction}</option>` ).join(" ")
         console.log(options)   
        /*
            Use interpolation here to invoke the map() method on
            the convictionsCollection to generate the option elements.
            Look back at the example provided above.
        */
        contentTarget.innerHTML = `
            <select class="dropdown" id="crimeSelect">
                <option value="0">Please select a crime...</option>
                ${options}

            </select>
            `
    }
      

    render(convictions)
}


export default ConvictionSelect