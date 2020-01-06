import { useCriminals } from "./CriminalDataProvider.js";
import CriminalComponent from "./CriminalComponent.js";
console.log("Crimi")
const CriminalListComponent = () => {
    // Get a reference to the `<article class="content">` element (tells which class to insert the HTML)
    const contentElement = document.querySelector(".criminalsContainer");
    const criminals = useCriminals() 

    contentElement.innerHTML += `
        <section class="criminalsContainer">
            ${
                criminals.map(
                    currentcriminal => {
                return CriminalComponent(currentcriminal);
              })
              .join("")}
        </section>
    `;
  };
  export default CriminalListComponent;
