import React, { Component } from 'react';

import classes from './Posts.css';
import Post from '../../../Components/Post/Post';
import axios from '../../../axios';
//import {Link} from 'react-router-dom';
import {Route} from 'react-router-dom';
import FullPost from '../FullPost/FullPost';

 class AllPosts extends Component {
  state = {
    posts : []
    
  }
  componentDidMount () {
    console.log(this.props);
    axios.get('/posts')
    .then(response => {
      const posts = response.data.slice(0 ,3);
      const UpdatedPosts = posts.map(post => {
        return {
          ...post,
          author : "Mr-Apple"}
      })
      this.setState({posts : UpdatedPosts})
      console.log(UpdatedPosts);
    }).catch(error =>{
      this.setState({error:true})
    })
  }

  selectedPostIdHandler = (id) => {
 
   // this.setState({selectedPostId:id})
   this.props.history.push({pathname :'/posts/' + id});
   //this.props.location.push({'/'  + id});
 }
  render() {
    let posts = <p>Something went wrong while fetching data fom server !!!</p>
    if(!this.state.error){
      posts = this.state.posts.map(post => {
        
        return (
          //<Link to = {"/" + post.id}  key = {post.id} >
           <Post 
                key = {post.id}
                title = {post.title} 
                author = {post.author}
                clicked = {()=>this.selectedPostIdHandler(post.id)}/>
         // </Link>
        );
        })
      }
    return (
      <div>
       <section className = {classes.Posts}>
         {posts}
       </section>
       <Route path = {this.props.match.url + '/:id'}  exact component = {FullPost}/>
      </div>
    )
  }
}
export default AllPosts;