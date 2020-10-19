import Condition from "./Condition.interface";
import GeneralInformation from "./GeneralInformation.interface";
import MedicalQuestion from "./MedicalQuestion.interface";

export default interface Action {
  type: string;
  payload?:
    | null
    | boolean
    | number
    | GeneralInformation
    | MedicalQuestion[]
    | Condition[];
}
