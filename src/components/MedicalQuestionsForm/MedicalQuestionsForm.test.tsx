import React from "react";
import { mount } from "enzyme";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import State from "models/State.interface";
import { Provider } from "react-redux";
import MedicalQuestionsForm from "./MedicalQuestionsForm";
import { TextField } from "@material-ui/core";

const mockStore = configureMockStore([thunk]);
const initialState: State = {
  multiStep: {
    activeStep: 0,
  },
  currentForm: {
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
    agreeToTerms: false,
    conditions: [],
    medicalQuestions: [],
  },
};

describe("(Component) MultiStepForm", () => {
  it("renders correctly", () => {
    const store = mockStore(initialState);
    const wrapper = mount(
      <Provider store={store}>
        <MedicalQuestionsForm />
      </Provider>
    );
  });

  it("it should render without textfields by default", () => {
    const store = mockStore(initialState);
    const wrapper = mount(
      <Provider store={store}>
        <MedicalQuestionsForm />
      </Provider>
    );

    const textFields = wrapper.find(TextField);
    expect(textFields.length).toBe(0);
  });

  it("it should render textfields for the questions marked as yes", () => {
    const questionsMock = [
      {
        question: "Do you smoke any tobacco products?",
        followUp: "How much and how often?",
      },
      {
        question: "Do you drink alcohol?",
        followUp: "How much and how often?",
      },
      {
        question: "Have you regularly used illicit drugs?",
        followUp: "How much and how often?",
      },
      {
        question: "Current medications",
        followUp:
          "Please list any medications you are currently taking including non-prescription medications, vitamins and supplements.",
      },
      {
        question: "Medication allergies or reactions",
        followUp: "Please list any medication allergies or reactions",
      },
      {
        question:
          "List any surgeries or hospital stays you have had and their approximate date / year",
        followUp: "Type of surgery or reason for hospitalization",
      },
    ];

    const state = {
      ...initialState,
      currentForm: {
        ...initialState.currentForm,
        medicalQuestions: questionsMock,
      },
    };

    const store = mockStore(initialState);
    const wrapper = mount(
      <Provider store={store}>
        <MedicalQuestionsForm />
      </Provider>
    );

    expect((store.getState() as State).currentForm.medicalQuestions).toEqual(
      questionsMock
    );
  });
});
