/*!
Copyright (c) Valeri Mladenov.
All rights reserved.
* The above copyright notice and this permission notice
shall be included in all copies or substantial portions of the Software.
*/
import React, { useState } from 'react';
import { useMutation } from '@apollo/react-hooks';
import UserDetails from './UserDetails';
import ReportDetails from './ReportDetails';
import Confirm from './Confirm';
import Success from './Success';
import Error from './Error';
import { GENERATE_TOKEN, SEND_REPORT } from '../utils/graphql/queries';
import Cookie from './Cookie';
import Privacy from './Privacy';
import HowItWorks from './HowItWorks';
import Start from './Start';
import Loading from './Loading';

const StepController = () => {
  const [step, setStep] = useState(1);
  const nextStep = () => setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);
  const cookie = () => setStep(6);
  const privacy = () => setStep(7);
  const backHome = () => setStep(1);
  const howItWorks = () => setStep(8);


  const trowError = () => setStep(0);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    region: '',
    address: '',
    scname: '',
    desc: '',
  });
  const [generateToken, { loading: loadingToken }] = useMutation(GENERATE_TOKEN, {
    onCompleted: (result) => {
      localStorage.setItem('token', result.generateToken);
      nextStep();
    },
    onError: () => {
      trowError();
    },
    variables: {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      phone: formData.phone,
    },
  });
  const [sendReport, { loading: loadingSend }] = useMutation(SEND_REPORT, {
    onCompleted: () => {
      setStep();
    },
    onError: () => {
      trowError();
    },
    variables: {
      name: formData.scname,
      address: formData.address,
      region: formData.region,
      description: formData.desc,
    },
  });
  const sendDataProcess = () => {
    sendReport();
  };
  const generateTokenProcess = () => generateToken();
  if (loadingToken || loadingSend) return <Loading />;
  switch (step) {
    case 0:
      return (
        <Error
          cookie={cookie}
          privacy={privacy}
          howItWorks={howItWorks}
        />
      );
    case 1:
      return (
        <Start
          nextStep={nextStep}
          cookie={cookie}
          privacy={privacy}
          howItWorks={howItWorks}
        />
      );
    case 2:
      return (
        <UserDetails
          formData={formData}
          setFormData={setFormData}
          nextStep={generateTokenProcess}
          cookie={cookie}
          privacy={privacy}
          howItWorks={howItWorks}
        />
      );
    case 3:
      return (
        <ReportDetails
          formData={formData}
          setFormData={setFormData}
          cookie={cookie}
          privacy={privacy}
          howItWorks={howItWorks}
          nextStep={nextStep}
          prevStep={prevStep}
        />
      );
    case 4:
      return (
        <Confirm
          formData={formData}
          cookie={cookie}
          privacy={privacy}
          howItWorks={howItWorks}
          sendDataProcess={sendDataProcess}
          prevStep={prevStep}
        />
      );
    case 5:
      return (
        <Success
          cookie={cookie}
          privacy={privacy}
          howItWorks={howItWorks}
        />
      );
    case 6:
      return (
        <Cookie cookie={cookie} privacy={privacy} howItWorks={howItWorks} backHome={backHome} />
      );
    case 7:
      return (
        <Privacy cookie={cookie} privacy={privacy} howItWorks={howItWorks} backHome={backHome} />
      );
    case 8:
      return (
        <HowItWorks cookie={cookie} privacy={privacy} howItWorks={howItWorks} backHome={backHome} />
      );
    default:
      return (
        <Success
          cookie={cookie}
          privacy={privacy}
          howItWorks={howItWorks}
        />
      );
  }
};
export default StepController;
