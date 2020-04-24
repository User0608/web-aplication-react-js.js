import React from 'react'
import Card from '../molecules/Card'

const GridSpecialities = ({ specialities }) => (
  <main className="ed-grid m-grid-4">
    {
      specialities &&
      specialities.map(c => (
        <Card key={c.id}
          path="especialidades"
          id={c.id}
          name={c.name}
          picture={c.picture}
        />
      ))
    }
  </main>
)

export default GridSpecialities
