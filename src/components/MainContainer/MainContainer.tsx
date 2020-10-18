import MultiStepForm from 'components/MultiStepForm';
import React from 'react'
import useStyles from './MainContainer.styles';

const MainContainer = () => {
  const classes = useStyles();
  return (
    <main className={classes.container}>
      <MultiStepForm />
    </main>
  )
}

export default MainContainer
