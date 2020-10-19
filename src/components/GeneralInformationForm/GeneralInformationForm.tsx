import React, { useState } from "react";
import {
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@material-ui/core";
import useStyles from "./GeneralInformationForm.styles";
import { useDispatch, useSelector } from "react-redux";
import { setGeneralInformation } from "store/actions/CurrentForm";
import State from "models/State.interface";

const GeneralInformationForm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const initialGeneralInformation = useSelector(
    (state: State) => state.currentForm.generalInformation
  );

  const [firstName, setFirstName] = useState<string>(
    initialGeneralInformation.firstName
  );
  const [lastName, setLastName] = useState<string>(
    initialGeneralInformation.lastName
  );
  const [gender, setGender] = useState<string>(
    initialGeneralInformation.gender
  );
  const [dateOfBirth, setDateOfBirth] = useState<string>(
    initialGeneralInformation.dateOfBirth
  );
  const [email, setEmail] = useState<string>(initialGeneralInformation.email);
  const [phoneNumber, setPhoneNumber] = useState<string>(
    initialGeneralInformation.phoneNumber
  );
  const [streetAddress, setStreetAddress] = useState<string>(
    initialGeneralInformation.streetAddress
  );
  const [city, setCity] = useState<string>(initialGeneralInformation.city);
  const [state, setState] = useState<string>(initialGeneralInformation.state);
  const [zipCode, setZipCode] = useState<string>(
    initialGeneralInformation.zipCode
  );
  const [maritalStatus, setMaritalStatus] = useState<string>(
    initialGeneralInformation.maritalStatus
  );

  const handleOnBlur = () => {
    const generalInformation = {
      firstName,
      lastName,
      gender,
      dateOfBirth,
      email,
      phoneNumber,
      streetAddress,
      city,
      state,
      zipCode,
      maritalStatus,
    };
    dispatch(setGeneralInformation(generalInformation));
  };

  return (
    <form className={classes.form}>
      <div className={classes.flexRow}>
        <TextField
          className={classes.flexItem}
          id="firstName"
          label="First Name"
          placeholder="First Name"
          variant="outlined"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          onBlur={handleOnBlur}
        />
        <TextField
          className={classes.flexItem}
          id="lastName"
          label="Last Name"
          placeholder="Last Name"
          variant="outlined"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          onBlur={handleOnBlur}
        />
      </div>

      <div className={classes.flexRow}>
        <TextField
          className={classes.flexItem}
          id="Gender"
          label="Gender"
          placeholder="Gender"
          variant="outlined"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          onBlur={handleOnBlur}
        />
        <TextField
          className={classes.flexItem}
          type="date"
          id="dateOfBirth"
          label="Date of Birth"
          variant="outlined"
          value={dateOfBirth}
          onChange={(e) => setDateOfBirth(e.target.value)}
          onBlur={handleOnBlur}
          InputLabelProps={{
            shrink: true,
          }}
        />
      </div>

      <div className={classes.flexRow}>
        <TextField
          className={classes.flexItem}
          type="email"
          id="email"
          label="Email"
          placeholder="email"
          variant="outlined"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          onBlur={handleOnBlur}
        />
        <TextField
          className={classes.flexItem}
          type="tel"
          id="phone"
          label="Phone"
          placeholder="Phone"
          variant="outlined"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          onBlur={handleOnBlur}
        />
      </div>

      <TextField
        className={classes.flexRow}
        id="streetAddress"
        label="Street Address"
        placeholder="Street Address"
        variant="outlined"
        value={streetAddress}
        onChange={(e) => setStreetAddress(e.target.value)}
        onBlur={handleOnBlur}
      />

      <div className={classes.flexRow}>
        <TextField
          className={classes.flexItem}
          id="zipCode"
          label="ZIP Code"
          placeholder="ZIP Code"
          variant="outlined"
          value={zipCode}
          onChange={(e) => setZipCode(e.target.value)}
          onBlur={handleOnBlur}
        />
        <TextField
          className={classes.flexItem}
          id="city"
          label="City"
          placeholder="City"
          variant="outlined"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onBlur={handleOnBlur}
        />
      </div>
      <div className={classes.flexRow}>
        <TextField
          className={classes.flexItem}
          id="state"
          label="State"
          placeholder="State"
          variant="outlined"
          value={state}
          onChange={(e) => setState(e.target.value)}
          onBlur={handleOnBlur}
        />
        <FormControl variant="outlined" className={classes.flexItem}>
          <InputLabel htmlFor="maritalStatus">Marital Status</InputLabel>
          <Select
            id="maritalStatus"
            label="Marital Status"
            placeholder="Marital Status"
            value={maritalStatus}
            onChange={(e) => setMaritalStatus(e.target.value as string)}
            onBlur={handleOnBlur}
          >
            <MenuItem value="single">Single</MenuItem>
            <MenuItem value="married">Married</MenuItem>
            <MenuItem value="divorced">Divorced</MenuItem>
            <MenuItem value="lifePartner">Life Partner</MenuItem>
            <MenuItem value="separated">Separated</MenuItem>
            <MenuItem value="widowed">Widowed</MenuItem>
            <MenuItem value="other">Other</MenuItem>
          </Select>
        </FormControl>
      </div>
    </form>
  );
};

export default GeneralInformationForm;
