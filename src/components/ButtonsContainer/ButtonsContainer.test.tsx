import React from "react";
import { mount } from "enzyme";
import thunk from "redux-thunk";
import configureMockStore from "redux-mock-store";
import State from "models/State.interface";
import { Provider } from "react-redux";
import ButtonsContainer from "./ButtonsContainer";
import { SET_ACTIVE_STEP } from "store/actions/actionTypes";
import { Button } from "@material-ui/core";

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
    conditions: [],
    medicalQuestions: [],
    agreeToTerms: false,
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

    const buttons = wrapper.find(Button);
    expect(buttons.length).toBe(2);
    expect(buttons.get(1).props["disabled"]).toBe(true);
  });

  it("should disable back button on index 0", () => {
    const store = mockStore(initialState);
    const wrapper = mount(
      <Provider store={store}>
        <ButtonsContainer />
      </Provider>
    );

    const button = wrapper.find(Button).get(0);
    expect(button.props["disabled"]).toEqual(true);
  });

  it("should change next button label on last step", () => {
    const state = {
      ...initialState,
      multiStep: {
        activeStep: 4,
      },
    };
    const store = mockStore(state);
    const wrapper = mount(
      <Provider store={store}>
        <ButtonsContainer />
      </Provider>
    );

    const button = wrapper.find(Button).get(1);
    expect(button.props["children"]).toEqual("Finish");
  });

  it("calls back button function", () => {
    const state = {
      ...initialState,
      multiStep: {
        activeStep: 1,
      },
    };
    const store = mockStore(state);
    const wrapper = mount(
      <Provider store={store}>
        <ButtonsContainer />
      </Provider>
    );

    const button = wrapper.find(Button).get(0);
    button.props["onClick"]();

    expect(store.getActions()).toContainEqual({
      type: SET_ACTIVE_STEP,
      payload: 0,
    });
  });

  it("calls next button function", () => {
    const state = {
      ...initialState,
      multiStep: {
        activeStep: 1,
      },
    };
    const store = mockStore(state);
    const wrapper = mount(
      <Provider store={store}>
        <ButtonsContainer />
      </Provider>
    );

    const button = wrapper.find(Button).get(1);
    button.props["onClick"]();

    expect(store.getActions()).toContainEqual({
      type: SET_ACTIVE_STEP,
      payload: 2,
    });
  });

  it("calls next button function", () => {
    const state = {
      ...initialState,
      multiStep: {
        activeStep: 1,
      },
    };
    const store = mockStore(state);
    const wrapper = mount(
      <Provider store={store}>
        <ButtonsContainer />
      </Provider>
    );

    const button = wrapper.find(Button).get(1);
    button.props["onClick"]();

    expect(store.getActions()).toContainEqual({
      type: SET_ACTIVE_STEP,
      payload: 2,
    });
  });
});
