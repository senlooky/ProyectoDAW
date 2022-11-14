
import Navegation from "../component/Navegation"
import Todo from "../component/Todo"




export default function RegistroPage() {


  return (
 
    <>
    <Navegation/>
    <br/>
    <br/>
    <br/>
    <div className="todoapp stack-large">
      <h1>Registro De libros</h1>
      <form>
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            Agrega un nuevo libro
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
        />
        <h2 className="label-wrapper">
          <label htmlFor="new-todo-input" className="label__lg">
            Agrega detalles del autor
          </label>
        </h2>
        <input
          type="text"
          id="new-todo-input"
          className="input input__lg"
          name="text"
          autoComplete="off"
        />
        <button type="submit" className="btn btn__primary btn__lg">
          Agregar
        </button>
      </form>
      <div className="filters btn-group stack-exception">
        <button type="button" className="btn toggle-btn" aria-pressed="true">
          <span className="visually-hidden">Mostrar </span>
          <span>Libros</span>
          <span className="visually-hidden"> Libros</span>
        </button>
        <button type="button" className="btn toggle-btn" aria-pressed="false">
          <span className="visually-hidden">Mostrar  </span>
          <span>Deseados</span>
          <span className="visually-hidden"> Deseados</span>
        </button>
      </div>
      <h2 id="list-heading">
        Libros
      </h2>
      <ul
        role="list"
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
       <Todo name="Luz Negra" author="bonita historia" completed="true" id="todo-0"/>

      </ul>
    </div>
    
    
    </>
  )
}