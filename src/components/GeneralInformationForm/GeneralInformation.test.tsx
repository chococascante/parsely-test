import React from "react";
import { mount } from "enzyme";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import State from "models/State.interface";
import { Provider } from "react-redux";
import GeneralInformation from "./GeneralInformationForm";
import { Select, TextField } from "@material-ui/core";
import { SET_GENERAL_INFORMATION } from "store/actions/actionTypes";

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
        <GeneralInformation />
      </Provider>
    );

    const inputs = wrapper.find(TextField);
    expect(inputs.length).toBe(10);
    const select = wrapper.find(Select);
    expect(select.exists()).toBe(true);
  });

  it("handles blur event to backup information on reducer", () => {
    const store = mockStore(initialState);
    const wrapper = mount(
      <Provider store={store}>
        <GeneralInformation />
      </Provider>
    );

    const sampleInput = wrapper.find(TextField).get(0);
    const onBlur = sampleInput.props["onBlur"];
    onBlur();
    expect(store.getActions()).toContainEqual({
      type: SET_GENERAL_INFORMATION,
      payload: initialState.currentForm.generalInformation,
    });
  });
});
