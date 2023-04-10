import './App.css';
import { useState } from 'react';



function App() {

  const [formData, setFormData] = useState( {
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    address: "",
    city: "",
    state: "",
    zip: "",


  });

  console.log(formData);

  const changeHandler = (event) => {

    setFormData( prevData => {
      return {
        ...prevData,
        [event.target.name]:event.target.value
      }
    });

  }

  return (
    <div className="wrapper">
     <form className='formStyle'>

      <label htmlFor='firstName'>First name</label>
      <br/>
      <input
      type="text"
      placeholder='Vibha'
      name="firstName"
      id="firstName"
      onChange={changeHandler}
      value={formData.firstName}
      
       />

       <br/>
       <br/>

      <label htmlFor='lastName'>Last name</label>
      <br/>
      <input
      type="text"
      placeholder='Sahu'
      name="lastName"
      id="lastName"
      onChange={changeHandler}
      value={formData.lastName}
      
       />

       <br/>
       <br/>

      <label htmlFor='email'>Email address</label>
      <br/>
      <input
      type="email"
      placeholder='vibhasahu@gmail.com'
      name="email"
      id="email"
      onChange={changeHandler}
      value={formData.email}
      
       />

       <br/>
       <br/>

      <label htmlFor='email'>Country</label>
      <br/>
      <select
      name="country"
      id="country"
      onChange={changeHandler}
      value={formData.country}
      >
      <option value="India">India</option>
      <option value="Australia">Australia</option>
      <option value="Shrilanka">Shrilanka</option>
      <option value="New Zealand">New Zealand</option>
      <option value="Africa">Africa</option>
      </select>

      <br/>
      <br/>

      <label htmlFor='address'>Street address</label>
      <br/>
      <input
      type="text"
      placeholder='1234 Main ST'
      name="address"
      id="address"
      onChange={changeHandler}
      value={formData.address}
      
       />

      <br/>
      <br/>

      <label htmlFor='city'>City</label>
      <br/>
      <input
      type="text"
      placeholder='Raipur'
      name="city"
      id="city"
      onChange={changeHandler}
      value={formData.city}
      
       />

      <br/>
      <br/>

      <label htmlFor='state'>State/ Province</label>
      <br/>
      <input
      type="text"
      placeholder='Chhattisgarh'
      name="state"
      id="state"
      onChange={changeHandler}
      value={formData.state}
      
       />

      <br/>
      <br/>

      <label htmlFor='zip'>Zip/ Postal Code</label>
      <br/>
      <input
      type="text"
      placeholder='492001'
      name="zip"
      id="zip"
      onChange={changeHandler}
      value={formData.zip}
      
       />

      

     </form>
    </div>
  );
}

export default App;
