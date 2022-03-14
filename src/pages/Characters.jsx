import { useCharacters } from "../hooks/useCharacters";
import { Link } from "react-router-dom";

export function Characters() {
  const { data, loading, error } = useCharacters();
  const characters = data?.characters.results || null;

  if (loading) return <p>⌛ Loading...</p>;
  if (error) return <p>🚨 Something went wrong...</p>;

  return (
    <>
      <h1>Characters</h1>
      {characters.map((character, i) => {
        return (
          <div key={i}>
            <Link to={`/${character.id}`}>
              <h1>{character.name}</h1>
              <img src={character.image} />
            </Link>
          </div>
        );
      })}
    </>
  );
}
