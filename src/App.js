import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import {faSignOutAlt, faCartArrowDown, faSearch, faMapMarker } from '@fortawesome/free-solid-svg-icons'
import Router from './config/Router'
import './App.css'

library.add(fab, faSignOutAlt, faCartArrowDown, faSearch, faMapMarker)

function App() {
  return (
    <div className='App'>
        <Router/>
    </div>
  )
}

export default App