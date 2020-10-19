import React from "react";
import useStyles from "./MultiStepForm.styles";
import { Step, Stepper, StepLabel, Paper } from "@material-ui/core";
import GeneralInformationForm from "components/GeneralInformationForm";
import State from "models/State.interface";
import { useSelector } from "react-redux";
import ButtonsContainer from "components/ButtonsContainer";
import ConditionsForm from "components/ConditionsForm";
import MedicalQuestionsForm from "components/MedicalQuestionsForm";
import Summary from "components/Summary";
import Terms from "components/Terms";

const MultiStepForm = () => {
  const classes = useStyles();
  const activeStep = useSelector((state: State) => state.multiStep.activeStep);

  const getCurrentStep = () => {
    switch (activeStep) {
      case 0:
        return <GeneralInformationForm />;

      case 1:
        return <ConditionsForm />;

      case 2:
        return <MedicalQuestionsForm />;

      case 3:
        return <Summary />;

      case 4:
        return <Terms />;

      default:
        return <GeneralInformationForm />;
    }
  };

  return (
    <Paper className={classes.container}>
      <Stepper activeStep={activeStep} alternativeLabel>
        <Step>
          <StepLabel>General Information</StepLabel>
        </Step>
        <Step>
          <StepLabel>Conditions</StepLabel>
        </Step>
        <Step>
          <StepLabel>Medical questions</StepLabel>
        </Step>
        <Step>
          <StepLabel>Summary</StepLabel>
        </Step>
        <Step>
          <StepLabel>Confirmation and Terms</StepLabel>
        </Step>
      </Stepper>
      {getCurrentStep()}

      <ButtonsContainer />
    </Paper>
  );
};

export default MultiStepForm;
