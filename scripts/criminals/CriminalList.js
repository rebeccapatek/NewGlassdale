import { useCriminals } from "./CriminalDataProvider.js";
import CriminalComponent from "./CriminalComponent.js";

const eventHub = document.querySelector(".container")
const contentElement = document.querySelector(".criminalsContainer")
// const CriminalListComponent = () => {
//     // Get a reference to the `<article class="content">` element (tells which class to insert the HTML)
//     const contentElement = document.querySelector(".criminalsContainer");
//     const criminals = useCriminals() 

//     contentElement.innerHTML += `
//         <section class="criminalsContainer">
//             ${
//                 criminals.map(
//                     currentcriminal => {
//                 return CriminalComponent(currentcriminal);
//               })
//               .join("")}
//         </section>
//     `;
//   };
//   export default CriminalListComponent;

const CriminalListComponent = () => {
    // Load the application state to be used by this component
    const appStateCriminals = useCriminals()

    // What should happen when detective selects a crime?
    eventHub.addEventListener('convictionSelected', event => {
        const crime = event.detail.crime
        const findingCriminalsWhoDidACrime = appStateCriminals.filter(
            (currentCriminal) => {
                if (currentCriminal.conviction === crime) {
                    return currentCriminal
                }
            }
        )
        render (findingCriminalsWhoDidACrime)
})

eventHub.addEventListener('officerSelected', selectEvent => {
    const officer = selectEvent.detail.officer
    const findingCriminalsWhoWereArrestedByAnOfficer = appStateCriminals.filter(
        (currentCriminal) => {
            if (currentCriminal.arrestingOfficer === officer) {
                return currentCriminal
            }
        }
    )
    render (findingCriminalsWhoWereArrestedByAnOfficer)
})

let render = criminals => {
    contentElement.innerHTML = `
                ${
                    criminals.map(
                        singleCriminalObject => {
                           return CriminalComponent(singleCriminalObject)
                        })
                        .join("")}`
               
                }
        
            }
    
export default CriminalListComponent