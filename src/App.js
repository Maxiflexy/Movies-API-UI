import api from "./api/axiosConfig";
import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [movies, setMovies] = useState();
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState([]);

  const getMovies = async () => {
    try {
      const response = await api.get("/api/v1/movies");
      setMovies(response.data);
      console.log(response.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getMovies();
  },[])

  return <div className="App"><h1>Hello</h1></div>;
}

export default App;
