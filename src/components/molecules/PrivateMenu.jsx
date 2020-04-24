import React from 'react'
import { NavLink } from 'react-router-dom'

const removeToken = () => {
  localStorage.removeItem("token")
  window.location.assign('/login')
}

export const PrivateMenu = () => (
  <ul>
    <li><NavLink exact to="/" >Inicio</NavLink></li>
    <li><NavLink to="/especialidades">Especialidades</NavLink></li>
    <li><NavLink to="/cursos">Cursos</NavLink></li>
    <li><NavLink to="/profesores">Profesores</NavLink></li>
    <li onClick={() => removeToken()}><NavLink to="">Cerrar Sesión</NavLink></li>
  </ul>
)

export default PrivateMenu
