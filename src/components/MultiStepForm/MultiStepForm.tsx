import React, { useState } from 'react';
import useStyles from './MultiStepForm.styles';
import { Step, Stepper, StepLabel, Button, Typography, Paper } from '@material-ui/core'
import GeneralInformationForm from 'components/GeneralInformationForm';

const MultiStepForm = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);

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
      </Stepper>
      <GeneralInformationForm />
    </Paper>
  )
}

export default MultiStepForm
