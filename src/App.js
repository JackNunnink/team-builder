import React, { useState, useEffect } from 'react';
import Customer from './components/Customer';
import CustomerForm from './components/CustomerForm';
import axios from 'axios';

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

  const onSubmit = () => {
    setCustomers([values, ...customers]);
    setValues(initialValue);
  }

  const onChange = (name, value) => {
    setValues({ ...values, [name]: value })
  }

  return (
    <div className="App">
      <h1>Customer Form Submission</h1>

      { errors && <h2 className="error">{errors}</h2> }
      <CustomerForm 
        values={values}
        change={onChange}
        submit={onSubmit}
      />

      {
        customers.map((customer, id) => {
          return (
            <Customer key={id} details={customer} />
          )
        })
      }
    </div>
  );
}

export default App;
