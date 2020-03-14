/*!
Copyright (c) Valeri Mladenov.
All rights reserved.
* The above copyright notice and this permission notice
shall be included in all copies or substantial portions of the Software.
*/
import React, { useState } from 'react';
import UserDetails from './UserDetails';
import ReportDetails from './ReportDetails';
import Confirm from './Confirm';
import Success from './Success';

export const StepController = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    city: '',
    scname: '',
    address: '',
    desc: '',
    photo: '',
  });
  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);
  const sendData = () => {
    // todo: send graphql mutation
    nextStep();
  };
  switch (step) {
    case 1:
      return (
        <UserDetails
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
        />
      );
    case 2:
      return (
        <ReportDetails
          formData={formData}
          setFormData={setFormData}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 3:
      return (
        <Confirm formData={formData} sendData={sendData} prevStep={prevStep} />
      );
    default:
      return <Success />;
  }
};
export default StepController;
