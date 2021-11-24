// create your App component here
import react from "react";
import { useState, useEffect } from "react";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [image, setImage] = useState("");

  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((res) => res.json())
      .then((data) => {
        setImage(data.message);
        // console.log(data.message);
        setIsLoaded(true);
      });
  }, []);
  if (!isLoaded) return <p>Loading...</p>;
  return (
    <div>
      <img src={image} alt="A Random Dog" />
    </div>
  );
}

export default App;
