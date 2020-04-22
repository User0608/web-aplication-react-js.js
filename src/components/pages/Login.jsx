import React from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'

const authentication = (e) => {
  e.preventDefault() //este procedimiento evita que los datos sean enviados...
  const form = e.target
  const data = {
    "email": form.email.value,
    "password": form.password.value
  }
  Axios.post(`${process.env.REACT_APP_API_USER}/login`, data)
    .then(response => {
      localStorage.setItem('token', response.data.token)
      window.location = '/'
    })
    .catch(error => {
      console.log("Error : ", error)
    })

}

export const Login = () => (
  <div className="ed-grid">
    <div className="l-block"></div>
    <div className="m-to-center m-30 g-30 card">
      <h1 className="center "> Iniciar sesión</h1>
      <form onSubmit={authentication.bind(this)}>
        <div className="form__item">
          <label htmlFor="email">
            Correo Electronico
              <input type="email" id="email" name="email" placeholder="Correo" required />
          </label>
        </div>
        <div className="form__item">
          <label htmlFor="password">
            Contraseña
              <input type="password" ip="password" name="password" placeholder="********" required />
          </label>
        </div>
        <div className="form__item">
          <input type="submit" className="button full" value="Iniciar sesión" />
        </div>
      </form>
      <Link className="button ghost full" to="/registro"><span>Registrarse</span></Link>
    </div>
  </div>
)

export default Login
