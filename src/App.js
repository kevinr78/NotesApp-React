import "./App.css";
import NoteContainer from "./components/NotesContainer/NoteContainer";
import { NoteProvider } from "./components/NoteContext/NotesProvider";

function App() {
  return (
    <NoteProvider>
      <header>Notes App</header>
      <section className="container">
        <NoteContainer />
      </section>
    </NoteProvider>
  );
}

export default App;
