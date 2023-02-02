import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';

export class News extends Component {

    constructor() {

        super();
        console.log("Hello this is the constructor from the news componenet in the react js");
        this.state = {
            articles: [],
            loading: false,
            page: 1,
        }
    }
    async componentDidMount() {
        // after the render method has run the component did mount will run and do the process which is gvien in the rendered method.
        console.log("The component did mount is running and this will run after the render method has rendered in the given number")
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4d50ef7942b1466c953b94e10c10a1a5&page=1&pageSize=${this.props.pageSize}`;
        this.setState({
            loading: true
        })
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            pageSize: this.props.pageSize,
            loading: false
        })

    }
    handleNextClick = async () => {
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / this.state.pageSize)) {

        } else {

            console.log("The next button is handled")
            let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4d50ef7942b1466c953b94e10c10a1a5&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({ loading: true })
            let data = await fetch(url)
            let parsedData = await data.json()
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false
            })
        }
    }
    handlePreviousClick = async () => {
        console.log("The preivous button is handled")
        let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=4d50ef7942b1466c953b94e10c10a1a5&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({
            loading: true
        })
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        })
    }
    render() {
        console.log("Render method is running")
        return (
            <div className='container'>
                <h2 className='my-3 text-center text-lg-left'>NewsMonkey- Top Headlines</h2>
                {this.state.loading && <Spinner />}
                <div className="container row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        return <div className="col-md-4 my-3" key={element.url}>

                            <Newsitem title={`${element.title ? element.title.slice(0, 44) : ''}...`} description={`${element.description ? element.description.slice(0, 44) : ''}...`} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; Previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.state.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}>next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News