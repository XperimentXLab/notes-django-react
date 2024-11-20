import { useState } from "react";
import api from "../api";
import { useNavigate } from "react-router-dom";
import { ACCESS_TOKEN, REFRESH_TOKEN } from "../constants";
import Loading from "../components/Loading"

function FormT ({route, method}) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const name = method === "login" ? "Login" : "Register";

  const handleSubmit = async (e) => {
      setLoading(true);
      e.preventDefault();

      try {
          const res = await api.post(route, { username, password })
          console.log(res)
          if (method === "login") {
              localStorage.setItem(ACCESS_TOKEN, res.data.access);
              localStorage.setItem(REFRESH_TOKEN, res.data.refresh);
              navigate("/")
          } else {
              navigate("/login")
          }
      } catch (error) {
          alert(error)
      } finally {
          setLoading(false)
      }
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <h3>{name}</h3>

      <input type="text" className="input"
        placeholder="Enter username"
        value={username}
        onChange={(e)=> setUsername(e.target.value)}
      />

      <input type="password" className="input"
        placeholder="Enter password"
        value={password}
        onChange={(e)=> setPassword(e.target.value)}
      />

      {loading && <Loading />}

      <button type="submit" className="submit-button">
        {name}
      </button>


    </form>
  )
}

export default FormT