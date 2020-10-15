import React, { Component } from 'react';

import classes from './NewPost.css';
import axios from 'axios';
import {Redirect } from 'react-router-dom';

class NewPost extends Component {
    state = {
        title: '',
        content: '',
        author: 'Max',
        submitted : false
    };
    componentDidMount () {
        // If un isAuth => this.props.history.replace('/posts');
        console.log(this.props);
    }
    postDataHandler = () => {
      const postData = {
            title : this.state.title,
            body : this.state.content,
            author : this.state.author
        };
        axios.post('/posts', postData)
        .then(response=>{
            console.log(response);
            this.setState({submitted:true}); // by this we can't get the previous                                 render page by pressing back button of browser

          //  this.props.history.replace('/posts'); // by this we can't get the                                     previous render page by pressing back button of                                browser (work same as above)

          //this.props.history.push("/posts"); // by this we can get the previous                                 render page by pressing back button of browser
        })
    }

    render () {
        let redirect = null;
        if (this.state.submitted) {
                redirect = <Redirect to = '/posts'/>;
        }
        return (
          <div className={classes.NewPost}>
            {redirect}
             
           <h1>Add a Post</h1>
            <label>Title</label>

            <input 
                type="text" 
                value={this.state.title} 
                onChange={(event) => this.setState({title: event.target.value})} 
              />
            <label>Content</label>

            <textarea 
                 rows="4"
                 value={this.state.content} 
                 onChange={(event) => this.setState({content: event.target.value})} 
                 />
                <label>Author</label>

            <select 
                value={this.state.author} 
                onChange={(event) => this.setState({author: event.target.value})}>
                     <option value="Mr-Apple">Mr-Apple</option>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                    <option value="Alpha">Alpha</option>
                    <option value="Charlie">Charlie</option>
                    <option value="Bravo">Bravo</option>
                    <option value="Dinchak pooja">Dinchak pooja</option>
            </select>
                <button onClick = {this.postDataHandler}>Add Post</button>
            </div>
        );
    }
}

export default NewPost;