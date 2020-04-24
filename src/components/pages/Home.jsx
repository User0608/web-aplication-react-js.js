import React, { useEffect } from 'react'
import Banner from '../organisms/Banner'
import store from '../../redux/store'
import { getAllPost, getAllCourses } from '../../redux/createAction'
import { connect } from 'react-redux'
import Publication from '../organisms/Publication'
import GridCourses from '../organisms/GridCourses'
export const Home = ({ posts, courses, match }) => {

  useEffect(() => {
    store.dispatch(getAllPost())
    store.dispatch(getAllCourses())
  }, [match])

  return (
    <>
      <Banner
        imagen="https://www.telemundo.com/sites/nbcutelemundo/files/styles/article_cover_image/public/images/article/cover/2019/03/14/universidades-para-mujeres-en-estados-unidos.jpg?itok=KvbgWXke"
        color="dark-color"
        title="Bienvenido a la experiencia más increible de educacion online"
        subtitle="Nuestro equipo ha desarrollado esta plataforma pensando en ti. Sabemos que estás buscando contenido de calidad. Aquí lo encontrarás"
        poster="https://drupal.ed.team/sites/default/files/imagenes-cdn-edteam/2020-04/Untitled.png"
        home
      />
      <div className="l-block ed-grid">
        <h3>Nuevos cursos</h3>
        {
          courses &&
          <GridCourses
            courses={courses.slice(0, 4)}
          />
        }

      </div>

      <main className="ed-grid m-grid-3">
        <div className="l-section m-cols-2">
          <h2>Ultimas publicaciones</h2>
          {
            posts ?
              <div>
                {
                  posts.map(post => (
                    <Publication
                      key={post.id}
                      title={post.title}
                      fecha={post.fecha}
                      content={post.content}
                      author={post.author}
                    />
                  ))
                }
              </div>
              :
              <p>No hay publicaciones</p>

          }
        </div>
        <div>
          <h3>Lista de categorías</h3>
          <ul className="data-list">
            <li>React.js</li>
            <li>Diseño web</li>
            <li>Programacion desde cero</li>
            <li>HTML</li>
            <li>Css y sass</li>
            <li>Php y laravel</li>
            <li>Django</li>
            <li>View</li>
            <li>Angular</li>
            <li>React Native</li>
            <li>Go</li>
            <li>Rubi</li>

          </ul>
        </div>
      </main>
    </>
  )
}

const mapStateToProps = store => (
  {
    posts: store.postReducer.posts,
    courses: store.courseReducer.courses
  }
)


export default connect(mapStateToProps, {})(Home)
