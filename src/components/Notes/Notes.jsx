import { useContext } from "react";
import NotesContext from "../../NotesContext";
import NoteItem from "./NoteItem";
import EmptyState from "../EmptyState";
import NotesContainer from "./NotesContainer";

function Notes() {
  const { notes, searchText, notesArrangement } = useContext(NotesContext);
  let NOTE_IDs = Object.keys(notes);
  let reversed_NOTE_IDs = Object.keys(notes).reverse();
  const renderedNotes = (
    notesArrangement ? reversed_NOTE_IDs : NOTE_IDs
  ).filter((note) =>
    notes[note].title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      {NOTE_IDs.length ? (
        <section>
          <NotesContainer>
            {renderedNotes.length > 0
              ? renderedNotes.map((id) => (
                  <NoteItem key={id} data={notes[id]} />
                ))
              : "No notes match your search"}
          </NotesContainer>
        </section>
      ) : (
        <EmptyState />
      )}
    </>
  );
}

export default Notes;
