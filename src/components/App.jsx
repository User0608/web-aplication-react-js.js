import React from 'react'
import Home from './pages/Home'
import Specialities from './pages/Specialities'
import Speciality from './pages/Speciality'
import Courses from './pages/Courses'
import Course from './pages/Course'
import Teachers from './pages/Teachers'
import Clase from './pages/Clase'
import Login from './pages/Login'
import Register from './pages/Register'
import Page404 from './pages/Page404'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Private from './routes/Private'
import Public from './routes/Public'
import Header from './organisms/Header'



const App = () => (
  <Router>
    <Header />
    <Switch>
      <Private path="/" exact component={Home} />
      <Private path="/especialidades" exact component={Specialities} />
      <Private path="/especialidades/:id" component={Speciality} />
      <Private path="/cursos" exact component={Courses} />
      <Private path="/cursos/:id" component={Course} />
      <Private path="/profesores" exact component={Teachers} />
      <Private path="/clase/:id" component={Clase} />
      <Public path="/login" exact component={Login} />
      <Public path="/registro" exact component={Register} />
      <Route component={Page404} />
    </Switch>
  </Router>
)

export default App;
