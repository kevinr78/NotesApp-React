import React, { createContext, useState } from "react";

export const NoteContext = React.createContext();

export const NoteProvider = (props) => {
  const [notes, setNotes] = useState([]);

  return (
    <NoteContext.Provider value={[notes, setNotes]}>
      {props.children}
    </NoteContext.Provider>
  );
};
