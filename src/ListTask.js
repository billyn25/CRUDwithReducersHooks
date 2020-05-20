import React, { useContext } from "react";
import { MyContext } from "./context.js";

function ListTask() {
  const { dispatch, state, checkId } = useContext(MyContext);

  const { task } = state;

  let clickEdit = i => {
    checkId(i);
  };

  return (
    <div className="col-8">
      <h4 className="text-center mb-3">Lista de Tareas</h4>
      {task.length > 0 ? (
        <ul className="list-group">
          {Object.keys(task).map((key, index) => (
            <li className="list-group-item" key={index}>
              <span
                onClick={() => dispatch({ type: "COMPLETE", payload: index })}
                style={{
                  textDecoration: state.task[key].status
                    ? "line-through"
                    : "none"
                }}
                className={task[key].status ? "lead text-danger" : "lead"}
              >
                {task[key].NombreTarea}
              </span>
              <button
                onClick={() => dispatch({ type: "DELETE", payload: index })}
                className="btn btn-sm btn-danger float-right mx-2"
              >
                Eliminar
              </button>
              <button
                onClick={() => clickEdit(index)}
                className="btn btn-sm btn-warning float-right"
              >
                Editar
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <h5 className="text-center text-danger">No hay tareas</h5>
      )}
    </div>
  );
}

export default ListTask;
