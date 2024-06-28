import { useState } from 'react';
import { Login } from '../utils/login';

const LoginComponent = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = () => {
    //used to disable the button and show a loading state
    setIsLoading(true);
    //used to display an error message if the credentials are incorrect
    setError("");

    setTimeout(() => {
      if (email === Login.email && password === Login.password) {
        alert("Login successful!");
      } else {
        setError("Incorrect email or password");
      }
      setIsLoading(false);
    }, 1000);
  };

  const isLoginDisabled = !email || password.length < 6 || isLoading;

  return (
    <div className="wrapper">
      <div className="row">
        <label htmlFor={"email"}>Email</label>
        <input
          id={"email"}
          type={"email"}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="row">
        <label htmlFor={"password"}>Password</label>
        <input
          id={"password"}
          type={"password"}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      {error && <div className="errorMessage">{error}</div>}

      <div className="button">
        <button onClick={handleLogin} disabled={isLoginDisabled}>
          {isLoading ? "Logging in..." : "Login"}
        </button>
      </div>
    </div>
  );
}

export default LoginComponent;
