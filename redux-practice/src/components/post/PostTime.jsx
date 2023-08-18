import React from "react";
import { parseISO, formatDistanceToNow } from "date-fns";

const PostTime = ({ timestamp }) => {
  let displayTime = "";
  let displayDuration = "";

  if (timestamp) {
    const postDate = parseISO(timestamp);
    const timePeriod = formatDistanceToNow(postDate);
    displayTime = `posted ${timePeriod} ago,`;
    displayDuration = `on ${postDate}`;
  }

  return (
    <div className=" text-xs flex flex-col items-end gap-2">
      <i>{displayTime}</i>
      <i>{displayDuration}</i>
    </div>
  );
};

export default React.memo(PostTime);
