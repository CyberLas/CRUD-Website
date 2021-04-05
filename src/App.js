import React, {Fragment}        from 'react'
import Contador     from './components/Hooks/contador'
import Jsx          from './components/jsx'
import List         from './components/lista'
import Formulario   from './components/Hooks/formulario'
import Props        from './components/Hooks/props'
import Coments      from './components/Hooks/coments'
import Menu         from './crud/menu'

function App() {
  const Datos = {
    'nombre' : "Maria",
    'url'    : "https://via.placeholder.com/1080",
    'text'   : "Hi Carlos"
  }

  return (
    <Fragment>
    <h1>Practicando React</h1>
      <div className="container mt-2">
        <Contador/>
        <Jsx/>
        <List/>
        <Formulario/>
        <Props person="Carlos" age="1"/>
        <Props person="Augusto" age="12"/>
        <Props person="Angel" age="21"/>
        <Coments data={Datos}/>
      </div>
      <Menu/>
    </Fragment>
  );
}

export default App;
