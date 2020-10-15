import React from 'react';

import classes from './Post.css';

//import {withRouter} from 'react-router-dom';
// I'm using withRouter yet ....this is for recieving the history and location etc so     we would be able to route between them if needed....can be said as a higher order      component.

const Post = (props) => (
  
  <article className = {classes.Post} onClick = {props.clicked} >
      <h1>{props.title}</h1>
     <div className = {classes.Author}> 
         {props.author}</div>

  </article>
  
);

//export default withRouter(Post);
export default Post;