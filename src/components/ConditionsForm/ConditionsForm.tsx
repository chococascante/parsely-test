import React, { useState } from "react";
import { Autocomplete } from "@material-ui/lab";
import useStyles from "./ConditionsForm.styles";
import conditionsdata from "mocks/conditions.json";
import Condition from "models/Condition.interface";
import { useDispatch, useSelector } from "react-redux";
import State from "models/State.interface";
import {
  Button,
  List,
  ListItem,
  ListItemText,
  TextField,
} from "@material-ui/core";
import { setConditions } from "store/actions/CurrentForm";

const ConditionsForm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [currentCondition, setCurrentCondition] = useState<Condition | null>(
    null
  );
  const selectedConditions = useSelector(
    (state: State) => state.currentForm.conditions
  );

  const conditionTypes = [
    ...new Set(conditionsdata.map((condition) => condition.type)),
  ];

  const handleConditionChange = (
    event: React.ChangeEvent<{}>,
    value: Condition | null
  ) => {
    setCurrentCondition(value);
  };

  const handleButtonPress = () => {
    if (currentCondition) {
      const newConditions = [...selectedConditions, currentCondition];
      dispatch(setConditions(newConditions));
      setCurrentCondition(null);
    }
  };

  return (
    <form className={classes.form}>
      <div className={classes.flexRow}>
        <Autocomplete
          className={classes.autoComplete}
          options={conditionsdata.sort((a, b) => -b.type.localeCompare(a.type))}
          groupBy={(condition: Condition) => condition.type}
          id="selectedConditions"
          getOptionLabel={(condition) => condition.condition}
          renderInput={(params) => (
            <TextField {...params} label="Combo box" variant="outlined" />
          )}
          onChange={(event, values) => handleConditionChange(event, values)}
        />
        <Button onClick={handleButtonPress} disabled={!currentCondition}>
          Add
        </Button>
      </div>

      <div className={classes.list}>
        <List>
          {selectedConditions.map((condition) => (
            <ListItem key={condition.condition}>
              <ListItemText
                primary={condition.condition}
                secondary={condition.type}
              />
            </ListItem>
          ))}
        </List>
      </div>
    </form>
  );
};

export default ConditionsForm;
