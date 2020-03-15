/* eslint-disable import/prefer-default-export */
import gql from 'graphql-tag';

export const GENERATE_TOKEN = gql`
mutation generateToken(
  $firstName: String!
  $lastName: String!
  $email: String!
  $phone: String!
) {
  generateToken(
    generateTokenInput: {
      firstName: $firstName
      lastName: $lastName
      email: $email
      phone: $phone
    }
  )
}
`;

export const SEND_REPORT = gql`
mutation newReport(
  $name: String!
  $address: String!
  $place: String!
  $description: String!
  $photo: String!
) {
  newReport(
    newReportInput: {
      name: $name
      address: $address
      place: $place
      description: $description
      photo: $photo
    }
  )
}
`;
