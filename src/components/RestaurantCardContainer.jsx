import { RestaurantCard } from "./RestaurantCard";

export const RestaurantCardContainer = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "1rem",
        border: "2px solid black",
        padding: "1rem",
      }}
    >
      {props.data.map((restaurant, index) => (
        <RestaurantCard
          key={index}
          name={restaurant.name}
          cuisine={restaurant.cuisine}
          rating={restaurant.rating}
          deliveryTime={restaurant.deliveryTime}
        />
      ))}
    </div>
  );
};
