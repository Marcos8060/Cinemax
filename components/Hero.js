import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllTrending } from "@/redux/features/slices";

const Hero = () => {
  const dispatch = useDispatch();
  const [movie, setMovie] = useState([]);
  const { trending } = useSelector(({ movies }) => movies);
  console.log("TRENDING ", trending);

  const fetchTrending = async() =>{
    await dispatch(getAllTrending());
  }

  useEffect(() => {
    fetchTrending();

    setMovie(trending[Math.floor(Math.random() * trending.length - 1)]);
  }, []);
  return (
    <div class="relative h-screen bg-gray-300">
      <img
        class="absolute inset-0 w-full h-full object-cover"
        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
        alt="Image"
      />
      <div class="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-75"></div>
      <div class="absolute bottom-1/4 w-1/2 left-0 right-0 p-8 text-white">
        <h1 class="text-4xl font-black uppercase">{movie?.original_title || movie?.title}</h1>
        <p class="">{movie?.overview}</p>
      </div>
      <div className="fade__bottom"></div>
    </div>
  );
};

export default Hero;
