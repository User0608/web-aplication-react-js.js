import Axios from 'axios'
import {
  GET_ALL_POST,
  GET_ALL_SPECIALITIES,
  GET_ALL_COURSES,
  GET_ALL_TEACHERS,
  GET_POST,
  GET_SPECIALITY,
  GET_COURSE,
  GET_CLASS
} from './action'

const API_URL = process.env.REACT_APP_API_URL

export const getAllPost = () => dispach => {
  Axios.get(`${API_URL}/posts`)
    .then(
      response => {
        return dispach({
          type: GET_ALL_POST,
          posts: response.data
        })
      })

}

export const getAllSpecialities = () => dispach => {
  Axios.get(`${API_URL}/especialidades`)
    .then(
      response => {
        return dispach({
          type: GET_ALL_SPECIALITIES,
          specialities: response.data
        })
      })

}

export const getAllCourses = () => dispach => {
  Axios.get(`${API_URL}/cursos`)
    .then(
      response => {
        return dispach({
          type: GET_ALL_COURSES,
          courses: response.data
        })
      })

}

export const getAllTeachers = () => dispach => {
  Axios.get(`${API_URL}/profesores`)
    .then(
      response => {
        return dispach({
          type: GET_ALL_TEACHERS,
          teachers: response.data
        })
      })
    .catch((error) => console.log(error))
}



export const getPost = id => dispach => {
  Axios.get(`${API_URL}/posts/${id}`)
    .then(
      response => {
        return dispach({
          type: GET_POST,
          post: response.data
        })
      })

}

export const getSpeciality = id => dispach => {
  Axios.get(`${API_URL}/especialidad/${id}`)
    .then(
      response => {
        return dispach({
          type: GET_SPECIALITY,
          speciality: response.data
        })
      })
    .catch(
      () => {
        return dispach({
          type: GET_SPECIALITY
        })
      }
    )

}


export const getCourse = id => dispach => {
  Axios.get(`${API_URL}/curso/${id}`)
    .then(
      response => {
        return dispach({
          type: GET_COURSE,
          course: response.data
        })
      })
    .catch(
      (error) => {
        return dispach({
          type: GET_COURSE,
        })
      }
    )

}


export const getClass = id => dispach => {
  Axios.get(`${API_URL}/clases/${id}`)
    .then(
      response => {
        return dispach({
          type: GET_CLASS,
          clase: response.data
        })
      })

}
