const WitnessComponent = witness => {
    ;
    return `
    <section class="witness">
    <div>Witness: ${witness.name}</div>
    <div>Statement: ${witness.statements}</div>
    </section>`
  
  }
  export default WitnessComponent
