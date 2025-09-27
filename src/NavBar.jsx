import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../src/css/style.css'
export default class NavBar extends Component {
  constructor() {
    super()
    this.state = {
      search: ''
    }
  }
  getInputData(e) {
    e.preventDefault();
    
    const serachedData = e.target.value;
    this.setState({search: serachedData })
  }
  postData(event) {
    event.preventDefault()
    this.props.changeSearch(this.state.search)
  }
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-dark sticky-top">
          <div className="container-fluid">
            <Link className="navbar-brand text-light fs-5 fw-bold hhh" to="/"
              onClick={() => {
                this.props.changeSeach('')
                this.setState({ search: "" })
              }}>News App</Link>
            <button className="navbar-toggler bg-light text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-3 mb-lg-0">
                <li className="nav-item">
                  <Link className=" hhh nav-link active text-light fs-5 fw-bold" aria-current="page"
                    to="/" onClick={() => {
                      this.props.changeSeach('')
                      this.setState({ search: "" })
                    }}>Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="hhh nav-link active text-light fs-5 fw-bold" aria-current="page"
                    to="/entertenment" onClick={() => {
                      this.props.changeSeach('')
                      this.setState({ search: "" })
                    }}>Entertenment</Link>
                </li>
                <li className="nav-item">
                  <Link className="hhh nav-link active text-light fs-5 fw-bold" aria-current="page"
                    to="/medical" onClick={() => {
                      this.props.changeSeach('')
                      this.setState({ search: "" })
                    }}>Medical</Link>
                </li>
                <li className="nav-item">
                  <Link className="hhh nav-link active text-light fs-5 fw-bold" aria-current="page"
                    to="/sports" onClick={() => {
                      this.props.changeSeach('')
                      this.setState({ search: "" })
                    }}>Sports</Link>
                </li>
                <li className="nav-item">
                  <Link className="hhh nav-link active text-light fs-5 fw-bold" aria-current="page"
                    to="/science" onClick={() => {
                      this.props.changeSeach('')
                      this.setState({ search: "" })
                    }}>Science</Link>
                </li>
                <li className="nav-item">
                  <Link className="hhh nav-link active text-light fs-5 fw-bold" aria-current="page"
                    to="/technology" onClick={() => {
                      this.props.changeSeach('')
                      this.setState({ search: "" })
                    }}>Technology</Link>
                </li>


                <li className="nav-item dropdown">
                  <a className=" nav-link dropdown-toggle text-light fs-5 fw-bold" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    More
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><Link className=" dropdown-item fs-3 fw-bold text-center p-3"
                      to="/eduction" onClick={() => {
                        this.props.changeSeach('')
                        this.setState({ search: "" })
                      }}>Eduction</Link></li>
                    <li><Link className=" dropdown-item fs-3 fw-bold text-center p-3"
                      to="/political" onClick={() => {
                        this.props.changeSeach('')
                        this.setState({ search: "" })
                      }}>Political</Link></li>

                    <li><Link className=" dropdown-item fs-3 fw-bold text-center p-3"
                      to="/jokes" onClick={() => {
                        this.props.changeSeach('')
                        this.setState({ search: "" })
                      }}>Jokes</Link></li>
                    <li><Link className=" dropdown-item fs-3 fw-bold text-center p-3" to="/covid-19" onClick={() => {
                      this.props.changeSeach('')
                      this.setState({ search: "" })
                    }}>Covid-19</Link></li>
                  </ul>
                </li>


                <li className="nav-item dropdown">
                  <Link className="hhh nav-link dropdown-toggle text-light fs-5 fw-bold" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Language
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><button className="dropdown-item fs-3 fw-bold text-center"
                      onClick={() => this.props.changelanguage('hi')}>Hindi</button></li>
                    <li><button className="dropdown-item fs-3 fw-bold text-center"
                      onClick={() => this.props.changelanguage('en')}>English</button></li>
                  </ul>
                </li>

              </ul>
              <form className="d-flex" role='search' onSubmit={this.postData.bind(this)}>
                <input className="form-control me-3" type="text" onChange={(e) => this.getInputData(e)} placeholder="Search" aria-label="Search" value={this.state.search} />
                <button className="Ser btn btn-outline-light fs-5 fw-bold  " type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
      </>
    )
  }
}
