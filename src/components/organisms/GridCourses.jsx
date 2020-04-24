import React from 'react'
import withLoader from '../hoc/withLoader'
import Card from '../molecules/Card'

const GridCourses = ({ courses }) => (
  <main className="ed-grid m-grid-4">
    {
      courses.map(c => (
        <Card key={c.id}
          path="cursos"
          id={c.id}
          name={c.name}
          picture={c.picture}
        />
      ))
    }
  </main>
)
export default withLoader('courses', GridCourses)
