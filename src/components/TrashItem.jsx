import NoteItemStyled from "./Notes/NoteItemStyled";

export default function TrashItem({ data, restoreNote, deleteNote }) {
  const handleDeleteNote = () => {
    deleteNote(data.id);
  };

  const handleRestoreNote = () => {
    restoreNote(data);
    deleteNote(data.id);
  };

  return (
    <NoteItemStyled>
      <div>
        <div>
          <h4>{data.title}</h4>
          {data.content &&
            (data.content.length > 128 ? (
              <p>{data.content.slice(0, 128)}...</p>
            ) : (
              <p>{data.content}</p>
            ))}
          <span>{data.date}</span>
        </div>
        <div>
          <button onClick={handleDeleteNote}>Delete</button>
          <button onClick={handleRestoreNote}>Restore</button>
        </div>
      </div>
    </NoteItemStyled>
  );
}
