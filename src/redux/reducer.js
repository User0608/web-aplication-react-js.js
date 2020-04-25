import {
  GET_ALL_POST,
  GET_POST,
  GET_ALL_SPECIALITIES,
  GET_ALL_COURSES,
  GET_ALL_TEACHERS,
  GET_CLASS,
  GET_COURSE,
  GET_TEACHER,
  GET_SPECIALITY
} from "./action"


export const postReducer = (state = {}, action) => {
  let data = {}
  switch (action.type) {
    case GET_ALL_POST:
      data = { posts: action.posts }
      break
    case GET_POST:
      data = { post: action.post }
      break
    default:
      break
  }

  return {
    ...state, ...data
  }
}

export const specialityReducer = (state = {}, action) => {
  let data = {}
  switch (action.type) {
    case GET_ALL_SPECIALITIES:
      data = { specialities: action.specialities }
      break
    case GET_SPECIALITY:
      data = { speciality: action.speciality }
      break
    default:
      break
  }
  return {
    ...state, ...data
  }
}


export const courseReducer = (state = {}, action) => {
  let data = {}
  switch (action.type) {
    case GET_ALL_COURSES:
      data = { courses: action.courses }
      break
    case GET_COURSE:
      data = { course: action.course }
      break
    default:
      break
  }
  return {
    ...state, ...data
  }
}


export const teacherReducer = (state = {}, action) => {
  let data = {}
  switch (action.type) {
    case GET_ALL_TEACHERS:
      data = { teachers: action.teachers }
      break
    case GET_TEACHER:
      data = { teacher: action.teacher }
      break
    default:
      break
  }
  return {
    ...state, ...data
  }
}

export const classReducer = (state = {}, action) => {
  let data = {}
  switch (action.type) {
    case GET_CLASS:
      data = { clase: action.clase }
      break
    default:
      break
  }
  return {
    ...state, ...data
  }
}
