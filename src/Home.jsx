import React, { Component } from 'react'
import News from './News'
import InfiniteScroll from 'react-infinite-scroll-component';

export default class Home extends Component {

  constructor() {
    super()
    this.state = {
      articles: [],
      totalResults: 0,
      page: 1
    }
  }
  async getdata() {
    var response
    if (this.props.search)
      response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.search}
    &language=${this.props.language}&sortBy=popularity&pagesize=12&page=${this.state.page}&apiKey=76881a98db1a41b8a365cc749b64ed13`)
    else
      response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.query}
    &language=${this.props.language}&sortBy=popularity&pagesize=12&page=${this.state.page}&apiKey=76881a98db1a41b8a365cc749b64ed13`)


    response = await response.json()
    this.setState({
      articles: response.articles,
      totalResults: response.totalResults
    })
  }
  fetchData = async () => {
    this.setState({ page: this.state.page + 1 })
    let response = await fetch(`https://newsapi.org/v2/everything?q=${this.props.query}
    &language=${this.props.language}&sortBy=popularity&pagesize=12&page=${this.state.page}&apiKey=76881a98db1a41b8a365cc749b64ed13`)
    response = await response.json()
    if (response.articles) {
      this.setState({
        articles: this.state.articles.concat(response.articles)
      })
    }
  }
  componentDidMount() {
    this.getdata()
  }
  componentDidUpdate(oldnews) {
    if (this.props !== oldnews)
      this.getdata()
  }


  render() {
    return (
      <>
      {this.state.totalResults > 0 ?
      <>
        <h5 className="bg-dark text-light text-center fs-3 fw-bold p-1 mt-1"> {this.props.search ? this.props.search : this.props.query} News</h5>
        <div className='container'>
          <InfiniteScroll
            dataLength={this.state.articles.length} //This is important field to render the next data
            next={this.fetchData}
            hasMore={this.state.articles.length < this.state.totalResults}
            loader={
              <div className='text-center w-100' style={{height:'100px'}}>
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            </div>
            }>
            <div className='row'>
              {
                this.state.articles.map((item, index) => {
                  return <News
                    key={index}
                    title={item.title}
                    description={item.description}
                    source={item.source.name}
                    pic={item.urlToImage}
                    url={item.url}
                    date={item.publishedAt}
                  />
                })
              }
            </div>
          </InfiniteScroll>
        </div>
        </>
         : <div className='container' style={{display:"flex", justifyContent:"center", alignItems:"center", height: "100%"}}><h1>Loading......</h1></div>
        }
      </>
    )
  }
}
