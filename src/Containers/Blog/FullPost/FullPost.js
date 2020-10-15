import React,{ Component} from 'react';

import classes from './FullPost.css';
import axios from 'axios';

class FullPost extends Component {
   state = {
     loadedPost : null
   }
  componentDidMount () {
    console.log(this.props);
    this.FullPostLoader();
    }

    componentDidUpdate () {
      this.FullPostLoader();
    }
     
  FullPostLoader () {
    if(this.props.match.params.id){
      if(!this.state.loadedPost || 
     (this.state.loadedPost && this.state.loadedPost.id !==          +this.props.match.params.id)){
        axios.get('/posts/' + this.props.match.params.id)
        .then(response => {
         this.setState({loadedPost:response.data});
       })}}
  }

  deleteFullPostHandler = () => {
    axios.delete('/posts/' + this.props.match.params.id)
    .then(response => {
      console.log(response);
    })
  }
  render () {
    let post = <p style={{textAlign:"center"}}> Please select a Post! </p>;
    if(this.props.match.params.id){
       post = <p style={{textAlign:"center"}}> Loading... </p>;
    }
  
      if(this.state.loadedPost) {
        post = ( 
            <div className = {classes.FullPost}>
              
                <h1>{this.state.loadedPost.title}</h1>
                <p>{this.state.loadedPost.body}</p>
                <div className={classes.Edit}>
                    <button onClick = {this.deleteFullPostHandler}             className="Delete">Delete</button>
                </div>
            </div>
        );
      }
     return post;
  }
}

export default FullPost;
