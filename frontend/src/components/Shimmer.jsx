import React from "react";

export default function Shimmer({ count }) {
  const shimmerItems = Array.from({ length: count }, (_, index) => (
    <div
      key={index}
      style={{
        width: "18rem",
        cursor: "pointer",
        display: "flex",
        flexDirection: "column",
        padding: "1.5rem 1.5rem 1rem 1.5rem",
        height: "21rem",
      }}
    >
      <div
        style={{
          height: "12rem",
          width: "17rem",
          borderRadius: "1rem",
          alignSelf: "center",
          backgroundColor: "lightgray",
        }}
      />
      <div
        style={{
          marginTop: "1.2rem",
          marginLeft: "1rem",
        }}
      >
        <div
          style={{
            backgroundColor: "lightgray",
            borderRadius: "1rem",
            height: "1.35rem",
            width: "13rem",
          }}
        />
        <div
          style={{
            backgroundColor: "lightgray",
            borderRadius: "0.5rem",
            height: "1.1rem",
            width: "10rem",
            marginTop: "1.2rem",
          }}
        />
        <div
          style={{
            backgroundColor: "lightgray",
            borderRadius: "0.5rem",
            height: "1.1rem",
            width: "4rem",
            marginTop: "0.75rem",
          }}
        />
        <div
          style={{
            backgroundColor: "lightGray",
            borderRadius: "0.5rem",
            height: "1.1rem",
            width: "6.5rem",
            marginTop: "0.75rem",
          }}
        />
      </div>
    </div>
  ));

  return <>{shimmerItems}</>;
}
