import { RestaurantCardContainer } from "./RestaurantCardContainer";
import Search from "./Search";

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
      <Search />
      <RestaurantCardContainer />
    </div>
  );
}
