import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import NoteItemStyled from "./NoteItemStyled";

function NoteItem({ data }) {
  return (
    <NoteItemStyled as={motion.div} layout>
      <Link to={`note/${data.id}`}>
        <div>
          <div>
            <h4>{data.title}</h4>
            {data.content &&
              (data.content.length > 140 ? (
                <p>{data.content.slice(0, 140)}...</p>
              ) : (
                <p>{data.content}</p>
              ))}
          </div>
          <small>{data.date}</small>
        </div>
      </Link>
    </NoteItemStyled>
  );
}

export default NoteItem;
