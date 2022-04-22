import React from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import Calendar from "dayjs/plugin/calendar";
import "./styles.css";

dayjs.extend(Calendar);

const DialogTitle = ({ date }) => (
  <div className="title">
    {dayjs(date).calendar(null, {
      sameDay: "[Сегодня]",
      lastWeek: "DD MMMM",
      sameElse: "DD MMMM YYYY",
    })}
  </div>
);

DialogTitle.propTypes = {
  date: PropTypes.string.isRequired,
};

export default DialogTitle;