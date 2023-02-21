import React, { useEffect, useState } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import InfiniteScroll from 'react-infinite-scroll-component';
// eslint-disable-next-line
const News = (props) => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [Page, setPage] = useState(1)
    const [totalResults, settotalResults] = useState(0)
    const [PageSize, setPageSize] = useState(1)


    const updateNews = async () => {
        // after the render method has run the component did mount will run and do the process which is gvien in the rendered method.
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.categories}&apiKey=${props.apiKey}&page=${Page}&pageSize=${props.pageSize}`;
        props.setProgress(10)
        setLoading(true)
        let data = await fetch(url)
        props.setProgress(30)
        let parsedData = await data.json()
        props.setProgress(70)
        console.log(parsedData);
        setArticles(parsedData.articles)
        settotalResults(parsedData.totalResults);
        props.setProgress(100)
        setLoading(false)
    }
    useEffect(() => {
        document.title = ` NewsMonkey- ${props.categories.charAt(0).toUpperCase() + props.categories.slice(1)}`
        updateNews();
        // eslint-disable-next-line
    }, [])



    const fetchMoreData = async () => {
        // a fake async api call like which sends
        // 20 more records in 1.5 secs

        setPage(Page + 1);
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.categories}&apiKey=${props.apiKey}&page=${Page}&pageSize=${PageSize}`;
        let data = await fetch(url)
        setLoading(true)
        let parsedData = await data.json()
        console.log(parsedData)
        setArticles(articles.concat(parsedData.articles))
        setLoading(false)
        settotalResults(parsedData.totalResults)
        setPageSize(props.pageSize)
        // console.log(Articles.length)
    };
    const marginObject = {
        marginTop: '90px'
    }
    return (
        <>
            <h2 className=' text-center text-lg-left' style={marginObject}>NewsMonkey - Top {props.categories.charAt(0).toUpperCase() + props.categories.slice(1)} HeadLines</h2>


            {loading && <Spinner />}
            {console.log(loading)}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults.length + 1}
                loader={<Spinner />}
            >
                {console.log(articles.length - 1)}
                <div className="container">
                    <div className="row">
                        {articles.map((element) => {
                            return <div className="col-md-4 my-3" key={element.url}>

                                <Newsitem title={`${element.title ? element.title.slice(0, 44) : ''}...`} description={`${element.description ? element.description.slice(0, 44) : ''}...`} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                            </div>
                        })}
                    </div>
                </div>
            </InfiniteScroll>
            {/* <div className="container d-flex justify-content-between">
                    <button disabled={page <= 1} className="btn btn-dark" onClick={this.handlePreviousClick}><strong>&larr; Previous</strong></button>
                    <button disabled={page > Math.ceil(totalResults / pageSize)} className="btn btn-dark" onClick={this.handleNextClick}><strong>next &rarr;</strong></button>
                </div> */}
        </>
    )
}

// handleNextClick = async () => {
//     if (page > Math.ceil(totalResults / pageSize)) {

//     } else {

//         this.setState({
//             page: page + 1
//         })
//         this.updateNews()
//     }
// }
// handlePreviousClick = async () => {
//     this.setState({
//         page: page - 1
//     })
//     this.updateNews();
// }

// News.defaultProps = {
//     country: 'in',
//     pageSize: 5

// }

// News.PropTypes = {
//     country: PropTypes.string,
//     pageSize: PropTypes.number,
// }


export default News