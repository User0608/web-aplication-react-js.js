import React from 'react'
import { Route, Redirect } from 'react-router-dom'

export const Protected = ({ component: Component, ...rest }) => {
  const userLogged = false
  if (userLogged) {
    return <Route {...rest} render={Component} />
  }
  return (
    // <Route {...rest} render={Component} />
    <Redirect to="/login" />
  )
}

export default Protected
