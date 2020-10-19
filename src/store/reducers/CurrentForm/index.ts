import Action from "models/Action.interface";
import Condition from "models/Condition.interface";
import CurrentFormState from "models/CurrentFormState.interface";
import GeneralInformation from "models/GeneralInformation.interface";
import MedicalQuestion from "models/MedicalQuestion.interface";
import {
  SET_CONDITIONS,
  SET_GENERAL_INFORMATION,
  SET_MEDICAL_QUESTIONS,
  SET_AGREE_TO_TERMS,
  SET_IS_CURRENT_STEP_VALID,
} from "store/actions/actionTypes";

import medicalQuestions from "mocks/medicalQuestions.json";
const defaultQuestions = medicalQuestions.map(
  (question) => ({ ...question, answer: false, comment: "" } as MedicalQuestion)
);

const initialState: CurrentFormState = {
  generalInformation: {
    firstName: "",
    lastName: "",
    gender: "",
    dateOfBirth: "",
    email: "",
    phoneNumber: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    maritalStatus: "",
  },
  isCurrentFormValid: false,
  conditions: [],
  medicalQuestions: defaultQuestions,
  agreeToTerms: false,
};

export default (
  state = initialState,
  { type, payload }: Action = { type: "" }
): CurrentFormState => {
  switch (type) {
    case SET_GENERAL_INFORMATION:
      return { ...state, generalInformation: payload as GeneralInformation };

    case SET_CONDITIONS:
      return { ...state, conditions: payload as Condition[] };

    case SET_MEDICAL_QUESTIONS:
      return {
        ...state,
        medicalQuestions: payload as MedicalQuestion[],
      };
    case SET_AGREE_TO_TERMS:
      return {
        ...state,
        agreeToTerms: payload as boolean,
      };

    case SET_IS_CURRENT_STEP_VALID:
      return {
        ...state,
        isCurrentFormValid: payload as boolean,
      };
    default:
      return state;
  }
};
