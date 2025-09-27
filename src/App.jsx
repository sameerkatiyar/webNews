import React, { Component } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from './Home'
import NavBar from './NavBar'
import Footer from './Footer'
export default class App extends Component {
  constructor() {
    super()
    this.state = {
      language: 'hi',
      search: ''
    }
  }
  changelanguage = (data) => {
    this.setState({ language: data })
  }
  changeSearch = (data) => {
    this.setState({ search: data })
  }
  render() {
    return (
      <>
        <BrowserRouter>
          <NavBar changelanguage={this.changelanguage} changeSearch={this.changeSearch.bind(this)} />
          <Routes>
            <Route path="/" element={<Home query="All News" search={this.state.search}
              language={this.state.language} />} >    </Route>
            <Route path="/entertenment" element={<Home query="Entertainment" search={this.state.search} language={this.state.language} />} >    </Route>
            <Route path="/sports" element={<Home query="Sports" search={this.state.search} language={this.state.language} />} >    </Route>
            <Route path="/science" element={<Home query="Science" search={this.state.search} language={this.state.language} />} >    </Route>
            <Route path="/medical" element={<Home query="Medical" search={this.state.search} language={this.state.language} />} >    </Route>
            <Route path="/jokes" element={<Home query="Jokes" search={this.state.search} language={this.state.language} />} >    </Route>
            <Route path="/covid19" element={<Home query="Covid19" search={this.state.search} language={this.state.language} />} >    </Route>
            <Route path="/political" element={<Home query="Political" search={this.state.search} language={this.state.language} />} >    </Route>
            <Route path="/education" element={<Home query="Education" search={this.state.search} language={this.state.language} />} >    </Route>
            <Route path="/technology" element={<Home query="Technology" search={this.state.search} language={this.state.language} />} >    </Route>
          </Routes>

          <Footer />
        </BrowserRouter>
      </>
    )
  }
}
