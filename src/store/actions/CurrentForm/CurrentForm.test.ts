import {
  setConditions,
  setGeneralInformation,
  setMedicalQuestions,
} from "./index";
import Condition from "models/Condition.interface";
import {
  SET_CONDITIONS,
  SET_GENERAL_INFORMATION,
  SET_MEDICAL_QUESTIONS,
} from "../actionTypes";
import MedicalQuestion from "models/MedicalQuestion.interface";
import GeneralInformation from "models/GeneralInformation.interface";

describe("(Actions) Current Form", () => {
  it("setConditions action", () => {
    const expectedConditions = [
      {
        type: "cardiovascular",
        condition: "High blood pressure",
      },
      {
        type: "cardiovascular",
        condition: "Cardiac Arrest",
      },
      {
        type: "cardiovascular",
        condition: "Arrhythmia",
      },
      {
        type: "cardiovascular",
        condition: "Coronary heart disease",
      },
    ];
    const action = setConditions(
      (expectedConditions as unknown) as Condition[]
    );
    expect(action).toEqual({
      type: SET_CONDITIONS,
      payload: expectedConditions,
    });
  });

  it("setMedicalQuestions action", () => {
    const expectedQuestions = [
      {
        question: "Do you smoke any tobacco products?",
        followUp: "How much and how often?",
        answer: false,
        comment: "",
      },
      {
        question: "Do you drink alcohol?",
        followUp: "How much and how often?",
        answer: true,
        comment: "",
      },
    ];
    const action = setMedicalQuestions(
      (expectedQuestions as unknown) as MedicalQuestion[]
    );
    expect(action).toEqual({
      type: SET_MEDICAL_QUESTIONS,
      payload: expectedQuestions,
    });
  });

  it("setGeneralInformation action", () => {
    const expectedInfo = {
      firstName: "name",
      lastName: "last",
      gender: "gender",
      dateOfBirth: "date",
      email: "email",
      phoneNumber: "phone",
      streetAddress: "street",
      city: "city",
      state: "state",
      zipCode: "zip",
      maritalStatus: "marital",
    };
    const action = setGeneralInformation(
      (expectedInfo as unknown) as GeneralInformation
    );
    expect(action).toEqual({
      type: SET_GENERAL_INFORMATION,
      payload: expectedInfo,
    });
  });
});
