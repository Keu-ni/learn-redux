import React from 'react';
import CounterContainer from './containers/CounterContainer';
import { Route } from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';

function App() {
  return (
    <>
      <CounterContainer />
      <Route path="/" component={PostListPage} exact={true} />
      <Route path="/:id" component={PostPage} />
      {/* <Route path="/counter" component={CounterContainer} /> */}
    </>
  );
}

export default App;
