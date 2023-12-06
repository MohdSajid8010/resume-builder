import "../styles/userInputcomponent.css"
import PersonalinfoInput from './PersonalinfoInput'
import ProfessionalSummInput from './ProfessionalSummInput'
import SkillInput from './SkillInput'
import ExperienceInput from './ExperienceInput'
import EducationInput from './EducationInput'

// eslint-disable-next-line react/prop-types
const UserInputcomponent = ({ activeTabIndex }) => {


  return (
    // <div className='UserInputcomponent'>
    <>
      {activeTabIndex == 0 && <PersonalinfoInput />}
      {activeTabIndex == 1 && <ProfessionalSummInput />}
      {activeTabIndex == 2 && <ExperienceInput />}
      {activeTabIndex == 3 && <EducationInput />}
      {activeTabIndex == 4 && <SkillInput />}

      {/* </div> */}
    </>
  )
}

export default UserInputcomponent