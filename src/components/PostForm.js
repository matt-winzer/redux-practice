import React, { Component } from 'react'

class PostForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      body: ''
    }
  }

  handleChange = (e) => this.setState({ [e.target.name]: e.target.value })

  render() {
    return (
      <div>
        <h1>Add Post</h1>
        <form>
          <div>
            <label htmlFor="title">Title: </label><br/>
            <input id="title" type="text" name="title" value={this.state.title} onChange={this.handleChange} />
          </div>
          <div>
            <label htmlFor="body">Body: </label><br/>
            <input id="body" type="textarea" name="body" value={this.state.body} onChange={this.handleChange} />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    )
  }
}

export default PostForm