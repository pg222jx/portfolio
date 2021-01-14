import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css"

class CreatePost extends Component {
    constructor(props) {
      super(props)

      this.state = {
        title: '',
        content: '',
        // likes: 0,
        date: new Date()
        // tags: []
      }

      this.onChangeTitle = this.onChangeTitle.bind(this)
      this.onChangeContent = this.onChangeContent.bind(this)
      this.onChangeDate = this.onChangeDate.bind(this)
      this.onSubmit = this.onSubmit.bind(this)
      // this.onChangeTags = this.onChangeTags.bind(this)
    }

    onChangeTitle(e) {
      this.setState({
        title: e.target.value
      })
    }

    onChangeContent(e) {
      this.setState({
        content: e.target.value
      })
    }

    onChangeDate(date) {
      this.setState({
        date: date
      })
    }

    // onChangeTags(e) {
    //   this.setState({
    //     date: e.target.value
    //   })
    // }

    onSubmit(e) {
      e.preventDefault()

      const blogPost = {
        title: this.state.title,
        content: this.state.content,
        date: this.state.date
      }
        // tags: this.state.tags

      console.log(blogPost)

      window.location = '/diary'
    }

    render() { 
        return ( 
            <header className="showcase">
            <div className="container showcase-inner">
              <h2>Create a new blogpost</h2> 
              <form onSubmit={this.onSubmit}>
                <div className="blogForm">

                  <label>Title: </label><br/>
                  <input type="text" required className="titleInput" placeholder="Enter title" value={this.state.title} onChange={this.onChangeTitle} />

                  <br/><br/>

                  <label>Content: </label><br/>
                  <textarea type="text"
                    required
                    className="contentInput"
                    placeholder="Write content..."
                    value={this.state.content}
                    onChange={this.onChangeContent} />

                  <br/><br/>

                  <label>Date: </label>
                  <div>
                    <DatePicker
                    className="dateInput"
                    selected={this.state.date}
                    onChange={this.onChangeDate} />
                  </div>

                  <br/>

                  <input type="submit" className="submitBtn" value="Submit" />
                </div>
              </form>
            </div>
          </header>
         );
    }
}
 
export default CreatePost;