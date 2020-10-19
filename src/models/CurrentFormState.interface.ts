import Condition from "./Condition.interface";
import GeneralInformation from "./GeneralInformation.interface";
import MedicalQuestion from "./MedicalQuestion.interface";

export default interface CurrentFormState {
  generalInformation: GeneralInformation;
  conditions: Condition[];
  medicalQuestions: MedicalQuestion[];
  agreeToTerms: boolean;
  isCurrentFormValid: boolean;
}
