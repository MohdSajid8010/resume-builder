import { education, experience, personalInfo, professionalSummary, skill } from "../actions/acionType"

export const personalInfoActionCreator = (payload) => {
    return { type: personalInfo, payload: payload }
}
export const professionalSummaryActionCreator = (payload) => {
    return { type: professionalSummary, payload: payload }
}

export const experienceActionCreator = (payload) => {
    return { type: experience, payload: payload }
}
export const educationActionCreator = (payload) => {
    return { type: education, payload: payload }
}
export const skillActionCreator = (payload) => {
    return { type: skill, payload: payload }
}
