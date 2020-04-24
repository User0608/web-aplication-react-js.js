
import React from 'react'
import withLoader from '../hoc/withLoader'
import TeacherCard from '../molecules/TeacherCard'

const GridTeachers = ({ teachers }) => (
  <main className="ed-grid m-grid-3 lg-grid-4 row-gap">
    {
      teachers.map(({ id, name, picture, country }) => (
        <TeacherCard key={id}
          id={id}
          name={name}
          country={country}
          picture={picture}
        />
      ))
    }
  </main>
)
export default withLoader('teachers', GridTeachers)
