import "./index.css"

import "./components/styles/style.scss"

import { Part1 } from "./components/Component1.jsx"

import Part2 from "./components/Component2.jsx"

import { Part3 } from "./components/Component3.jsx"

import Part4 from "./components/Component4.jsx"

import { Part5 } from "./components/Component5.jsx"



const App = () => {

let data = "some data"
  function add(n1, n2) {
    return n1 + n2
  }
//   add(10, 20)

let newStyle = {
    color:"red",
    backgroundColor:"black"
}

   return (
    <>
    {/* inline css */}
    <h1 style={{ color:"skyblue", backgroundColor:"black"}}>This code is written from app.jsx</h1>
    <h1 style={newStyle}> Adding some value {100+900}</h1>
    <h1> {data} </h1>
    <h2>{add(10, 20)}</h2>
    <Part1/>
    <Part2/>
    <Part3/>
    <Part4/>
    <Part5/>

    {/* props  */}
     <Part1 name="Santosh dharmik" age="22" city="Nagpur" phone="9356192274"/>

     <Part1 name="ritesh itankar" age="22" city="Nagpur" phone="546415313153"/>

     <h1 style={newStyle}>Hello ! im santosh dharmik </h1>

    </>
    )
}

export default App