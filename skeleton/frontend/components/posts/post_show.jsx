import React from 'react';
import { Link } from 'react-router-dom';

class PostShow extends React.Component {

  componentDidMount() {
    this.props.fetchPost(this.props.match.params.postId);
  }

  render () {
    return (
      <div>
        <h1>{this.props.post.title}</h1>
        <h2>{this.props.post.body}</h2>
        <Link to='/'>Index</Link>
      </div>
    );
  }
}

export default PostShow;
