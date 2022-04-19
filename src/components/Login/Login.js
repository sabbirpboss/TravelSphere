import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className="form-container">
      <div>
        <h2 className="form-title">Please Login!!!</h2>
        <form action="">
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="user-email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="user-password" required />
          </div>
          <input type="submit" className="form-submit" value="Login" />
        </form>
        <p>
          New to Here?{" "}
          <Link className="form-link" to="/signUp">
            Create An Account Very Soon
          </Link>{" "}
        </p>
      </div>
    </div>
    );
};

export default Login;