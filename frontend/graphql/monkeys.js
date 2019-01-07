import gql from "graphql-tag";
//get all monkeys
export const QUERY_ALL_MONKEYS = gql`
  query{
    monkeys {
      _id
      name
    }
  }
`;
//get the monkeys by _id
export const QUERY_SINGLE_MONKEY = gql`
query findMonkey($id: ID!) {
  monkey(id: $id) {
    _id
    name
    gender
    dadsweight
  }
}`;