const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filter__button")
///ask about this below what it needs to match up to 
let selectedOfficer = null
let selectedCrime = null

export const FilterComponent = () => {

    eventHub.addEventListener("officerSelected", event => {
        selectedOfficer = event.detail.officer 
    })

    eventHub.addEventListener("crimeSelected", event => {
        selectedCrime = event.detail.crime
    })

    eventHub.addEventListener("click", clickEvent => {
        if (clickEvent.target.id === "filterButton") {
            const message = new CustomEvent("filterInitiated", {
                detail: {
                    selectedOfficer: selectedOfficer ,
                    selectedCrime: selectedCrime
                    // What data should be provided?
                }
            })
            eventHub.dispatchEvent(message)
        }
    })
    const render = () => {
        contentTarget.innerHTML = `<button id="filterButton">Filter</button>`
    }

    render()
}

