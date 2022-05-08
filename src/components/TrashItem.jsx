import NoteItemStyled from "./Notes/NoteItemStyled";

export default function TrashItem({ data, restoreNote }) {
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
          <button>Delete</button>
          <button onClick={() => restoreNote(data)}>Restore</button>
        </div>
      </div>
    </NoteItemStyled>
  );
}
