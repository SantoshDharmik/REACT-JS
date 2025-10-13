// import React,{useState} from 'react'

// import "./styles/style.scss"


// const AddLanguage = () => {

//     let [title, setTitle] = useState("")
//     let [scope, setScope] = useState("")
//     let [difficulties, setDifficulties] = useState("")
//     let [duration, setDuration] = useState("")
    

//     const handleTitleChange = (event) => {
//         let value = event.target.value
//         setTitle(() =>  {
//              return value 

//         })
       
//     }

//     const handleScopeChange = (event) => {
//         let value = event.target.value
//         setScope(() =>  {
//              return value.split(",")

//         })
       
//     }

//     const handleDurationChange = (event) => {
//         let value = event.target.value
//         setDuration(() =>  {
//              return value 

//         })
       
//     }

//     const handleDifficultiesChange = (event) => {
//         let value = event.target.value
//         setDifficulties(() =>  {
//              return value 

//         })
       
//     }


//     const handleSubmit = (event) => {
//         event.preventDefault()
//         console.log('title : ', title)
//         console.log('scope : ', scope)
//         console.log('duration : ', duration)
//         console.log('difficulties : ', difficulties)

//         console.log({title, scope, difficulties, duration})
//     }



//     return (
        
//         <div class="d-flex bg-secondary flex-column gap-2 m-5">
//             <h1 class="text-center"> Add Language !</h1>
//             <form class="d-flex flex-column gap-1 m-5"onSubmit={handleSubmit}>
        

//                <input class=" form-control form-check" onChange={handleTitleChange} type="text" placeholder='title' value={title} />

//                <input class="form-control form-check" onChange={handleScopeChange} type="text" placeholder='scope' value={scope} />

//                <input class="form-control form-check" onChange={handleDurationChange} type="text" placeholder='duration' value={duration} />

                

//                 <input class="form-control form-check" onChange={handleDifficultiesChange} type="text" placeholder='difficulties' value={difficulties} />

//                 <button type="submit" class="btn btn-dark">Add Languages !</button>

//             </form>

//         </div>
        
//     )
// }

// export {AddLanguage}



// // mujhe ek form banakar do jisme kuch aisa structure follow kiya jayega  div
