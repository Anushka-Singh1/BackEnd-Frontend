import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    const fetchJokes = async () => {
      try {
        const response = await axios.get("/api/jokes");
        setJokes(response.data);
      } catch (error) {
        console.log(error.message);
        console.error("Error fetching jokes:", error);
      }
    };

    fetchJokes();
  }, []); 

  return (
    <>
      <h1>Hello, this is the frontend part</h1>
      <p>JOKES: {jokes.length}</p>
      {jokes.map((joke, index) => (
        <div key={joke.id}>
          <h3>{joke.title}</h3>
          <p>{joke.content}</p>
        </div>
      ))}
    </>
  );
}

export default App;
