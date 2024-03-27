import React from 'react';
import RegistrationForm from './RegistrationForm';
import { RegistrationProvider } from './RegistrationContext';

import RegistrationTable from './RegistrationTable';

 
 
const RegistrationApiContext= () => {
  return (
    <RegistrationProvider>
     
       <div>
        <h3>Registration Form</h3>
        <RegistrationForm />
        <h3>registration Details</h3>
        <RegistrationTable />
      </div>

    </RegistrationProvider>
  );
};
 
export default RegistrationApiContext;