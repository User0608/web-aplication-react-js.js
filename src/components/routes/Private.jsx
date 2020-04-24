import React from 'react'
import { Route, Redirect } from 'react-router-dom'

const Private = ({ component: Component, ...rest }) => {

  const userLogged = localStorage.getItem('token')
  if (userLogged) {
    return <Route {...rest} component={Component} />
  }
  return (
    // <Route {...rest} render={Component} />
    <Redirect to="/login" />
  )
}

export default Private
