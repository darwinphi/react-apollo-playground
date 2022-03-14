import { useCharacters } from "../hooks/useCharacters";

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
            <h1>{character.name}</h1>
            <img src={character.image} />
          </div>
        );
      })}
    </>
  );
}
