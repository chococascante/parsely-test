import React from 'react';
import { TextField } from "@material-ui/core"

const GeneralInformationForm = () => {
  return (
    <form>
      <TextField id="firstName" label="First Name" placeholder="First Name" variant="outlined" />
      <TextField id="lastName" label="Last Name" placeholder="Last Name" variant="outlined" />
      <TextField id="Gender" label="Gender" placeholder="Gender" variant="outlined" />
      <TextField type="date" id="dateOfBirth" label="Date of Birth" placeholder="Date of Birth" variant="outlined" />
      <TextField type="email" id="email" label="Email" placeholder="email" variant="outlined" />
      <TextField type="tel" id="phone" label="Phone" placeholder="Phone" variant="outlined" />
      <TextField id="firstName" label="First Name" placeholder="First Name" variant="outlined" />
      <TextField id="firstName" label="First Name" placeholder="First Name" variant="outlined" />
      <TextField id="firstName" label="First Name" placeholder="First Name" variant="outlined" />
      <TextField id="firstName" label="First Name" placeholder="First Name" variant="outlined" />
      <TextField id="firstName" label="First Name" placeholder="First Name" variant="outlined" />
    </form>
  )
}

export default GeneralInformationForm
