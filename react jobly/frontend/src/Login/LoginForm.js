import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Alert from "../common/Alert";
import JoblyImg from "../Jobly.png";
import "./LoginForm.css";

function LoginForm({ login }) {
  const history = useHistory();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [formErrors, setFormErrors] = useState([]);

  console.debug(
      "LoginForm",
      "login=", typeof login,
      "formData=", formData,
      "formErrors", formErrors,
  );

  /** Handle form submit:
   *
   * Calls login func prop and, if successful, redirect to /companies.
   */

  async function handleSubmit(evt) {
    evt.preventDefault();
    let result = await login(formData);
    if (result.success) {
      history.push("/companies");
    } else {
      setFormErrors(result.errors);
    }
  }

  /** Update form data field */
  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(l => ({ ...l, [name]: value }));
  }

  return (
      <div className="LoginForm" style={{ backgroundImage: `url(${JoblyImg})` }}>
         <h3 className="mb-3">Log In</h3>
          <form onSubmit={handleSubmit}>
            <label>Username</label>
                  <input
                      name="username"
                      className="form-control"
                      value={formData.username}
                      onChange={handleChange}
                      autoComplete="username"
                      required/>
                 <br></br>  
                  <label>Password</label>
                  <input
                      type="password"
                      name="password"
                      className="form-control"
                      value={formData.password}
                      onChange={handleChange}
                      autoComplete="current-password"
                      required/>
                   {formErrors.length
                    ? <Alert type="danger" messages={formErrors} />
                    : null}
                  <br></br>   
               <button
                    className="btn btn-primary float-right"
                    onSubmit={handleSubmit}>
                  Submit
                </button>
              </form>
        </div>
  );
}

export default LoginForm;
