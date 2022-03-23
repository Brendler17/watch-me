import { useEffect, useState } from "react";
import { Header } from "./Header";
import { MovieCard } from "./MovieCard";
import { api } from "../services/api";

interface MovieProps {
  imdbID: string;
  Title: string;
  Poster: string;
  Runtime: string;
  Ratings: Array<{
    Value: string;
  }>;
}

interface GenreProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface ContentProps {
  selectedGenreID: number;
  selectedGenre: GenreProps;
}

export function Content({ 
  selectedGenreID, 
  selectedGenre
}:ContentProps) {

  const [movies, setMovies] = useState<MovieProps[]>([]);

  useEffect(() => {

    api.get<MovieProps[]>(`movies/?Genre_id=${selectedGenreID}`).then(response => {
      setMovies(response.data);
    });

  }, [selectedGenreID]);

  return (
    <div className="container">
      
      <Header selectedGenre={selectedGenre} />

      <main>
        <div className="movies-list">
          {movies.map(movie => (
            <MovieCard
              key={movie.imdbID}
              title={movie.Title}
              poster={movie.Poster}
              runtime={movie.Runtime}
              rating={movie.Ratings[0].Value} />
          ))}
        </div>
      </main>
    </div>
  )
}