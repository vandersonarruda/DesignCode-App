import React from "react";
import { createStore } from "redux";
import { Provider } from "react-redux";
import AppNavigator from "./navigator/AppNavigator";

// Nesse caso foi usado o GraphQL do Contentful, mas esse recurso pode ser
// alterado pelo Banco de Dados
// No refactorar do código, a lib de GraphQL e Apollo pode ser removidas
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";

const client = new ApolloClient({
  uri: "https://graphql.contentful.com/content/v1/spaces/ldcl3ayg0mhx",
  credentials: "same-origin",
  headers: {
    Authorization: `Bearer 93f3808c25c1f5bdb95476ca8576c6eaa12b5587efb956efb242ceead7cb3840`,
  },
});

const initialState = {
  action: "",
  name: "",
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "OPEN_MENU":
      return { action: "openMenu" };
    case "CLOSE_MENU":
      return { action: "closeMenu" };
    case "UPDATE_NAME":
      return { name: action.name };
    default:
      return state;
  }
};

const store = createStore(reducer);

const App = () => (
  // A tag <ApolloProvider> pode ser removida quando remover GraphQL do app
  <ApolloProvider client={client}>
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  </ApolloProvider>
);

export default App;
