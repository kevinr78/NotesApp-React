import "./search.css";
import { useContext } from "react";
import { NoteContext } from "../NoteContext/NotesProvider";

function Notes(props) {
  const [, setNotes] = useContext(NoteContext);

  let date = new Date();
  let currentDate = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()},  ${date
    .toTimeString()
    .slice(0, 5)}`;

  const deleteNote = (e) => {
    setNotes((prevNotes) => {
      return prevNotes.filter((note) => {
        return note.id !== props.id;
      });
    });
  };

  return (
    <li
      id={props.id}
      className="note_container slide-in"
      style={{ backgroundColor: props.color }}
    >
      <div className="note_header">
        <p>{props.title} </p>
        <button onClick={deleteNote}> &#10006;</button>
      </div>
      <div>
        <hr />
        <p>{props.content}</p>
        <p className="date_box">{currentDate}</p>
      </div>
    </li>
  );
}
export default Notes;
