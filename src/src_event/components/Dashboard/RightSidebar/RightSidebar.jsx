import React from "react";
import PrevWatched from "./PreviouslyWatched/PrevWatched";
import "./RightSIdebar.css";
function RightSidebar() {
  return (
    <div className="right__sidebar">
      <p>Previously Watched Events</p>
      <PrevWatched />
      <PrevWatched />
      <PrevWatched />
    </div>
  );
}

export default RightSidebar;
