import { useState } from 'react'
import "../styles/PersonalinfoInput.css"
import { useDispatch } from 'react-redux';
import { experienceActionCreator } from '../redux-toolkit-store/actionCreator/CounterActionCreator';
import { toast } from 'react-toastify';

const ExperienceInput = () => {

    const dispatch = useDispatch()

    const [formData, setFromData] = useState({ jobTitle: "", companyName: "", stDate: '', enDate: "" })



    function handleSave(e) {
        e.preventDefault()
        for (let key in formData) {
            if (formData[key] === "") {
                toast.warn(`Please Enter "${key}"`, {}); return
            }
        }
        dispatch(experienceActionCreator(formData))
    }

    return (
        <form className='PersonalinfoInput'>


            <label htmlFor="role">Job Title:</label>
            <input type="text" placeholder='Enter Job Title' onChange={(e) => setFromData({ ...formData, jobTitle: e.target.value })} />


            <label htmlFor="companyName">Company Name:</label>
            <input type="text" placeholder='Enter Company Name' onChange={(e) => setFromData({ ...formData, companyName: e.target.value })} />


            <label htmlFor="sdate">start date:</label>
            <input type="date" onChange={(e) => setFromData({ ...formData, stDate: e.target.value })} />


            <label htmlFor="edate">end Date:</label>
            <input type="date" onChange={(e) => setFromData({ ...formData, enDate: e.target.value })} />


            <button onClick={(e) => handleSave(e)}>Save</button>
        </form>
    )
}

export default ExperienceInput