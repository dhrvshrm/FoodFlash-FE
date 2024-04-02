/* eslint-disable jsx-a11y/alt-text */
const itmes = [
  { name: "Home" },
  { name: "Products" },
  { name: "About Us" },
  { name: "Cart" },
];

export const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        backgroundColor: "lightCyan",
        border: "2px solid black",
        margin: "0.5rem",
      }}
    >
      <img
        src="https://img.freepik.com/free-psd/persian-isolated-transparent-background_191095-39702.jpg?w=740&t=st=1711897038~exp=1711897638~hmac=d3eb10a98a4ebb52842cf0b1733879fae6d3ccb9e83b36995e381bb95dc63513s"
        style={{ height: "5rem", width: "5rem", margin: "1rem 2rem" }}
      />
      <div
        style={{
          display: "flex",
          marginRight: "2rem",
          fontWeight: "700",
          cursor: "pointer",
        }}
      >
        {itmes.map((item) => (
          <div style={{ margin: "0rem 1rem" }}>{item.name}</div>
        ))}
      </div>
    </div>
  );
};
