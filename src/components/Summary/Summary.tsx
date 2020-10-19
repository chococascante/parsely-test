import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import State from "models/State.interface";
import React from "react";
import { useSelector } from "react-redux";
import useStyles from "./Summary.styles";

const Summary = () => {
  const generalInformation = useSelector(
    (state: State) => state.currentForm.generalInformation
  );
  const conditions = useSelector(
    (state: State) => state.currentForm.conditions
  );
  const medicalQuestions = useSelector(
    (state: State) => state.currentForm.medicalQuestions
  );

  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Accordion expanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          General Information
        </AccordionSummary>
        <AccordionDetails className={classes.flexColumn}>
          <Typography className={classes.entry}>
            <span className={classes.label}>First name: </span>
            {generalInformation.firstName}
          </Typography>
          <Typography className={classes.entry}>
            <span className={classes.label}>Last name: </span>{" "}
            {generalInformation.lastName}
          </Typography>
          <Typography className={classes.entry}>
            <span className={classes.label}>Gender: </span>{" "}
            {generalInformation.gender}
          </Typography>
          <Typography className={classes.entry}>
            <span className={classes.label}>Date of birth: </span>{" "}
            {generalInformation.dateOfBirth}
          </Typography>
          <Typography className={classes.entry}>
            <span className={classes.label}>Email: </span>{" "}
            {generalInformation.email}
          </Typography>
          <Typography className={classes.entry}>
            <span className={classes.label}>Phone Number: </span>{" "}
            {generalInformation.phoneNumber}
          </Typography>
          <Typography className={classes.entry}>
            <span className={classes.label}>Street Address: </span>{" "}
            {generalInformation.streetAddress}
          </Typography>
          <Typography className={classes.entry}>
            <span className={classes.label}>City: </span>{" "}
            {generalInformation.city}
          </Typography>
          <Typography className={classes.entry}>
            <span className={classes.label}>State: </span>{" "}
            {generalInformation.state}
          </Typography>
          <Typography className={classes.entry}>
            <span className={classes.label}>ZIP Code: </span>:{" "}
            {generalInformation.zipCode}
          </Typography>
          <Typography className={classes.entry}>
            <span className={classes.label}>Marital Status: </span>{" "}
            {generalInformation.maritalStatus}
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          Conditions
        </AccordionSummary>
        <AccordionDetails>
          <div className={classes.list}>
            <List>
              {conditions.map((condition) => (
                <ListItem key={condition.condition}>
                  <ListItemText
                    primary={condition.condition}
                    secondary={condition.type}
                  />
                </ListItem>
              ))}
            </List>
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion expanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          Medical Questions
        </AccordionSummary>
        <AccordionDetails>
          <div className={classes.list}>
            <List>
              {medicalQuestions.map((question) => (
                <ListItem key={question.question}>
                  <ListItemText
                    primary={question.question}
                    secondary={question.comment}
                  />
                </ListItem>
              ))}
            </List>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default Summary;
