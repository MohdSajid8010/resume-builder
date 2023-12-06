import { personalInfo, professionalSummary, skill, education, experience } from '../actions/acionType'

let initialState = {
    personalInfo: null, professionalSummary: null, skills: [],
    experience: null, education: null
};



export const ResmeReducers = (state = initialState, action) => {
    switch (action.type) {
        case personalInfo: return { ...state, personalInfo: action.payload };
        case professionalSummary: return { ...state, professionalSummary: action.payload };
        case experience: return { ...state, experience: action.payload };
        case education: return { ...state, education: action.payload };
        case skill: return { ...state, skills: action.payload };
        default: return state
    }
}
