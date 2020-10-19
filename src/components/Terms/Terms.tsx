import {
  Button,
  Checkbox,
  Divider,
  FormControlLabel,
  Typography,
} from "@material-ui/core";
import State from "models/State.interface";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAgreeToTerms } from "store/actions/CurrentForm";
import useStyles from "./Terms.styles";

const terms = `Nullam quis risus eget urna mollis ornare vel eu leo. Aenean lacinia bibendum nulla sed consectetur. Integer posuere erat a ante venenatis dapibus posuere velit aliquet. Etiam porta sem malesuada magna mollis euismod. Maecenas sed diam eget risus varius blandit sit amet non magna.

Etiam porta sem malesuada magna mollis euismod. Nullam quis risus eget urna mollis ornare vel eu leo. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Vestibulum id ligula porta felis euismod semper. Donec ullamcorper nulla non metus auctor fringilla.`;

const Terms = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const agree = useSelector((state: State) => state.currentForm.agreeToTerms);

  const handleCheckChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setAgreeToTerms(e.target.checked));
  };

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <Typography variant="h2">Terms</Typography>
        <Divider />
        <Typography className={classes.text} variant="body1">
          {terms}
        </Typography>
      </div>
      <Divider />
      <FormControlLabel
        className={classes.text}
        value="start"
        control={
          <Checkbox
            color="primary"
            checked={agree}
            onChange={handleCheckChange}
            inputProps={{ "aria-label": "agree to terms" }}
          />
        }
        label="Agree to terms"
        labelPlacement="start"
      />
    </div>
  );
};

export default Terms;
