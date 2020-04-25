import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import store from '../../redux/store'
import { getCourse } from '../../redux/createAction'
import Banner from '../organisms/Banner'
import { Link } from 'react-router-dom'

export const Course = ({ match, course }) => {
  useEffect(() => {
    store.dispatch(getCourse(match.params.id))
  }, [match])
  return (
    <>{
      course &&
      <>
        <Banner
          color="dark-color"
          title={course.name}
          subtitle={course.subtitle}
          imagen={
            {
              src: "https://www.telemundo.com/sites/nbcutelemundo/files/styles/article_cover_image/public/images/article/cover/2019/03/14/universidades-para-mujeres-en-estados-unidos.jpg?itok=KvbgWXke",
              alt: course.name
            }
          }
          courseBanner
          poster={course.picture}
          speciality={course.data.specialities[0]}
          information={course.information}
        />
        <main className="ed-grid lg-grid-10">
          <div className="lg-cols-7">
            <div className="course-fectures ed-grid lg-grid-3 s-border s-pxy-2 s-radius s-bg-white l-block s-shadow-bottom row-gap">
              <div>
                <h3 className="t4"> ¿Que aprenderas?</h3>
                <ul dangerouslySetInnerHTML={{ __html: course.you_learn }} />
              </div>
              <div>
                <h3 className="t4" >Conocimientos previos</h3>
                <ul dangerouslySetInnerHTML={{ __html: course.requirements }} />
              </div>
              <div>
                <h3 className="t4"> Nivel</h3>
                <p>{course.level}</p>
              </div>
            </div>
            <h2>Temario del curso</h2>
            <div className="s-border s-pxy-2 lg-pxy-4 s-radius s-gb-white l-block l-section s-shodow-bottom">
              {
                course.data.classes.map((cl, key) => (
                  <div className="course-class l-section" key={key}>
                    <h3 className="s-mb-0">{cl.class.title}</h3>
                    <p>{cl.class.description}</p>
                    <ul className="data-list">
                      {
                        cl.subjects.map((s, key) => (
                          <li key={key}>
                            <Link to={`/clase/${s.subject.id}`} className="color dark-color">
                              {s.subject.title}
                            </Link>
                          </li>
                        ))
                      }
                    </ul>

                  </div>
                ))
              }
            </div>
          </div>
          <div className="lg-cols-3">
            <h2 className="t3">Profesor</h2>
            <p>Beto Quiroga</p>
          </div>
        </main>
      </>
    }
    </>
  )
}
const mapStateToProps = store => (
  {
    course: store.courseReducer.course
  }
)
export default connect(mapStateToProps, {})(Course)
