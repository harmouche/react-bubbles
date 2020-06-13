import React, {useState} from "react";
import axios from 'axios';

const Login = props => {
  const [credentials, setCredentials] = useState({
      username: "",
      password: ""
  });

  const onChangeHandler = e => {
      return setCredentials({
          ...credentials,
          [e.target.name]: e.target.value
      });
  };

  const handleSubmit = e => {
      e.preventDefault();
      axios
          .post("http://localhost:5000/api/login", credentials)
          .then(res => {
              localStorage.setItem("token", res.data.payload);
              props.history.push("bubbles");
          })
          .catch(err => console.log(err));
  };
  return (
    
      <div>
        
      <h2>Welcome to the Bubble App!</h2>
          <form onSubmit={handleSubmit}>
              <label> Username
                <input type="text" name="username" placeholder="Username" onChange={onChangeHandler} />
              </label>

              <label>password
              <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={onChangeHandler}
              />
              </label>
              <button>Log in</button>
          </form>
      </div>
  );
};
export default Login;