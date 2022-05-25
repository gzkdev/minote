const Note = () => {
    return (
        <div>Note</div>
    )
}

export default Note


// const params = useParams();
//     const noteId = params.noteid;
//     const { updateSetNote, notes, notesTrash, setNotesTrash } = useContext(NotesContext)
//     const navigate = useNavigate()
//     const data = notes[noteId];

//     const deleteNote = (noteId) => {
//         const newNotes = { ...notes };
//         setNotesTrash([...notesTrash, notes[noteId]]);
//         delete newNotes[noteId];
//         updateSetNote(newNotes);
//         navigate("/")
//     }

//     const handleSaveNote = (data) => {
//         notes[data.id] = data;
//         navigate("/")
//     }