import Action from "models/Action.interface";
import Condition from "models/Condition.interface";
import GeneralInformation from "models/GeneralInformation.interface";
import {
  SET_AGREE_TO_TERMS,
  SET_CONDITIONS,
  SET_GENERAL_INFORMATION,
  SET_MEDICAL_QUESTIONS,
} from "../actionTypes";

import axios from "axios";
import MedicalQuestion from "models/MedicalQuestion.interface";

const ZIP_CODE_API_KEY =
  "Z3PG1GvLAsjZQHJ2BNtCbmESMCogxdbPXSrgwSnO4tWooxfKw9GGL2ZnIxa3s8gv";

export const setGeneralInformation = (payload: GeneralInformation): Action => ({
  type: SET_GENERAL_INFORMATION,
  payload,
});

export const setConditions = (payload: Condition[]): Action => ({
  type: SET_CONDITIONS,
  payload,
});

export const setMedicalQuestions = (payload: MedicalQuestion[]): Action => ({
  type: SET_MEDICAL_QUESTIONS,
  payload,
});

export const setAgreeToTerms = (payload: boolean): Action => ({
  type: SET_AGREE_TO_TERMS,
  payload,
});
