import { getCriminals } from './criminals/CriminalDataProvider.js'

import CriminalListComponent from './criminals/CriminalList.js'


getCriminals().then(
    CriminalListComponent
    /*
        Now that you have the data, what
        component should be rendered?
    */
)