import { getCriminals } from './criminals/CriminalDataProvider.js'
import CriminalComponent from './criminals/CriminalComponent.js'

getCriminals().then(
    CriminalComponent
    /*
        Now that you have the data, what
        component should be rendered?
    */
)