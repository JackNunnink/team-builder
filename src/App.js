import React, { useState, useEffect } from 'react';
import Customer from './components/Customer';
import CustomerForm from './components/CustomerForm';
import './App.css';

const initialValue = {
  fullName: '',
  phoneNumber: '',
  email: '',
  websiteType: ''
}

function App() {
  const [customers, setCustomers] = useState([]);
  const [values, setValues] = useState(initialValue);
  const [errors, setErrors] = useState(null);

  const updateForm = (inputName, inputValue) => {
    setValues({ ...values, [inputName]: inputValue });
  }

  const submitForm = () => {
    const newCustomer = {
      fullName: values.fullName.trim(),
      phoneNumber: values.phoneNumber.trim(),
      email: values.email.trim(),
      websiteType: values.websiteType
    }
  }

  return (
    <div className="App">

    </div>
  );
}

export default App;
