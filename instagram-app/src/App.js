import React, { Component } from 'react';

import './App.css';
import SearchBar from './components/SearchBar/SearchBar';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      comments: {
        text: '',
        username: ''
      }
     
    }
  }

  addComment = (e) => {
    e.preventDefault();
    const thisIndex = e.target.getAttribute('index')
    //console.log(this.state.data[thisIndex].comments)
    this.state.data[thisIndex].comments.push({ text: this.state.comments.text, username: this.state.comments.username})
    this.setState({
      data: [...this.state.data ]
    })
  }

  handleChange = e => {
    //console.log(e.target.value)
    //this.state.data[0].comments.push({ text:e.target.value, username: "Billy Bob"})
    this.setState({
      data: [...this.state.data],
      comments: {
        text: e.target.value,
        username: "BillyBob"
      }
    })
  }

 handleSearch = e => {
    console.log(e.target.value)
    const newData = this.state.data.filter(function(item) {
      if (e.target.value === 'philzcoffee') {
        return item
      }
    })
    console.log(newData)
    this.setState({data: newData})
  }
 
  

  handleLikes = e => {
    const thisIndex = e.target.getAttribute('index')
    //this.state.data[thisIndex].likes = this.state.data[thisIndex].likes + 1
    console.log(e.target.getAttribute('class'))
    e.target.classList.toggle('red-heart')
      if (e.target.getAttribute('class') === 'heart red-heart') {
      this.state.data[thisIndex].likes = this.state.data[thisIndex].likes + 1
      this.setState({
        //newLikes: this.state.data[thisIndex].likes + 1,
        data: [...this.state.data]
      })
    } else {
      this.state.data[thisIndex].likes = this.state.data[thisIndex].likes - 1
      this.setState({
        //newLikes: this.state.data[thisIndex].likes + 1,
        data: [...this.state.data]
      })
    }
    
  }

  componentDidMount() {
  //const user = dummyData.map(data => data.comments)
  //console.log(user)
  //console.log(user.map(item => item))
 
   this.setState({
     data: dummyData,
     
    })
  }

  render () {
    return (
      <div className="App">
      
        <SearchBar search={this.handleSearch} />
        {this.state.data.map((data, index) => 
          
          <PostContainer className="post" 
          
          data={data} 
          key={index} 
          comments={data.comments} 
          addComment={this.addComment} 
          handleChange={this.handleChange}
          likes={data.likes}
          handleLikes={this.handleLikes}
          index={index}
      
          />
          )}
      </div>
    );
}}

export default App;