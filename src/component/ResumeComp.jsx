import "../styles/ResumeComp.css"
import dribbleicon from "../assets/dribble.svg"
import linkedIcon from "../assets/linkedin.svg"
import instagramIcon from "../assets/instagram.svg"

import { useSelector } from 'react-redux'

const ResumeComp = () => {
  const personalInfo = useSelector((state) => state.resumeData.personalInfo)
  const professionalSummary = useSelector((state) => state.resumeData.professionalSummary)
  const experience = useSelector((state) => state.resumeData.experience)
  const education = useSelector((state) => state.resumeData.education)
  const skills = useSelector((state) => state.resumeData.skills)


  return (
    <div className='ResumeComp'>

      <div className='upperStrip'>
        <div>
          <div><img src={dribbleicon} alt="" /></div>
          <div>dribble.com</div>
        </div>
        <div>
          <div><img src={instagramIcon} alt="" /></div>
          <div>instagram.com</div>
        </div>
        <div>
          <div><img src={linkedIcon} alt="" /></div>
          <div>linkedIn.com</div>

        </div>
      </div>
      <div className="inner">

        <div className='emailInfoStrip'>
          <div>
            <div className='greyColor'>Email:</div>
            <div>{personalInfo?.email ?? "example@gmail.com"}</div>
          </div>

          <div>
            <div className='greyColor'>Phone</div>
            <div>{personalInfo?.mobiliNo ?? "9100011000"}</div>
          </div>

          <div>
            <div className='greyColor'>Address</div>
            <div>{personalInfo?.address
              ?? "123 main street, united state"}</div>
          </div>
        </div>

        <div className='image-and-name'>
          <img src={personalInfo?.imgSrc ?? "https://img.freepik.com/premium-vector/user-customer-avatar-vector-illustration_276184-160.jpg?size=626&ext=jpg"} />
          {/* <input type="image" src={personalInfo?.imgSrc ?? "https://img.freepik.com/premium-vector/user-customer-avatar-vector-illustration_276184-160.jpg?size=626&ext=jpg"} alt="Submit" width="48" height="48"></input> */}

          <h2 >{personalInfo?.name ?? "Christiana Sebastian"}</h2>
          <div className='greyColor'>{personalInfo?.jobTitle ?? "UI/UX Designer"}</div>
          <div>{professionalSummary?.profSumm ?? "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor deleniti soluta repellendus adin natus.Asperiores sint necessitatibus quod, in officia illo modi, magnam amet, dolorem perfere"}
          </div>
        </div>

        <div className='experience'>
          <h3>Experience</h3>
          <div className='oneExperience'>
            <div>
              <div>{experience?.jobTitle ?? "UI/UX Designer"}</div>
              <div className='greyColor'>{experience?.companyName ?? "ABC company.inc"}</div>
            </div>
            <div className='duration'>{experience?.stDate.slice(0, 7) ?? "jan 2023"} to {experience?.enDate.slice(0, 7) ?? "present"}</div>
          </div>
        </div>

        <div className='eduction'>
          <h3>Education</h3>
          <div className='oneEducation'>
            <div >
              <div>{education?.course ?? "B Tech Mechanical Engg"}</div>
              <div className='greyColor'>{education?.college ?? "AKTU Luckhnow"}</div>
            </div>
            <div className='duration'>{education?.stDate.slice(0, 7) ?? "jul 2019"} to {education?.enDate.slice(0, 7) ?? "jul 2022"}</div>
          </div>
        </div>


        <div className='skillsCont'>
          <h3>Skills</h3>
          <div className='skills'>
            {
              skills.map((val) => (
                <div key={val} className='oneskill'>{val}</div>

              ))
            }
            {
              skills.length === 0 && ["Figma", "Adobe XD", "Sketch", "Adobe PhotoShop"].map((val) => (
                <div key={val} className='oneskill'>{val}</div>

              ))
            }

          </div>
        </div>

      </div>

    </div>
  )
}

export default ResumeComp