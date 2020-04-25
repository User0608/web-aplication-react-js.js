import React, { useEffect } from 'react'
import Vimeo from '@u-wave/react-vimeo'
import store from '../../redux/store'
import { getClass, getCourse } from '../../redux/createAction'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
const Clase = ({ match, clase, course }) => {

  useEffect(() => {
    store.dispatch(getCourse(1))
    store.dispatch(getClass(123))
  }, [match])

  return (

    <div className="class-page-container background dark-color s-pxy-4">
      {(clase && course) &&
        <div className="ed-grid lg-grid-12">
          <div className="lg-cols-8">
            <div>
              <Vimeo
                video={clase.video}
                width={780}
              />
            </div>
            <div>
              <h1 className="t3 color accent-color s-mb-0">{clase.name}</h1>
              <span className="color light-color">{course.name}</span>
            </div>
          </div>
          <div className="lg-cols-4">
            <div className="t3 color">
              <h2 className="color light-color">Temario del curso</h2>
              <ul className="data-list">
                {
                  course.data.classes.map((cl, key) => (
                    <div className="course-class l-section" key={key}>
                      <h3 className="s-mb-0">{cl.class.title}</h3>
                      <ul className="data-list">
                        {
                          cl.subjects.map((s, key) => (
                            <li key={key}>
                              <Link to={`/clase/${s.subject.id}`} className="color light-color">
                                {s.subject.title}
                              </Link>
                            </li>
                          ))
                        }
                      </ul>

                    </div>
                  ))
                }
              </ul>
            </div>

          </div>
        </div>
      }
    </div>

  )
}
const mapStateToProps = state => (
  {
    clase: state.classReducer.clase,
    course: state.courseReducer.course
  }
)

export default connect(mapStateToProps, {})(Clase)
