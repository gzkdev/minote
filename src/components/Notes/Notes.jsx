import { useContext } from "react";
import NotesContext from "../../NotesContext";
import NoteItem from "./NoteItem";
import EmptyState from "../EmptyState";
import NotesContainer from "./NotesContainer";

function Notes() {
  const { notes, deleteNote, updateNote, searchText } =
    useContext(NotesContext);

  const renderedNotes = notes.filter((note) =>
    note.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      {notes.length > 0 ? (
        <NotesContainer>
          {renderedNotes.length > 0
            ? renderedNotes.map((data, index) => (
                <NoteItem
                  key={data.id}
                  note={data}
                  deleteNote={deleteNote}
                  index={index}
                  updateNote={updateNote}
                />
              ))
            : "No notes match your search"}
        </NotesContainer>
      ) : (
        <EmptyState />
      )}
    </>
  );
}

export default Notes;
