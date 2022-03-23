import { useEffect, useState } from 'react';
import { Button } from './Button';
import { api } from '../services/api';

interface GenreProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

interface SideBarProps {
  selectedGenreID: number;
  handleClickButton: (id: number) => void;
}

export function SideBar({
  selectedGenreID,
  handleClickButton
}: SideBarProps) {

  const [genres, setGenres] = useState<GenreProps[]>([]);

  useEffect(() => {

    api.get<GenreProps[]>(`genres`).then(response => {
      setGenres(response.data);
    });

  }, []);

  return (
    <>
      <nav className="sidebar">
        <span>Watch<p>Me</p></span>

        <div className="buttons-container">
          {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => handleClickButton(genre.id)}
              selected={selectedGenreID === genre.id}
            />
          ))}
        </div>

      </nav>
    </>
  )
}