import React, { useEffect } from 'react'
import store from '../../redux/store'
import { getSpeciality } from '../../redux/createAction'
import { connect } from 'react-redux'
import Banner from '../organisms/Banner'

const Speciality = ({ match, speciality }) => {
  useEffect(() => {
    store.dispatch(getSpeciality(match.params.id))
  }, [match])

  return (
    <>
      {speciality &&
        <>
          <Banner
            color="dark-color"
            title={speciality.data.name}
            subtitle={speciality.data.subtitle}
            imagen={
              {
                src: "https://www.telemundo.com/sites/nbcutelemundo/files/styles/article_cover_image/public/images/article/cover/2019/03/14/universidades-para-mujeres-en-estados-unidos.jpg?itok=KvbgWXke",
                alt: speciality.data.name
              }
            }
            courseBanner
            poster={speciality.data.picture}
            information={speciality.data.information}
          />
          <main className="ed-grid lg-grid-10">
            <div className="lg-cols-7">
              <div className="course-fectures ed-grid lg-grid-3 s-border s-pxy-2 s-radius s-bg-white l-block s-shadow-bottom row-gap">
                <div>
                  <h3 className="t4"> ¿Que aprenderas?</h3>
                  <ul>
                    {speciality.data.abilities.map(a => (
                      <li key={a.id}>{a.description}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="t4" >Conocimientos previos</h3>
                  <ul>
                    {
                      speciality.data.knowledge.map(k => (
                        <li key={k.id}>{k.description}</li>
                      ))
                    }
                  </ul>
                </div>
                <div>
                  <h3 className="t4"> Nivel</h3>
                  <p>{speciality.data.level}</p>
                </div>
              </div>
              <h2>Temario de la especialidad</h2>
              <div className="s-border s-pxy-2 lg-pxy-4 s-radius s-gb-white l-block l-section s-shodow-bottom">
                {
                  speciality.data.courses.map((c, key) => (
                    <div className="course-class l-section" key={c.id}>
                      <div className="ed-grid m-grid-3">
                        <img src={c.picture} alt={c.name} />
                        <div className="m-cols-2">
                          <h3>{c.name}</h3>
                          <p>{c.information}</p>
                        </div>
                      </div>
                    </div>
                  ))
                }
              </div>
            </div>
          </main>
        </>
      }
    </>
  )
}
const mapStateToProps = (store) => (
  {
    speciality: store.specialityReducer.speciality

  }
)
export default connect(mapStateToProps, {})(Speciality)
