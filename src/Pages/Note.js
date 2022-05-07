// import { useContext } from "react"
import { useParams } from "react-router-dom"
// import NotesContext from "../NotesContext";

export default function Note() {
    // const {} = useContext(NotesContext)
    const params = useParams();
    const noteId = params.noteid;
    return (
        <div>{noteId}</div>
    )
}
