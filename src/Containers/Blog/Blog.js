import React, { Component, Suspense } from 'react';

import {Route, NavLink, Switch} from  'react-router-dom';

import classes from './Blog.css';
import Posts from './Posts/Posts';
//import NewPost from './NewPost/NewPost';
//import FullPost from './FullPost/FullPost';

const NewPosts = React.lazy(()=> import('../Blog/NewPost/NewPost'))
export default class Blog extends Component {
  state = {
    isAuth : true
  }
  render() {
    return (
      <div className = {classes.Blog}>
        <header>
          <nav>
            <ul>
              <li><NavLink 
                    to = "/posts/" 
                    exact
                    activeClassName = "my-active"
                    activeStyle={{
                      color : 'red',
                      textDecoration : 'underline'}}
                  >Post</NavLink></li>
              <li><NavLink 
                    to = {{
                    pathname : '/new-post',
                    hash : "#submit",
                    search : "?quick-submit=true"}}
                    >New Post</NavLink></li>
           </ul>
          </nav>
        </header>
       
        {/* <Route path = "/" exact render = {()=>  <h1>Home</h1> }/>
        <Route path = "/new-post"  render = {()=> <h1>Home 2</h1>}/> */}
   
        
        <Switch>
         { this.state.isAuth ? 
            <Route path = "/new-post"  render = {()=>(
              <Suspense fallback = {<div>Loading...</div>}>
                <NewPosts />
              </Suspense>
            )}/> : null
         }
         <Route path = "/posts"  component = {Posts}/>
         <Route render = {()=> <h1>Not Found</h1>}/>
         {/* <Redirect from="/" to ="/posts"/>  */}
        </Switch>
     
     </div>
    )}
}
