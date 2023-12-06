import { useState } from 'react'
import "../styles/PersonalinfoInput.css"
import { useDispatch } from 'react-redux';
import { professionalSummaryActionCreator } from '../redux-toolkit-store/actionCreator/CounterActionCreator';
import { toast } from 'react-toastify';

const ProfessionalSummInput = () => {

    const dispatch = useDispatch()

    const [formData, setFromData] = useState({ profSumm: "" })



    function handleSave(e) {
        e.preventDefault()
        if (formData["profSumm"] === "") {
            toast.warn(`Please Enter "Professional Summary!"`, {}); return
        }
        dispatch(professionalSummaryActionCreator(formData))
    }

    return (
        <form className='PersonalinfoInput'>


            <label htmlFor="professionlsumm">Enter Professional Summary:</label>
            <textarea rows="4" cols="50" placeholder='i am a Frontend devloper.' onChange={(e) => setFromData({ ...formData, profSumm: e.target.value })} />
            <button onClick={(e) => handleSave(e)}>Save</button>
        </form>
    )
}

export default ProfessionalSummInput