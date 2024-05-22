import { RestaurantCardContainer } from "./RestaurantCardContainer";

export default function Body() {
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
      <RestaurantCardContainer />
    </div>
  );
}
