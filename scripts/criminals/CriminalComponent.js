const CriminalComponent = (criminal) => {
    return `
        <div class="criminals">
           
            <header class= "criminals__name"> ${criminal.name}</header>
        
            <div>age: ${criminal.age}</div>
            <div>crime: ${criminal.conviction}</div>
            <div>Term Start: ${new Date(criminal.incarceration.start).toLocaleDateString('en-US')}</div>
            <div>Term End: ${new Date(criminal.incarceration.end).toLocaleDateString('en-US')}</div>
        </div>
    `
}

export default CriminalComponent
