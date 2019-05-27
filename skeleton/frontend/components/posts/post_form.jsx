import React from 'react';
import { withRouter } from 'react-router-dom';

class PostForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = this.props.post;
  }
 
  update(field) {
    return e => {
      this.setState({ [field]: e.target.value });
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.action(this.state);
  }

  render () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        
        <label>Title: </label>
        <input type="text" value={this.state.title} onChange={this.update('title')}></input>

        <label>Body: </label>
        <textarea value={this.state.body} onChange={this.update('body')}></textarea>

        <input type="submit" value={this.props.formType} />
        </form>

      </div>
    );
  }
}

export default PostForm;
