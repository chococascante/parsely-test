import React from "react";
import { mount } from "enzyme";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import State from "models/State.interface";
import { Provider } from "react-redux";
import ButtonsContainer from "./ButtonsContainer";
import { setActiveStep } from "store/actions/MultiStep";
import { SET_ACTIVE_STEP } from "store/actions/actionTypes";

jest.mock("store/actions/MultiStep", () => ({
  setActiveStep: jest.fn(),
}));

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
    conditions: [],
    medicalQuestions: [],
  },
};

describe("(Component) MultiStepForm", () => {
  it("renders correctly", () => {
    const store = mockStore(initialState);
    const wrapper = mount(
      <Provider store={store}>
        <ButtonsContainer />
      </Provider>
    );

    const buttons = wrapper.find(ButtonsContainer);
    expect(buttons.exists()).toBe(true);
  });
});
