import { useState, useEffect } from 'react';
import { SideBar } from './components/SideBar';
import { Content } from './components/Content';
import { api } from './services/api'

import './styles/global.scss';
import './styles/sidebar.scss';
import './styles/content.scss';

interface GenreProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export function App() {

  const [selectedGenreID, setSelectedGenreID] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState<GenreProps>({} as GenreProps);

  useEffect(() => {

    api.get<GenreProps>(`genres/${selectedGenreID}`).then(response => {
      setSelectedGenre(response.data);
    });

  }, [selectedGenreID]);

  function handleClickButton(id: number) {
    setSelectedGenreID(id);
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'row' }}>
      <SideBar selectedGenreID={selectedGenreID} handleClickButton={handleClickButton}/>
      <Content selectedGenreID={selectedGenreID} selectedGenre={selectedGenre}/>
    </div>
  )
}