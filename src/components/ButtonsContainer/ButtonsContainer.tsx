import { Button } from "@material-ui/core";
import State from "models/State.interface";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActiveStep } from "store/actions/MultiStep";
import useStyles from "./ButtonsContainer.styles";

const ButtonsContainer = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const activeStep = useSelector((state: State) => state.multiStep.activeStep);
  const currentForm = useSelector((state: State) => state.currentForm);
  const agree = useSelector((state: State) => state.currentForm.agreeToTerms);
  const isCurrentFormValid = useSelector(
    (state: State) => state.currentForm.isCurrentFormValid
  );

  const isLastStep = activeStep === 4;

  const handleNextButtonClick = () => {
    if (!isLastStep) {
      dispatch(setActiveStep(activeStep + 1));
    } else {
      if (agree) console.log(currentForm);
    }
  };

  const handleBackButtonClick = () => {
    dispatch(setActiveStep(activeStep - 1));
  };

  return (
    <div className={classes.container}>
      <Button
        id="back-button"
        onClick={handleBackButtonClick}
        variant="contained"
        disabled={activeStep === 0 ? true : false}
      >
        Back
      </Button>
      <Button
        disabled={isLastStep ? !agree : !isCurrentFormValid}
        id="next-button"
        onClick={handleNextButtonClick}
        variant="contained"
        color="primary"
      >
        {isLastStep ? "Finish" : "Next"}
      </Button>
    </div>
  );
};

export default ButtonsContainer;
