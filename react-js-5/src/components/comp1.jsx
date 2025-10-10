import react from "react"
import {useState} from "react"

const Comp1 = () => {
    let [numbers,setNumbers ]= useState(["santodh",'ritesh',"harsh",'anuragh','adity'])
    
    return (
        <>
      
        {
            numbers.map((setNum, index) =>{
                return( 
                    <h1>{setNum}</h1>
                    )
            })
        }
          </>
          )
}

export {Comp1}