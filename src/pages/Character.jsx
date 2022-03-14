import { useCharacter } from "../hooks/useCharacter";
import { useParams } from "react-router-dom";

export function Character() {
  const { id } = useParams();
  const { data, loading, error } = useCharacter(id);
  const character = data?.character;

  if (loading) return <p>⌛ Loading...</p>;
  if (error) return <p>🚨 Something went wrong...</p>;

  return (
    <>
      <h1>Character</h1>
      <img src={character.image} />
      <h2>{character.name}</h2>
      <h2>{character.species}</h2>
      <h2>{character.gender}</h2>
    </>
  );
}
