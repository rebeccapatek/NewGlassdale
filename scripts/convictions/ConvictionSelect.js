import { useConvictions } from "./ConvictionProvider.js"

// Get a reference to the DOM element where the <select> will be rendered
const contentTarget = document.querySelector(".filters__crime")
const eventHub = document.querySelector(".container")
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
        let options = convictionsCollection.map = (conviction => `
        <option value=${convictions.split(" ").join("-")}>${conviction}</option> `).join(" ")
            
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
      

    render(convictions)
}
}

export default ConvictionSelect