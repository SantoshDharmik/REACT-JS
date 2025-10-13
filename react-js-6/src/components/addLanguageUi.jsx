import React, {useState} from "react"

import "./styles/style.scss"

const AddLanguageUi = (props) => {

    let [formData,setFormData]=useState({
        title:"", scope: [], difficulties: "", duration: ""})

        const handleChange = (event) => {
            let {name,value} = event.target

            if (name == "scope") {
                value = value.split(",")
                value = value.map((item) => {return item.trim()})
            }
            setFormData((prev) => {
                return {...prev, [name]:value}
            })           
        }

        const handleSubmit = (event) => {
            event.preventDefault()
            console.log(formData)
            props.dataSetLanguagesHandler((prev) =>{
                // return [...prev, formData] Adding in the last of dataset
                return [formData, ...prev] //adding the dataset in the start
            })            
        }
    return (
        <>
        <div className="add-language-form d-flex bg-secondary flex-column gap-2 m-5">
            <h1 className="text-center fs-1 fw-bold">Add Languages !</h1>

            <form onSubmit={handleSubmit} className="d-flex flex-column gap-2 ipnput-form m-3 p-2" value={formData.title}>

                <input onChange={handleChange} className="form-control form-check" type="text" name='title' value={formData.title} placeholder="title"/>
                <input onChange={handleChange} className="form-control form-check" type="text" name='scope' value={formData.scope} placeholder="Scope"/>
                <input onChange={handleChange} className="form-control form-check" type="text" name='duration' value={formData.duration} placeholder="duration"/>
                <input onChange={handleChange} className="form-control form-check" type="text" name='difficulties' value={formData.difficulties} placeholder="difficulties"/>

                <button className="btn btn-dark">Add Language !</button>

            </form>
        </div>
        </>
    )
}

export default AddLanguageUi