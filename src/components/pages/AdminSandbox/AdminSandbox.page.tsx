import ASToolCommands from "../../controls/AdminSandbox/ASToolCommands";
import {
  ApolloClient,
  ApolloProvider,
  HttpLink,
  InMemoryCache,
} from "@apollo/client";

const cache = new InMemoryCache();
const API_BASE_URL = "http://localhost:5000/graphql";
const httpLink = new HttpLink({
  uri: API_BASE_URL,
});

const client = new ApolloClient({
  link: httpLink,
  cache,
});

export default function AdminSandboxPage() {
  return (
    <ApolloProvider client={client}>
      <ASToolCommands />
    </ApolloProvider>
  );
}
