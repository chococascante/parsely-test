import React, { useState } from "react";
import useStyles from "./MedicalQuestionsForm.styles";
import {
  TextField,
  Checkbox,
  FormControlLabel,
  List,
  ListItem,
  Paper,
} from "@material-ui/core";
import MedicalQuestion from "models/MedicalQuestion.interface";
import { useDispatch, useSelector } from "react-redux";
import { setMedicalQuestions } from "store/actions/CurrentForm";
import State from "models/State.interface";

const MedicalQuestionsForm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const defaultQuestions = useSelector(
    (state: State) => state.currentForm.medicalQuestions
  );
  const [answers, setAnswers] = useState<MedicalQuestion[]>(defaultQuestions);

  const handleSwitchChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    question: MedicalQuestion
  ) => {
    const newArray = answers.map((element) => {
      if (element.question === question.question) {
        return { ...question, answer: event.target.checked };
      } else {
        return element;
      }
    });

    setAnswers(newArray);
  };

  const handleCommentChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
    question: MedicalQuestion
  ) => {
    const newArray = answers.map((element) => {
      if (element.question === question.question) {
        return { ...question, comment: event.target.value };
      } else {
        return element;
      }
    });

    setAnswers(newArray);
  };

  const handleOnBlur = () => {
    dispatch(setMedicalQuestions(answers));
  };

  return (
    <Paper className={classes.form}>
      <List className={classes.list}>
        {answers.map((question: MedicalQuestion) => {
          return (
            <ListItem
              className={classes.group}
              key={question.question}
              onBlur={handleOnBlur}
            >
              <FormControlLabel
                value="start"
                control={
                  <Checkbox
                    color="primary"
                    checked={question.answer}
                    onChange={(e) => handleSwitchChange(e, question)}
                    inputProps={{ "aria-label": "primary checkbox" }}
                  />
                }
                label={question.question}
                labelPlacement="start"
              />

              {question.answer && (
                <TextField
                  className={classes.flexRow}
                  label={question.followUp}
                  variant="outlined"
                  id={`${question}-comment`}
                  value={question.comment}
                  onChange={(event) => handleCommentChange(event, question)}
                />
              )}
            </ListItem>
          );
        })}
      </List>
    </Paper>
  );
};

export default MedicalQuestionsForm;
