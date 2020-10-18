import FormResponse from "models/FormResponse.interface";
import { SET_FORM_RESPONSES } from "../actionTypes";

export const setFormResponses = (payload: FormResponse[]) => ({
  type: SET_FORM_RESPONSES,
  payload
})