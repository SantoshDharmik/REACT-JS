import React, { useState } from 'react'

import LanguageGrid from "./components/LanguageGrid.jsx"

// for practice 
// import LanguageGrid1 from "./components/LanguageGrid1.jsx"
// import { AddLanguage } from "./components/addLanguageForConsole.jsx"

import AddLanguageUi from "./components/addLanguageUi.jsx"

import { languages } from './components/Dataset.js'

import "../node_modules/bootstrap/dist/css/bootstrap.css"

import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"

const App = () => {
  let [dataSetLanguages, setDataSetLanguages] = useState(languages)
  return (
    <>
      {/* extra for practice */}
      {/* <AddLanguage/> */}
      {/* <LanguageGrid1/> */}
      {/* main function */}

      <AddLanguageUi dataSetLanguages={dataSetLanguages} dataSetLanguagesHandler={setDataSetLanguages} />

      <LanguageGrid dataSetLanguages={dataSetLanguages} />

    </>
  )
}

export default App