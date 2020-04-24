import React, { useEffect } from 'react'
import Banner from '../organisms/Banner'
import store from '../../redux/store'
import { getAllSpecialities } from '../../redux/createAction'
import { connect } from 'react-redux'
import GridSpecialities from '../organisms/GridSpecialities'

const Specialities = ({ match, specialities }) => {
  useEffect(() => {
    store.dispatch(getAllSpecialities())
  }, [match])

  return (
    <>
      <Banner
        color="firs-color"
        imagen={{
          src: "https://i.pinimg.com/originals/5c/1a/82/5c1a82ce15bd9ae6fe4fa8f5f1663c16.jpg",
          alt: "Banner Especialides"
        }}
        title="Especialidades"
        subtitle="Domina una tecnología con las rutas de aprendizaje que te ofrecemos"
      />
      <GridSpecialities
        specialities={specialities}
      />
    </>
  )
}

const mapStateToProps = store => (
  {
    specialities: store.specialityReducer.specialities
  }
)


export default connect(mapStateToProps, {})(Specialities)
