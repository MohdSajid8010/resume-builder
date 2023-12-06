import { useState } from 'react'
import "../styles/PersonalinfoInput.css"
import { useDispatch } from 'react-redux';
import { educationActionCreator } from '../redux-toolkit-store/actionCreator/CounterActionCreator';
import { toast } from 'react-toastify';

const EducationInput = () => {

    const dispatch = useDispatch()

    const [formData, setFromData] = useState({ course: "", college: "", stDate: '', enDate: "" })



    function handleSave(e) {
        e.preventDefault()
        for (let key in formData) {
            if (formData[key] === "") {
                toast.warn(`Please Enter "${key}"`, {}); return
            }
        }
        dispatch(educationActionCreator(formData))
    }

    return (
        <form className='PersonalinfoInput'>


            <label htmlFor="course">Course Name:</label>
            <input type="text" id='course' placeholder='Enter Course' onChange={(e) => setFromData({ ...formData, course: e.target.value })} />


            <label htmlFor="collegename">College Name:</label>
            <input type="text" id='collegename' placeholder='Enter College Name' onChange={(e) => setFromData({ ...formData, college: e.target.value })} />


            <label htmlFor="sdate">Start Date:</label>
            <input type="date" id='sdate' onChange={(e) => setFromData({ ...formData, stDate: e.target.value })} />


            <label htmlFor="edate">End Date:</label>
            <input type="date" id='edate' onChange={(e) => setFromData({ ...formData, enDate: e.target.value })} />


            <button onClick={(e) => handleSave(e)}>Save</button>
        </form>
    )
}

export default EducationInput