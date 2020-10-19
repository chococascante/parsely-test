import React from "react";
import { mount } from "enzyme";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import State from "models/State.interface";
import { Provider } from "react-redux";
import MultiStepForm from "./MultiStepForm";

import ButtonsContainer from "components/ButtonsContainer";
import ConditionsForm from "components/ConditionsForm";
import MedicalQuestionsForm from "components/MedicalQuestionsForm";
import Summary from "components/Summary";
import Terms from "components/Terms";
import { Step } from "@material-ui/core";
import GeneralInformationForm from "components/GeneralInformationForm";

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
        <MultiStepForm />
      </Provider>
    );

    const steps = wrapper.find(Step);
    expect(steps.length).toBe(5);
    const buttons = wrapper.find(ButtonsContainer);
    expect(buttons.exists()).toBe(true);
  });

  it("renders General Information correctly", () => {
    const store = mockStore({
      ...initialState,
      multiStep: {
        activeStep: 0,
      },
    });

    const wrapper = mount(
      <Provider store={store}>
        <MultiStepForm />
      </Provider>
    );

    const generalInfo = wrapper.find(GeneralInformationForm);
    expect(generalInfo.exists()).toBe(true);
  });

  it("renders Conditions correctly", () => {
    const store = mockStore({
      ...initialState,
      multiStep: {
        activeStep: 1,
      },
    });

    const wrapper = mount(
      <Provider store={store}>
        <MultiStepForm />
      </Provider>
    );

    const generalInfo = wrapper.find(ConditionsForm);
    expect(generalInfo.exists()).toBe(true);
  });

  it("renders Medical Questions correctly", () => {
    const store = mockStore({
      ...initialState,
      multiStep: {
        activeStep: 2,
      },
    });

    const wrapper = mount(
      <Provider store={store}>
        <MultiStepForm />
      </Provider>
    );

    const generalInfo = wrapper.find(MedicalQuestionsForm);
    expect(generalInfo.exists()).toBe(true);
  });

  it("renders Summary correctly", () => {
    const store = mockStore({
      ...initialState,
      multiStep: {
        activeStep: 3,
      },
    });

    const wrapper = mount(
      <Provider store={store}>
        <MultiStepForm />
      </Provider>
    );

    const generalInfo = wrapper.find(Summary);
    expect(generalInfo.exists()).toBe(true);
  });

  it("renders Confirmation & Terms correctly", () => {
    const store = mockStore({
      ...initialState,
      multiStep: {
        activeStep: 4,
      },
    });

    const wrapper = mount(
      <Provider store={store}>
        <MultiStepForm />
      </Provider>
    );

    const generalInfo = wrapper.find(Terms);
    expect(generalInfo.exists()).toBe(true);
  });
});
