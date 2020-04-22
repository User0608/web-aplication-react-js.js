import React from 'react'
import Axios from 'axios'

const register = (e) => {
  e.preventDefault()
  const form = e.target
  let mensaje = ""
  if (form.pass.value === form.password.value) {
    if (form.pass.value.length >= 6) {
      const data = {
        "name": form.name.value,
        "email": form.email.value,
        "password": form.password.value
      }
      console.log("______::::_")
      Axios.post(`${process.env.REACT_APP_API_USER}/signup`, data)
        .then(response => {
          alert("Registro exitoso")
          console.log(response.data)
          window.location = "/"
        })
        .catch(error => {
          alert("Sucedió un error")
        })

    } else {
      mensaje = "La contraseña debe ser de almenso 6 caracteres"
    }
  } else {
    mensaje = "La contraseña no coincide"
  }
  if (mensaje.length !== 0) {
    form.pass.value = ""
    form.password.value = ""
    alert(mensaje)
  }
}

export const Register = () => (
  <div className="ed-grid">

    <div className="l-block"></div>
    <div className="m-to-center m-30 g-30 card">
      <h1 className="center "> Registrarse</h1>
      <form onSubmit={register.bind(this)}>
        <div className="form__item">
          <label htmlFor="name">
            Nombre
              <input type="text" id="name" name="name" placeholder="Nombres" required />
          </label>
        </div>

        <div className="form__item">
          <label htmlFor="email">
            Correo Electronico
              <input type="email" id="email" name="email" placeholder="Email" required />
          </label>
        </div>

        <div className="form__item">
          <label htmlFor="password">
            Contraseña
              <input type="password" ip="password" name="password" required />
          </label>
        </div>
        <div className="form__item">
          <label htmlFor="pass">
            Contraseña
              <input type="password" ip="pass" name="pass" required />
          </label>
        </div>
        <div className="form__item">
          <input type="submit" className="button full" value="Registrarse" />
        </div>
      </form>

    </div>

  </div>
)

export default Register
