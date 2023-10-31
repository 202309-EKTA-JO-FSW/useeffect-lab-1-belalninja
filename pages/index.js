import DogList from "../Components/DogList/DogList";
import Form from "../Components/Form/Form";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // You will need to put a state here to save all the dogs data into
  // And you will fetch the data with useEffect
  const [dogsList, setDogsList] = useState([]);
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random/3")
      .then((res) => res.json())
      .then((list) => setDogsList(list.message));
  }, []);

  function handleSubmit(num) {
    fetch(`https://dog.ceo/api/breeds/image/random/${num}`)
      .then((res) => res.json())
      .then((list) => setDogsList(list.message));
  }

  return (
    <div className="card">
      {/* When the button is clicked in the form, it should fetch the information. 
          How can we do that by utilizing useState?
          
      */}
      <Form setNumberOfDogs={handleSubmit} />
      {/* This page should receive the images array */}
      <DogList dogsList={dogsList} />
    </div>
  );
}
