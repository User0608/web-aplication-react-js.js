import React from 'react'
//valiar los datos y realizar la carga
const withLoader = (values, WrappedComponent) => { //recibe como pramatro un key, y un componente
  return class WithLoader extends React.Component {
    constructor(props) {
      super(props)
    }
    render() {
      return (
        !this.props[values] ?
          <h1 >Cargando... </h1>
          : <WrappedComponent {...this.props} />
      )
    }
  }
}

export default withLoader
