import Action from "models/Action.interface";
import { SET_ACTIVE_STEP } from "../actionTypes";

export const setActiveStep = (payload: number): Action => ({
  type: SET_ACTIVE_STEP,
  payload,
});
