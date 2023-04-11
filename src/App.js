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
    postalCode: "",
    comments: false,
    candidates: false,
    offers: false,
    pushNotifications: ""


  });

  // console.log(formData);

  const changeHandler = (event) => {

    setFormData( prevData => {
      const {name, value, checked, type} = event.target
      return {
        ...prevData,
        [name]: type === "checkbox" ? checked:value
      }
    });

  }

  function submitHandler(event)
  {
    event.preventDefault();

    console.log("Finally printing the value of form data: ");
    console.log(formData);

  }

  return (
    <div className="wrapper">
     <form
      onSubmit={submitHandler}
      className='formStyle'>

      <label className='labelStyle' htmlFor='firstName'>First name</label>
      <br/>
      <input
      type="text"
      placeholder='Vibha'
      name="firstName"
      id="firstName"
      onChange={changeHandler}
      value={formData.firstName}
      className='inputText'
      
       />

       <br/>
       <br/>

      <label className='labelStyle' htmlFor='lastName'>Last name</label>
      <br/>
      <input
      type="text"
      placeholder='Sahu'
      name="lastName"
      id="lastName"
      onChange={changeHandler}
      value={formData.lastName}
      className='inputText'
      
       />

       <br/>
       <br/>

      <label className='labelStyle' htmlFor='email'>Email address</label>
      <br/>
      <input
      type="email"
      placeholder='vibhasahu@gmail.com'
      name="email"
      id="email"
      onChange={changeHandler}
      value={formData.email}
      className='inputText'
      
       />

       <br/>
       <br/>

      <label className='labelStyle' htmlFor='email'>Country</label>
      <br/>
      <select
      name="country"
      id="country"
      onChange={changeHandler}
      value={formData.country}
      className='inputText'
      >
      <option value="India">India</option>
      <option value="Australia">Australia</option>
      <option value="Shrilanka">Shrilanka</option>
      <option value="New Zealand">New Zealand</option>
      <option value="Africa">Africa</option>
      </select>

      <br/>
      <br/>

      <label className='labelStyle' htmlFor='address'>Street address</label>
      <br/>
      <input
      type="text"
      placeholder='1234 Main ST'
      name="address"
      id="address"
      onChange={changeHandler}
      value={formData.address}
      className='inputText'
      
       />

      <br/>
      <br/>

      <label className='labelStyle' htmlFor='city'>City</label>
      <br/>
      <input
      type="text"
      placeholder='Raipur'
      name="city"
      id="city"
      onChange={changeHandler}
      value={formData.city}
      className='inputText'
      
       />

      <br/>
      <br/>

      <label className='labelStyle' htmlFor='state'>State / Province</label>
      <br/>
      <input
      type="text"
      placeholder='Chhattisgarh'
      name="state"
      id="state"
      onChange={changeHandler}
      value={formData.state}
      className='inputText'
      
       />

      <br/>
      <br/>

      <label className='labelStyle' htmlFor='postalCode'>Zip / Postal Code</label>
      <br/>
      <input
      type="text"
      placeholder='492001'
      name="postalCode"
      id="postalCode"
      onChange={changeHandler}
      value={formData.postalCode}
      className='inputText'
      
       />

      <br/>
      <br/>
    
      <fieldset 
      className='border-none'
      >
        <legend>By Email</legend>
       

        {/* checkbox 1 */}
        <div className='flexbox'>
            <input
            id="comments"
            name="comments"
            type="checkbox"
            checked={formData.comments}
            onChange={changeHandler}
            
            />
            <div className='marginLeftTop'>
            <label htmlFor='comments'>Comments</label>
            <p>Get notified when someones posts a comment on a posting.</p>
            </div>
         </div>

         {/* checkbox 2 */}
        <div className='flexbox'>
            <input
            id="candidates"
            name="candidates"
            type="checkbox"
            checked={formData.candidates}
            onChange={changeHandler}
            
            />
            <div className='marginLeftTop'>
            <label htmlFor='candidates'>Candidates</label>
            <p>Get notified when candidate apply for job.</p>
            </div>
         </div>

         {/* checkbox 3 */}
        <div className='flexbox'>
            <input
            id="offers"
            name="offers"
            type="checkbox"
            checked={formData.offers}
            onChange={changeHandler}
            
            />
            <div className='marginLeftTop'>
            <label htmlFor='offers'>Offers</label>
            <p>Get notified when candidate accept or rejects an offer.</p>
            </div>
         </div>

      </fieldset>

      <br/>
      <fieldset
       className='border-none'>
        <legend>Push Notifications</legend>
        <p>These are delivered via SM to your mobile phone.</p>
        
        {/* radio button 1 */}
        <div className='marginLeftTop'>
          <input
          type="radio"
          id="pushEverything"
          name="pushNotifications"
          value="Everything"
          checked={ formData.pushNotifications === "Everything" }
          onChange={changeHandler}
          />

          <label htmlFor='pushEverything' className='marginLeft'>Everything</label>
        </div>

        {/* radio button 2 */}
        <div className='marginLeftTop'>
          <input
          type="radio"
          id="pushEmail"
          name="pushNotifications"
          value="Same as Email"
          checked={ formData.pushNotifications === "Same as Email" }
          onChange={changeHandler}
          />

          <label htmlFor='pushEmail' className='marginLeft'>Same as Email</label>
        </div>

        {/* radio button 3 */}
        <div className='marginLeftTop'>
          <input
          type="radio"
          id="pushNothing"
          name="pushNotifications"
          value="No Push Notifications"
          checked={ formData.pushNotifications === "No Push Notifications" }
          onChange={changeHandler}
          />

          <label htmlFor='pushNothing' className='marginLeft'>No Push Notifications</label>
        </div>

       <br/>
        <button>Save</button>
        
      </fieldset>

      

     </form>
    </div>
  );
}

export default App;
