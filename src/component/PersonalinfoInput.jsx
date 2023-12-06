import { useRef, useState } from 'react'
import "../styles/PersonalinfoInput.css"
import { useDispatch } from 'react-redux';
import { personalInfoActionCreator } from '../redux-toolkit-store/actionCreator/CounterActionCreator';
import { toast } from 'react-toastify';

const PersonalinfoInput = () => {

    const dispatch = useDispatch()

    const [formData, setFromData] = useState({
        imgSrc: "https://img.freepik.com/premium-vector/user-customer-avatar-vector-illustration_276184-160.jpg?size=626&ext=jpg",
        name: "", jobTitle: "", email: '', mobiliNo: "", address: ""
    })
    console.log(formData)

    const select_imageRef = useRef(null)

    function showImage(src) {
        var fr = new FileReader();

        fr.onload = function () {
            setFromData({ ...formData, imgSrc: fr.result })
        }
        fr.readAsDataURL(src.files[0]);

    }

    function putImage() {
        var src = select_imageRef.current;//source element input type=file
        showImage(src);
    }

    function handleSave(e) {
        e.preventDefault()
        for (let key in formData) {
            if (formData[key] === "") {
                toast.warn(`Please Enter "${key}"`, {}); return
            }
        }
        console.log(formData)
        dispatch(personalInfoActionCreator(formData))
    }

    return (
        <form className='PersonalinfoInput'>
            <div>Upload your photo</div>
            {/* <input type="image" src="https://img.freepik.com/premium-vector/user-customer-avatar-vector-illustration_276184-160.jpg?size=626&ext=jpg" alt="Submit" width="48" height="48"></input> */}
            {/* <input type="file" accept="image/*" onChange={(e) => {
                console.log(e.target.value)
            }} /> */}
            <img id="target" src={formData.imgSrc} accept="image/*" />

            <label htmlFor="select_image" className='fileLabel'>
                <input type="file" id="select_image" ref={select_imageRef} name="image" onChange={putImage} />
                Browes Photo
            </label>

            <label htmlFor="name">Name:</label>
            <input type="text" placeholder='Enter Name' onChange={(e) => setFromData({ ...formData, name: e.target.value })} />


            <label htmlFor="Job-titlr">Job Title:</label>
            <input type="text" placeholder='Enter Job Title' onChange={(e) => setFromData({ ...formData, jobTitle: e.target.value })} />


            <label htmlFor="email">Email address:</label>
            <input type="email" placeholder='Enter email' onChange={(e) => setFromData({ ...formData, email: e.target.value })} />


            <label htmlFor="mobileno">mobile Number:</label>
            <input type="tel" placeholder='Enter Mobile no' onChange={(e) => setFromData({ ...formData, mobiliNo: e.target.value })} />


            <label htmlFor="mobileno">Address:</label>
            <textarea rows="4" cols="50" placeholder='123 main street' onChange={(e) => setFromData({ ...formData, address: e.target.value })} />
            <button onClick={(e) => handleSave(e)}>Save</button>
        </form>
    )
}

export default PersonalinfoInput