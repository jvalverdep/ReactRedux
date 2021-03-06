import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise'

import reducers from './reducers';
import PostsIndex from './components/posts_index';
import PostsNew from './components/posts_new';
import NotMatch from './components/no_match';
import PostsShow from './components/posts_show';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path="/posts/new" component={PostsNew} />
          <Route exact path="/posts/:id" component={PostsShow} />
          <Route exact path="/" component={PostsIndex}/>
          <Route component={ NotMatch } />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));


//Balsamiq Mockups 3


//react-router-dom  BrowserRouter, Route, Switch  for navigation
//create Route(s) path component