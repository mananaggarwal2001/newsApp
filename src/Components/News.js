import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
export class News extends Component {
    // static defaultProps = {
    //     country: 'in',
    //     pageSize: 5

    // }

    // static PropTypes = {
    //     country: PropTypes.string,
    //     pageSize: PropTypes.number,
    // }

    constructor(props) {

        super(props);
        console.log("Hello this is the constructor from the news componenet in the react js");
        this.state = {
            articles: [],
            loading: false,
            page: 1,
            totalResults: 0
        }
        document.title = ` NewsMonkey- ${this.props.categories.charAt(0).toUpperCase() + this.props.categories.slice(1)}`
    }

    async updateNews() {
        // after the render method has run the component did mount will run and do the process which is gvien in the rendered method.
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.categories}&apiKey=fd5b69691fc948e9864e8c62c2751b06&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        this.setState({
            loading: true
        })
        let data = await fetch(url)
        let parsedData = await data.json()
        console.log(parsedData)
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            pageSize: this.props.pageSize,
            loading: false
        })
    }
    async componentDidMount() {
        this.updateNews();

    }
    // handleNextClick = async () => {
    //     if (this.state.page > Math.ceil(this.state.totalResults / this.state.pageSize)) {

    //     } else {

    //         this.setState({
    //             page: this.state.page + 1
    //         })
    //         this.updateNews()
    //     }
    // }
    // handlePreviousClick = async () => {
    //     this.setState({
    //         page: this.state.page - 1
    //     })
    //     this.updateNews();
    // }

    fetchMoreData = async () => {
        // a fake async api call like which sends
        // 20 more records in 1.5 secs
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.categories}&apiKey=fd5b69691fc948e9864e8c62c2751b06&page=${this.state.page}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url)
        let parsedData = await data.json()
        console.log(parsedData)
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults,
            pageSize: this.props.pageSize,
            page: this.state.page + 1
        })
        console.log(this.state.articles.length)
    };
    render() {
        return (
            <>
                <h2 className='my-3 text-center text-lg-left'>NewsMonkey - Top {this.props.categories.charAt(0).toUpperCase() + this.props.categories.slice(1)} HeadLines</h2>


                {this.state.loading && <Spinner />}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                >
                {console.log(this.state.articles.length)}
                    <div className="container">
                        <div className="row">
                            {this.state.articles.map((element) => {
                                return <div className="col-md-4 my-3" key={element.url}>

                                    <Newsitem title={`${element.title ? element.title.slice(0, 44) : ''}...`} description={`${element.description ? element.description.slice(0, 44) : ''}...`} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
                {/* <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handlePreviousClick}><strong>&larr; Previous</strong></button>
                    <button disabled={this.state.page > Math.ceil(this.state.totalResults / this.state.pageSize)} className="btn btn-dark" onClick={this.handleNextClick}><strong>next &rarr;</strong></button>
                </div> */}
            </>
        )
    }
}

export default News