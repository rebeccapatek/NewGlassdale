
import WitnessComponent from "./WitnessComponent.js";
import { useWitnesses } from "./witnessDataProvider.js";


const eventHub = document.querySelector(".container")
const contentElement = document.querySelector(".criminalsContainer")

const WitnessListComponent = () => {
    const witnesses = useWitnesses() 
    // Get a reference to the `<article class="content">` element (tells which class to insert the HTML)
    eventHub.addEventListener("click", changeEvent => {
        if (changeEvent.target.id === "showWitnesses") {
            render(witnesses)
                }
            }
              )
        
              }

  
    const render = (witnesses) => {
    contentElement.innerHTML = `
        ${
                witnesses.map(
                    currentwit => {
                return WitnessComponent(currentwit);
              })
              .join("")}}
    `
}

  
  export default WitnessListComponent;