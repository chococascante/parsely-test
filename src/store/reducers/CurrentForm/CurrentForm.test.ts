import currentFormReducer from ".";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import {
  setConditions,
  setGeneralInformation,
  setMedicalQuestions,
} from "store/actions/CurrentForm";
import Condition from "models/Condition.interface";
import { SET_CONDITIONS } from "store/actions/actionTypes";
import CurrentFormState from "models/CurrentFormState.interface";

import medicalQuestions from "mocks/medicalQuestions.json";
const defaultQuestions = medicalQuestions.map(
  (question) => ({ ...question, answer: false, comment: "" } as MedicalQuestion)
);

const defaultExpectedState: CurrentFormState = {
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
  conditions: [],
  medicalQuestions: defaultQuestions,
  agreeToTerms: false,
};

const mockStore = configureMockStore([thunk]);

describe("(Reducer) CurrentForm", () => {
  it("should return initial state", () => {
    const result = currentFormReducer();
    expect(result).toEqual(defaultExpectedState);
  });

  it("should handle setGeneralInfo", () => {
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
    const result = currentFormReducer(
      defaultExpectedState,
      setGeneralInformation(expectedInfo)
    );
    expect(result).toEqual({
      ...defaultExpectedState,
      generalInformation: { ...expectedInfo },
    });
  });

  it("should handle setConditions", () => {
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
    const result = currentFormReducer(
      defaultExpectedState,
      setConditions(expectedConditions)
    );
    expect(result).toEqual({
      ...defaultExpectedState,
      conditions: [...expectedConditions],
    });
  });

  it("should handle setMedicalQuestions", () => {
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
    const result = currentFormReducer(
      defaultExpectedState,
      setMedicalQuestions(expectedQuestions)
    );
    expect(result).toEqual({
      ...defaultExpectedState,
      medicalQuestions: [...expectedQuestions],
    });
  });
});
