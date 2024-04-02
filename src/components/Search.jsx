export default function Search() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "lightCyan",
        border: "2px solid black",
      }}
    >
      <input
        type="text"
        placeholder="Search..."
        style={{
          height: "2rem",
          margin: "1rem 2rem",
          width: "20rem",
          borderRadius: "1rem",
          paddingLeft: "0.5rem",
        }}
      />
      <button
        style={{
          height: "2rem",
          margin: "1rem 2rem",
          width: "5rem",
          borderRadius: "1rem",
          backgroundColor: "lightGreen",
          cursor: "pointer",
        }}
      >
        Search
      </button>
    </div>
  );
}
