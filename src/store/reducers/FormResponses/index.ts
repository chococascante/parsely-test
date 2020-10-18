import Action from "models/Action.interface";
import { SET_FORM_RESPONSES } from "store/actions/actionTypes";

const initialState = {
  savedResponses: [],
};

export default (state = initialState, { type, payload }: Action) => {
  switch (type) {
    case SET_FORM_RESPONSES:
      return { ...state, ...payload };

    default:
      return state;
  }
};
