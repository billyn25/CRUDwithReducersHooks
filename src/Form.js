import React, { useState, useContext, useEffect } from "react";
import { MyContext } from "./context.js";

export default function Form({ id }) {
  const [tarea, setTarea] = useState("");
  const [tareaStatus, setTareaStatus] = useState(false);
  const [modeEdit, setModeEdit] = useState(false);
  console.log(id);

  const { dispatch, state, checkId } = useContext(MyContext);
  const { task } = state;

  useEffect(() => {
    //si existe el id para editar, filtramos la tarea para editar
    if (id !== "") {
      let filterArray = task.filter((key, index) => index === id);
      Object.keys(filterArray).map(key =>
        setTarea(filterArray[key].NombreTarea)
      );
      setModeEdit(true);
    }
  }, [id]);

  let envio = e => {
    e.preventDefault();

    //cambiamos el status si el campo esta vacio para mostrar error
    tarea === "" ? setTareaStatus(true) : setTareaStatus(false);

    if (tarea && !modeEdit) {
      let object = {
        NombreTarea: tarea,
        status: false
      };
      dispatch({ type: "ADD", payload: object });
      setTarea("");
    }

    if (modeEdit && tarea) {
      //mandamos al app js la tarea editada y seteamos
      const object = {
        index: id,
        value: tarea
      };
      dispatch({ type: "EDIT", payload: object });
      setModeEdit(false);
      setTarea("");
      checkId("");
    }
  };

  return (
    <div className="col-4">
      {!modeEdit ? (
        <h4 className="text-center mb-3">Agregar Tarea</h4>
      ) : (
        <h4 className="text-center mb-3 text-warning">Editando Tarea</h4>
      )}
      <form onSubmit={envio}>
        <input
          value={tarea}
          type="text"
          className={
            tareaStatus ? "form-control mb-2 is-invalid" : "form-control mb-2"
          }
          placeholder="Ingrese Tarea"
          onChange={e => setTarea(e.target.value)}
        />
        <div className="invalid-feedback mb-2">Rellena la tarea</div>
        {!modeEdit ? (
          <button className="btn btn-dark btn-block mb-2" type="submit">
            Agregar
          </button>
        ) : (
          <button className="btn btn-warning btn-block mb-2" type="submit">
            Editar
          </button>
        )}
      </form>
    </div>
  );
}
