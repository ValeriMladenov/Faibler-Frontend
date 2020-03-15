/* eslint-disable import/prefer-default-export */
import gql from 'graphql-tag';

export const GETALLREGIONS = gql`
{
  getAllRegions{
    id
    name
  }
}
`;
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
  $region: String!
  $description: String!
  $photo: String!
) {
  newReport(
    newReportInput: {
      name: $name
      address: $address
      region: $region
      description: $description
      photo: $photo
    }
  )
}
`;
