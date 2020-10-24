import React from "react";
import { mount } from "enzyme";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import State from "models/State.interface";
import { Provider } from "react-redux";
import MainContainer from "./MainContainer";

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
        <MainContainer />
      </Provider>
    );
  });
});
