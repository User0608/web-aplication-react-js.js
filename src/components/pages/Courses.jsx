import React, { useEffect } from 'react'
import Banner from '../organisms/Banner'
import { connect } from 'react-redux'
import store from '../../redux/store'
import { getAllCourses } from '../../redux/createAction'
import GridCourses from '../organisms/GridCourses'

export const Courses = ({ match, courses }) => {

  useEffect(() => {
    store.dispatch(getAllCourses())
  }, [match])

  return (
    <>
      <Banner
        color="dark-color"
        imagen={{
          src: "https://i.pinimg.com/originals/5c/1a/82/5c1a82ce15bd9ae6fe4fa8f5f1663c16.jpg",
          alt: "Banner Courses"
        }}
        title="Nuestros Cursos"
        subtitle="Comienza desde cero en tu camino a dominar la tecnología"
      />
      <GridCourses courses={courses} />
    </>

  )
}
const mapStoreToProps = (courses) => (
  {
    courses: courses.courseReducer.courses
  }
)


export default connect(mapStoreToProps, {})(Courses)
