import React, { Fragment } from 'react';
import { Button } from 'react-bootstrap';
import useCalendar from '../hooks/useCalendar';
import "../style/Calendar.css";

const Calendar = () => {
  const { calendarRows, selectedDate, todayFormatted, daysShort, monthNames, getNextMonth, getPrevMonth } = useCalendar();

  const dateClickHandler = date => {
    console.log(date);
  }

  return(
    <Fragment>
      <p>Mes Seleccionado: {`${monthNames[selectedDate.getMonth()]} - ${selectedDate.getFullYear()}`}</p>
      <table className="table">
        <thead>
          <tr>
            {daysShort.map(day => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {
            Object.values(calendarRows).map(cols => {
              return <tr key={cols[0].date}>
                {cols.map(col => (
                  col.date === todayFormatted
                    ? <td key={col.date} className={`${col.classes} today`} onClick={() => dateClickHandler(col.date)}>
                      {col.value}
                    </td>
                    : <td key={col.date} className={col.classes} onClick={() => dateClickHandler(col.date)}>{col.value}</td>
                ))}
              </tr>
            })
          }
        </tbody>
      </table>

      <div className="botonmes">
        <button className="bot" onClick={getPrevMonth}>Anterior</button>
        <button className="bot" onClick={getNextMonth}>Siguiente</button>
      </div>

      <div className="FechaCita">
        <label for="inputCita" className="Fcita"> Fecha de la cita:</label>
        <input type="date" id="inputCita" className="form-control" placeholder="" />
      </div>

      <div className="DescripcionCita">
        <label for="inputCita" className="Fcita"> Descripción:</label>
        <input type="text" id="inputCita" className="form-control" placeholder="" />
      </div>

      <Button className="Agregar btn-light" data-toggle="modal" data-target="#ModalCita">
           Agregar Cita
      </Button>{' '}

      <div className="modal" id="ModalCita" tabindex="-1" role="dialog">
         <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
               <div className="modalFecha">
                <p> 11 </p>
                <p> Domingo</p>
               </div>
              <img className="LogoModalC" src="../img/LogoPrincipal.png" alt="" />
              <button type="button" className="close" data-dismiss="modal" aria-label="Close" >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <p className="textoModal">
                Revisión del bebé.
                 <p className="textoModal">
                    1:30 p.m.
                 </p>
              </p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn botonModal" data-dismiss="modal">
                Aceptar
              </button>
            </div>
          </div>
        </div>
      </div>

    </Fragment>

  );
}

export default Calendar;