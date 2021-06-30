import { useContext } from "react";
import CreateNote from "./CreateNote";
import "./search.css";
import Notes from "./Notes";
import { NoteContext } from "../NoteContext/NotesProvider";
import Search from "./Search";

function NoteContainer() {
  const [notes] = useContext(NoteContext);

  const searchNotes = (value) => {
    let li = document.getElementsByTagName("li");

    for (let i = 0; i < li.length; i++) {
      let item = li[i].getElementsByTagName("div")[0].firstChild;
      if (item.textContent.toLowerCase().indexOf(value) > -1) {
        li[i].style.display = "";
      } else {
        li[i].style.display = "none";
      }
    }
  };
  return (
    <div>
      <div>
        <CreateNote />
      </div>
      <div className="notes_container">
        <h2>My Notes</h2>
        <div className="">
          <Search onSearch={searchNotes} />
        </div>
        <ul id="notes_list">
          {notes.length === 0 ? (
            <p className="notes_text"> No Notes To Show &#10060;</p>
          ) : (
            notes.map((note, index) => {
              return (
                <Notes
                  title={note.title}
                  content={note.content}
                  color={note.color}
                  key={note.id}
                  id={note.id}
                />
              );
            })
          )}
        </ul>
      </div>
    </div>
  );
}
export default NoteContainer;
