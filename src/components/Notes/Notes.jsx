import { useContext } from "react";
import NotesContext from "../../NotesContext";
import NoteItem from "./NoteItem";
import EmptyState from "../EmptyState";
import NotesContainer from "./NotesContainer";
import { LayoutGroup } from "framer-motion";

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
          <h1>Notes</h1>
          <LayoutGroup>
            <NotesContainer>
              {renderedNotes.length > 0
                ? renderedNotes.map((id) => (
                    <NoteItem key={id} data={notes[id]} />
                  ))
                : "No notes match your search"}
            </NotesContainer>
          </LayoutGroup>
        </section>
      ) : (
        <EmptyState />
      )}
    </>
  );
}

export default Notes;
