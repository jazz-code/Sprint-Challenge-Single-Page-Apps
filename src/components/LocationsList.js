import React, { useEffect, useState } from "react";
import LocationCard from "./LocationCard";
import axios from "axios";

export default function LocationsList() {
  const [location, setlocation] = useState([]);

  useEffect(() => {
    axios.get("https://rickandmortyapi.com/api/location").then(res => {
      // setlocation(res.data.results);
      const location = res.data.results;
      setlocation(location);
      console.log(location);
    });
  }, []);

  return (
    <section className="">
      {location.map(location => (
        <LocationCard
          key={location.id}
          name={location.name}
          type={location.type}
          dimension={location.dimension}
          residents={location.residents.length}
        />
      ))}
    </section>
  );
}
