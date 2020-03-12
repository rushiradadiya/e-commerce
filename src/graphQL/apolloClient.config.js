import { ApolloClient } from 'apollo-client'
import { InMemoryCache, NormalizedCacheObject } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'

const cache = new InMemoryCache()
const link = new HttpLink({
    uri: 'http://localhost:4000/'
})

const client = new ApolloClient({
    link: link,
    cache
})
export default client
