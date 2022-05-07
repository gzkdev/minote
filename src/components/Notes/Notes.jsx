import { useContext } from "react";
import NotesContext from "../../NotesContext";
import NoteItem from "./NoteItem";
import EmptyState from "../EmptyState";
import NotesContainer from "./NotesContainer";

function Notes() {
  const { notes } = useContext(NotesContext);

  // const renderedNotes = notes.keys.filter((note) =>
  //   note.title.toLowerCase().includes(searchText.toLowerCase())
  // );

  return (
    <>
      {notes ? (
        <section>
          <h1>Notes</h1>
          <NotesContainer>
            {/* {renderedNotes.length > 0
              ? renderedNotes.map((data, index) => (
                  <NoteItem
                    key={data.id}
                    note={data}
                    deleteNote={deleteNote}
                    index={index}
                    updateNote={updateNote}
                  />
                ))
              : "No notes match your search"} */}
            {Object.keys(notes).map((item) => (
              <NoteItem key={item} data={notes[item]} />
            ))}
          </NotesContainer>
        </section>
      ) : (
        <EmptyState />
      )}
    </>
  );
}

export default Notes;
