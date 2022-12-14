import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Home from '../src/pages/Home';
import RSVP from '../src/pages/RSVP';
import WeddingParty from '../src/pages/WeddingParty'
import HotelandTravel from './pages/HotelandTravel';
import Nav from '../src/components/Nav'
import './index.css'
import Logo from '../src/components/Logo'

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');

  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const httpLink = createHttpLink({
  uri: '/graphql',
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
          <div>
          <Nav></Nav>
              <Routes>
                <Route exact = 'true' path = '/' element = {
                  <div>
                    < Home />
                  </div>
                }>
                </Route>
                <Route exact = 'true' path = '/RSVP' element = {
                  <div>
                    <RSVP></RSVP>
                  </div>
                }>
                </Route>
                <Route exact = 'true' path = '/HotelAndTravel' element = {
                  <div>
                    <HotelandTravel></HotelandTravel>
                  </div>
                }>
                </Route>
                <Route exact = 'true' path = '/WeddingParty' element = {
                  <div>
                    <WeddingParty></WeddingParty>
                  </div>
                }>
                </Route>
                <Route exact = 'true' path = '/Registry' element = {
                  <div>
                    <WeddingParty></WeddingParty>
                  </div>
                }>
                </Route>
              </Routes>
              <Logo></Logo>
          </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
