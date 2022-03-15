import { useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";

const GET_CHARACTER_LOCATIONS = gql`
  query GetCharacterLocations($name: String!) {
    characters(filter: { name: $name }) {
      results {
        location {
          name
        }
      }
    }
  }
`;

export function Search() {
  const [name, setName] = useState("");

  const [getLocations, { called, data, loading, error }] = useLazyQuery(
    GET_CHARACTER_LOCATIONS,
    {
      variables: {
        name,
      },
    }
  );

  console.log(called, data, loading, error);

  const locations = data?.characters?.results;

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={() => getLocations()}>Search</button>

      {loading && <p>Loading...</p>}
      {error && <p>No results found.</p>}
      {locations &&
        locations.map((character, i) => {
          return <p key={i}>{character.location.name}</p>;
        })}
    </div>
  );
}
