import gql from 'graphql-tag'
export const getUser = gql`
query{
  CheckLoginData(email: $email,password:$password){
    user_Id,
    email,fullName,password
  }
}
`
CheckLoginData(email: String!,password: String!){
    User()
}


query getGreeting($language: String!) {
    greeting(language: $language) {
        message
    }
}
