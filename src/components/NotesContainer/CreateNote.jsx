import { useState, useContext } from "react";
import "./notes.css";
import { NoteContext } from "../NoteContext/NotesProvider";

function CreateNote(props) {
  const [, setNotes] = useContext(NoteContext);
  const [newNote, setNewNote] = useState({
    title: "",
    content: "",
    color: "" || "#4FC3F7",
    id: "",
    date: "",
    time: "",
  });

  let date = new Date();
  let currentDate = `${date.getDay()}/${date.getMonth()}/${date.getFullYear()}`;
  let time = ` ${date.toTimeString().slice(0, 5)}`;
  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
        id: `${newNote.title.slice(0, 3)}_${Math.floor(
          Math.random() * 1000 + 1
        )}`,
        date: currentDate,
        time: time,
      };
    });
  };
  const handleClick = (event) => {
    if (newNote.content === "") {
      alert("Fill Content");
      return;
    }
    if (newNote.title === "") {
      alert("Fill Title");
      return;
    }

    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });

    setNewNote({
      title: "",
      content: "",
      color: "" || "#4FC3F7",
      id: "",
    });
    event.preventDefault();
  };
  return (
    <form>
      <div className="new_note_container">
        <h2>New Note</h2>
        <div style={{ display: "flex" }}>
          <div className="note_title" style={{ flex: 1 }}>
            <input
              type="text"
              onChange={handleChange}
              placeholder="Title..."
              name="title"
              value={newNote.title}
            />
          </div>
        </div>

        <div className="note_content">
          <div>
            <textarea
              rows={5}
              onChange={handleChange}
              name="content"
              value={newNote.content}
            ></textarea>
          </div>

          <div className="color-picker">
            <input
              type="radio"
              name="color"
              value="#F06292"
              id="color1"
              onChange={handleChange}
            />
            <label
              htmlFor="color1"
              style={{ backgroundColor: "#F06292" }}
            ></label>
            <input
              type="radio"
              name="color"
              value="#BA68C8"
              id="color2"
              onChange={handleChange}
            />
            <label
              htmlFor="color2"
              style={{ backgroundColor: "#BA68C8" }}
            ></label>
            <input
              type="radio"
              name="color"
              value="#FFD54F"
              id="color3"
              onChange={handleChange}
            />
            <label
              htmlFor="color3"
              style={{ backgroundColor: "#FFD54F" }}
            ></label>
            <input
              type="radio"
              name="color"
              value="#4FC3F7"
              id="color4"
              onChange={handleChange}
            />
            <label
              htmlFor="color4"
              style={{ backgroundColor: "#4FC3F7" }}
            ></label>
            <input
              type="radio"
              name="color"
              value="#AED581"
              id="color5"
              onChange={handleChange}
            />
            <label
              htmlFor="color5"
              style={{ backgroundColor: "#AED581" }}
            ></label>
          </div>
          <button className="add-button" onClick={handleClick}>
            Add
          </button>
        </div>
      </div>
    </form>
  );
}
export default CreateNote;
