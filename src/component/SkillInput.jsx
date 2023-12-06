import { useState } from 'react'
import "../styles/PersonalinfoInput.css"
import { useDispatch } from 'react-redux';
import { skillActionCreator } from '../redux-toolkit-store/actionCreator/CounterActionCreator';
import { toast } from 'react-toastify';

const SkillInput = () => {

    const dispatch = useDispatch()

    const [skills, setSkill] = useState([])
    const [newSkll, setNewSkill] = useState("")


    function addskill(e) {
        e.preventDefault()
        if (!newSkll) {
            toast.warn("Enter Skill", {}); return
        }
        if (skills.includes(newSkll)) {
            toast.warn(`"${newSkll}" is Already Includes in Your Skill!`, {})
        } else {
            console.log(skills, newSkll, [...skills, newSkll])
            setSkill([...skills, newSkll])
            setNewSkill("")
        }
    }
    function handleDeleteSkill(val) {
        let i = skills.indexOf(val)
        skills.splice(i, 1)
        setSkill([...skills])
    }

    function handleSave(e) {
        e.preventDefault()
        if (skills.length === 0) {
            toast.warn("Please enter Skill!", {}); return
        }
        dispatch(skillActionCreator(skills))
    }

    return (
        <form className='PersonalinfoInput'>


            <label htmlFor="Skill">Enter Skills:</label>
            <input type="text" value={newSkll} placeholder='Enter Your Skill'
                onKeyPress={(e) => { if (e.key === "Enter") { addskill(e) } }}
                onChange={(e) => setNewSkill(e.target.value)} />

            <div className='skillCont'>
                {
                    skills.map((val) => (
                        <button key={val} onClick={() => handleDeleteSkill(val)} aria-label='delete'>{val}
                            <span onClick={() => handleDeleteSkill(val)}>X</span></button>
                    ))
                }
            </div>
            <button onClick={(e) => handleSave(e)}>Save</button>
        </form>
    )
}

export default SkillInput