import { getCriminals } from './criminals/CriminalDataProvider.js'

import CriminalListComponent from './criminals/CriminalList.js'
import { getConvictions } from './convictions/ConvictionProvider.js'
import ConvictionSelect from './convictions/ConvictionSelect.js'
import NoteFormComponent from '../notes/NoteForm.js'
import { getNotes } from '../notes/NoteDateProvider.js'
import NoteListComponent from '../notes/NoteList.js'
import { getWitnesses } from './witnesses/witnessDataProvider.js'
import WitnessListComponent from './witnesses/WitnessList.js'

getNotes().then(
    ()=> 
        NoteListComponent()
    )

NoteFormComponent()


getCriminals().then(
    CriminalListComponent
)
getConvictions().then(ConvictionSelect)
getWitnesses().then(
    ()=>
    WitnessListComponent()
)