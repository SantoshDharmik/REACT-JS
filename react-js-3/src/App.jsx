import react from "react"

import { FaHome } from "react-icons/fa"

import { HiArrowNarrowRight } from "react-icons/hi";

import { HiArrowNarrowLeft } from "react-icons/hi";

import Comp1 from "./Components/comp"

// bootstrap
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js"
const App = () => {
  return (
    <>
    <h1 className="bg-danger text-primary">Hey it's Sk dharmik</h1>

    <Comp1 name="santosh dharmik" />
   
  <HiArrowNarrowRight size={100}/>
     <FaHome className='text-dark' size={100}/>
  <HiArrowNarrowLeft size={100}/>

    </>
  )
}

export default App