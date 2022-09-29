import { createContext } from 'react';
import { useNavigate } from 'react-router-dom';

export const MenuContext = createContext();

export function MenuContextProvider({ children }) {
  const navigate = useNavigate();

  function handleMovies() {
    navigate('/');
    document.title = 'Star Wars | Movies';
  }

  function handlePersons() {
    navigate('/characters');
    document.title = 'Star Wars | Characters';
  }

  function handlePlanets() {
    navigate('/planets');
    document.title = 'Star Wars | Planets';
  }

  function handleStarships() {
    navigate('/starships');
    document.title = 'Star Wars | Starships';
  }

  function handleVehicles() {
    navigate('/vehicles');
    document.title = 'Star Wars | Vehicles';
  }

  function handleGitHub() {
    window.open('https://github.com/wendreslucas', '_blank');
  }

  function handleLinkedin() {
    window.open('https://www.linkedin.com/in/wendres-lucas/', '_blank');
  }

  return (
    <MenuContext.Provider
      value={{
        handleMovies,
        handlePersons,
        handlePlanets,
        handleStarships,
        handleVehicles,
        handleGitHub,
        handleLinkedin,
      }}
    >
      {children}
    </MenuContext.Provider>
  );
}
