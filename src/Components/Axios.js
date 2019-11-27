import React, { Component } from "react";
import axios from "axios";

class Axios extends Component {
  state = {
    posts: []
  };

  handleChange = e => {
    const value = e.target.value;
    console.log(value);
  };

  componentDidMount() {
    axios.get("https://api.github.com/users/piotrn-87/repos").then(res => {
      this.setState({
        posts: res.data.slice(0, 20)
      });
      console.log(res);
    });
  }

  render() {
    const { posts } = this.state;
    const postList = posts.length ? (
      posts.map(post => {
        return (
          <div className="post card" key={post.id}>
            <div className="card-content">
              <span className="card-title">{post.name}</span>
              <p>{post.full_name}</p>
            </div>
          </div>
        );
      })
    ) : (
      <div className="center" No post left></div>
    );
    return <div>{postList}</div>;
  }
}

export default Axios;
