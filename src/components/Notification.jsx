import { UseNotesContext } from "../NotesContext";
import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import { NotificationStyled } from "./styled";

const Notification = () => {
  const { notification, showNotification } = UseNotesContext();

  return (
    <NotificationStyled
      data-visible={showNotification}
      data-type={notification}
    >
      {notification === "added" && (
        <>
          <FaCheckCircle />
          <span>New note added</span>
        </>
      )}
      {notification === "favorite" && (
        <>
          <FaCheckCircle />
          <span>Note added to favorites</span>
        </>
      )}
      {notification === "deleted" && (
        <>
          <FaTimesCircle />
          <span>Note was deleted</span>
        </>
      )}
      {notification === "deleted_permanent" && (
        <>
          <FaTimesCircle />
          <span>Note was deleted permanently</span>
        </>
      )}
      {notification === "deleted_favorite" && (
        <>
          <FaTimesCircle />
          <span>Note removed from favorites</span>
        </>
      )}
      {notification === "warn_favorite" && (
        <>
          <FaTimesCircle />
          <span>Note already in favorites</span>
        </>
      )}
      {notification === "restored" && (
        <>
          <FaTimesCircle />
          <span>Note was restored</span>
        </>
      )}
    </NotificationStyled>
  );
};

export default Notification;
