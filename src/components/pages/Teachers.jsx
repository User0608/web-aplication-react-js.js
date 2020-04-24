import React, { useEffect } from 'react'
import Banner from '../organisms/Banner'
import store from '../../redux/store'
import { getAllTeachers } from '../../redux/createAction'
import { connect } from 'react-redux'
import GridTeachers from '../organisms/GridTeachers'


const Teachers = ({ match, teachers }) => {
  useEffect(() => {
    store.dispatch(getAllTeachers())
  }, [match])
  return (
    <>
      < Banner
        color="third-color"
        imagen={{
          src: "https://elcomercio.pe/resizer/PiyvtKf9GFKKUYH-ffubOoiqzI0=/980x528/smart/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/IHASVKISFJHSVJN3F4DPE3GMMY.jpg",
          alt: "Banner profesores"
        }
        }
        title="Nuestros profesores"
        subtitle="Este plantel decente está altamente calificado para guiarte en tú educación"

      />
      <GridTeachers teachers={teachers} />
    </>
  )
}

const mapStateToProps = (store) => (
  {
    teachers: store.teacherReducer.teachers
  }
)

export default connect(mapStateToProps, {})(Teachers)
