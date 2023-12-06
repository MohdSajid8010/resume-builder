import { useState } from 'react'
import "../styles/main.css"
import { FaMinus, FaPlus } from "react-icons/fa6";
import UserInputcomponent from './UserInputcomponent';
import ResumeComp from './ResumeComp';

const leftb_content = ["Personal Information", 'Professional Summary', "Experience", "Education", "Skills"];

const Main = () => {
    const [activeTabIndex, setActiveTabIndex] = useState(null)
    return (
        <div className='main'>

            <div className='Leftbar'>
                {
                    leftb_content.map((contant, i) => (
                        <div className='leftBarTab' key={contant} onClick={() => setActiveTabIndex(activeTabIndex === i ? null : i)}>
                            <div>{contant}</div>
                            <div>
                                {activeTabIndex == i ? <FaMinus /> : <FaPlus />}
                            </div>
                        </div>
                    ))
                }
            </div>

            <div className='right'>
                <UserInputcomponent activeTabIndex={activeTabIndex} />
                <div className="resumeOuter">
                    <ResumeComp />
                </div>
            </div>
        </div>
    )
}

export default Main