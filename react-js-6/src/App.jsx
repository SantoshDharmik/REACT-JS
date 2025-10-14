import React, { useState } from 'react'

import LanguageGrid from "./components/LanguageGrid.jsx"

import axios from 'axios'

// for practice 
// import LanguageGrid1 from "./components/LanguageGrid1.jsx"
// import { AddLanguage } from "./components/addLanguageForConsole.jsx"

import AddLanguageUi from "./components/addLanguageUi.jsx"

import { languages } from './components/Dataset.js'

import "../node_modules/bootstrap/dist/css/bootstrap.css"

import "bootstrap/dist/js/bootstrap.bundle.min.js"

const App = () => {
  let [dataSetLanguages, setDataSetLanguages] = useState(languages)
  // let [responseData, setResponseData] = useState(null)

  // async function fetchData() {
  //   try {

  //     let result = await axios({
  //       method: "GET",
  //       url: "http://localhost:4005/test/hello"
  //     })

  //     console.log(result.data)

  //     setResponseData(result.data)

  //   } catch(error){

  //      console.log("error while connecting to backend : " ,error)

  //   }
  // }

  return (
//     <>
//     <div className='d-flex flex-column justify-content-center'>
//       <button className="d-flex flex-column btn btn-dark fs-3 fw-bolder fst-italic text-success"onClick={fetchData}>Fetch Data</button>
//       {responseData ? <div>
  
//   {/* normal code  */}
//     {/* <h3>
//       Message: {responseData.message}
//     </h3>

//     <h3>
//       CheckCode:{responseData.checkCode}
//     </h3> */}

// {/* normal code  */}
//     {/* <div>
//       <h1>userData:</h1>
      
//       <ul>
//         <li>{responseData.userData.name}</li>
//         <li>{responseData.userData.phone}</li>
//         <li>{responseData.userData.age}</li>
//         <li>{responseData.userData.city}</li>
//         <li>{responseData.userData.gender}</li>
//         <li>{responseData.userData.address}</li>
//       </ul>
//     </div> */}


//     <div class="container my-4">
//   <div class="card shadow-lg">
//     <div class="card-header bg-success text-white text-center">
//       <h2 class="mb-0">Server Response</h2>
//     </div>
//     <div class="card-body">
//       <h4 class="card-text">
//         <strong>Message:</strong> {responseData.message}
//       </h4>
//       <h4 class="card-text mt-3">
//         <strong>Check Code: ✅</strong> {responseData.checkCode}
//       </h4>
//     </div>
//   </div>
// </div>


//   {/* styling code    */}
//   <div class="container my-4">
//   <div class="card shadow-lg">
//     <div class="card-header bg-primary text-white text-center">
//       <h2 class="mb-0">User Details</h2>
//     </div>
//     <div class="card-body">
//       <ul class="list-group list-group-flush">
//         <li class="list-group-item">
//           <strong>Name:</strong> {responseData.userData.name}
//         </li>
//         <li class="list-group-item">
//           <strong>Phone:</strong> {responseData.userData.phone}
//         </li>
//         <li class="list-group-item">
//           <strong>Age:</strong> {responseData.userData.age}
//         </li>
//         <li class="list-group-item">
//           <strong>City:</strong> {responseData.userData.city}
//         </li>
//         <li class="list-group-item">
//           <strong>Gender:</strong> {responseData.userData.gender}
//         </li>
//         <li class="list-group-item">
//           <strong>Address:</strong> {responseData.userData.address}
//         </li>
//       </ul>
//     </div>
//   </div>
// </div>


//     </div> : null }
    
//      </div>

//     </>

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

