import React, { useReducer, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import DialogItem from "../DialogItem/DialogItem";
import DialogTitle from "../DialogTitle/DialogTitle";
import { normalizeDialog } from "../../helpers/dialogHelper";
import reducer from "../../helpers/reducer";
import data from "../../config/data";

import "./styles.css";

const Dialog = ({ newMessage }) => {
  const dialogRef = useRef();
  const [state, dispatch] = useReducer(reducer, {
    messages: data,
  });

  useEffect(() => {
    if (newMessage) {
      dispatch({
        type: "add-message",
        payload: newMessage,
      });

      setTimeout(() => {
        dispatch({
          type: "update-status",
          payload: {
            id: newMessage.id,
            status: "readed",
          },
        });
      }, 3000);
    }
  }, [newMessage]);

  useEffect(() => {
    dialogRef.current.scrollTop = dialogRef.current.scrollHeight;
  }, [state.messages.length]);

  const onRemove = (id) => {
    dispatch({
      type: "remove-message",
      payload: id,
    });
  };

  const normalizedDialog = normalizeDialog(state.messages);

  return (
    <div className="dialog">
      <div className="overflow" ref={dialogRef}>
        {normalizedDialog.map((item) =>
          item.type === "message" ? (
            <DialogItem {...item} key={item.id} onRemove={onRemove} />
          ) : (
            <DialogTitle key={item.id} date={item.date} />
          )
        )}
      </div>
    </div>
  );
};

Dialog.propTypes = {
  newMessage: PropTypes.shape({
    id: PropTypes.number,
  }),
};

export default Dialog;