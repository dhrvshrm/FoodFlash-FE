import React from "react";

function UserOffline() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "1rem",
        padding: "1rem",
      }}
    >
      <div
        style={{
          color: "red",
          textAlign: "center",
          fontSize: "1.5rem",
          margin: "1rem",
        }}
      >
        You are offline. Please check your internet connection.
      </div>
    </div>
  );
}

export default UserOffline;
