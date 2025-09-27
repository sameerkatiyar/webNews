import React, { Component } from 'react'
import '../src/css/style.css'
import { Link } from 'react-router-dom'

export default class News extends Component {


  render() {
    return (
      <div className='col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12'>
        <div className="card" >
          <img src={this.props.pic} height="150px" className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title">{this.props.title.slice(0, 50) + "..."}</h5>
            <br />

            <p className="card-text">{this.props.description.slice(0, 200) + "..."}</p>
            <div className="More d-flex justify-content-between">
              <p align="right">{this.props.source}</p>
              <p align="right">{new Date(this.props.date).toLocaleDateString()}</p>
            </div>
            <Link to={this.props.url} className="Read btn btn-primary w-100">Read More..</Link>
          </div>
        </div>
      </div>
    )
  }
}
