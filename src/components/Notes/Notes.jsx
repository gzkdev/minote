import NoteItem from "./NoteItem";
import { EmptyState } from "../EmptyState";
import NotesContainer from "./NotesContainer";

function Notes({ notes, notesKeys, renderNotes }) {
  return (
    <>
      {notesKeys.length > 0 ? (
        <section>
          <NotesContainer>
            {renderNotes.length > 0
              ? renderNotes.map((id) => <NoteItem key={id} data={notes[id]} />)
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
