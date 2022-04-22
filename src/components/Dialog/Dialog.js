import React from "react";
import DialogItem from "../DialogItem/DialogItem";
import { normalizeDialog } from "../../helpers/dialogHelper";
import data from "../../config/data";

import "./styles.css";


const Dialog = () => {
  const normalizedDialog = normalizeDialog(data);

  return (
    <div className="dialog">
      <div className="overflow">
        {normalizedDialog.map((item) => (
          <DialogItem {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default Dialog;