import React from "react";
import { mount } from "enzyme";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import State from "models/State.interface";
import { Provider } from "react-redux";
import ConditionsForm from "./ConditionsForm";
import { ListItem, ListItemText } from "@material-ui/core";

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
        <ConditionsForm />
      </Provider>
    );
  });

  it("renders condition list correctly", () => {
    const expectedConditions = [
      {
        type: "cardiovascular",
        condition: "High blood pressure",
      },
      {
        type: "cardiovascular",
        condition: "Cardiac Arrest",
      },
    ];

    const state = {
      ...initialState,
      currentForm: {
        conditions: expectedConditions,
      },
    };

    const store = mockStore(state);
    const wrapper = mount(
      <Provider store={store}>
        <ConditionsForm />
      </Provider>
    );

    const listItems = wrapper.find(ListItem);
    expect(listItems.length).toBe(expectedConditions.length);
  });
});
