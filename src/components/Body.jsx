import { RestaurantCardContainer } from "./RestaurantCardContainer";
import Search from "./Search";

const cardData = [
  {
    name: "Sunny's Diner",
    cuisine: "American",
    rating: "4.5",
    deliveryTime: "30 minutes",
    imageUrl: "https://example.com/image1.jpg",
  },
  {
    name: "Mama Mia Pizzeria",
    cuisine: "Italian",
    rating: "4.2",
    deliveryTime: "25 minutes",
    imageUrl: "https://example.com/image2.jpg",
  },
  {
    name: "Spice Garden",
    cuisine: "Indian",
    rating: "4.8",
    deliveryTime: "40 minutes",
    imageUrl: "https://example.com/image3.jpg",
  },
  {
    name: "Tokyo Sushi House",
    cuisine: "Japanese",
    rating: "4.6",
    deliveryTime: "35 minutes",
    imageUrl: "https://example.com/image4.jpg",
  },
  {
    name: "La Petite France",
    cuisine: "French",
    rating: "4.3",
    deliveryTime: "45 minutes",
    imageUrl: "https://example.com/image5.jpg",
  },
  {
    name: "The Greek Taverna",
    cuisine: "Greek",
    rating: "4.4",
    deliveryTime: "30 minutes",
    imageUrl: "https://example.com/image6.jpg",
  },
  {
    name: "El Rancho Mexican Grill",
    cuisine: "Mexican",
    rating: "4.7",
    deliveryTime: "35 minutes",
    imageUrl: "https://example.com/image7.jpg",
  },
  {
    name: "Golden Wok",
    cuisine: "Chinese",
    rating: "4.2",
    deliveryTime: "40 minutes",
    imageUrl: "https://example.com/image8.jpg",
  },
  {
    name: "The Veggie Patch",
    cuisine: "Vegetarian",
    rating: "4.6",
    deliveryTime: "25 minutes",
    imageUrl: "https://example.com/image9.jpg",
  },
  {
    name: "BBQ Haven",
    cuisine: "Barbecue",
    rating: "4.8",
    deliveryTime: "50 minutes",
    imageUrl: "https://example.com/image10.jpg",
  },
  {
    name: "Seafood Cove",
    cuisine: "Seafood",
    rating: "4.5",
    deliveryTime: "40 minutes",
    imageUrl: "https://example.com/image11.jpg",
  },
  {
    name: "Zen Garden",
    cuisine: "Asian Fusion",
    rating: "4.3",
    deliveryTime: "35 minutes",
    imageUrl: "https://example.com/image12.jpg",
  },
];

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
      <RestaurantCardContainer data={cardData} />
    </div>
  );
}
