import React from "react";
import { gql, useMutation } from "@apollo/client";

const CREATE_USER = gql`
  mutation CreateUser(
    $name: String!
    $username: String!
    $email: String!
    $phone: String!
    $website: String!
    $address: AddressInput!
    $company: CompanyInput!
  ) {
    createUser(
      input: {
        name: $name
        username: $username
        email: $email
        phone: $phone
        website: $website
        address: $address
        company: $company
      }
    ) {
      name
      username
      email
    }
  }
`;

export function CreateUser() {
  const [createUser, { data, loading, error }] = useMutation(CREATE_USER, {
    variables: {
      name: "Darwin",
      username: "darwin",
      email: "darwin@email.com",
      phone: "111-222",
      website: "darwinmanalo.com",
      address: { street: "X" },
      company: { name: "X" },
    },
  });

  console.log(data, loading, error);

  return (
    <>
      <h1>Create User</h1>
      <button onClick={() => createUser()}>Save</button>
    </>
  );
}
