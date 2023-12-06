import { useState } from 'react'
import "../styles/header.css"
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { toast } from 'react-toastify';

const Header = () => {
    const [loading, setLoading] = useState(false);

    function downLoadPdf() {
        const ResumeCompEl = document.querySelector(".ResumeComp")
        // console.log(ResumeCompEl)
        setLoading(true);
        html2canvas(ResumeCompEl).then((canvas) => {
            const imgData = canvas.toDataURL("img/png")
            const doc = new jsPDF('p', 'mm', 'a4');
            const componentWidth = doc.internal.pageSize.getWidth()
            const componentHeight = doc.internal.pageSize.getHeight()
            doc.addImage(imgData, "PNG", 0, 0, componentWidth, componentHeight);
            setLoading(false);
            doc.save('resume.pdf');
        }).catch((err) => {
            console.log(err);
            setLoading(false);

            toast.error("Something went wrong in Downloading!");
        })

    }
    return (
        <div className='header'>
            <h3>Agency</h3>
            <button disabled={loading} onClick={downLoadPdf}> {loading ? "Downloading..." : "Download"}</button>
        </div>
    )
}

export default Header