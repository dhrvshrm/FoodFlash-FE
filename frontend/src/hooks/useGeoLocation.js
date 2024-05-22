import { useState, useEffect } from "react";

export const useGeolocation = () => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  useEffect(() => {
    const successCallback = (position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    };

    const errorCallback = (error) => {
      console.log(error.message);
    };

    navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
  }, []);
  console.log({
    latitude,
    longitude,
  });

  return { latitude, longitude };
};
