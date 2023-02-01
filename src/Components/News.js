import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
    render() {
        return (
            <div className='container'>
                <h2 className='my-3 center mx-auto'>NewsMonkey- Top Headlines</h2>
                <div className="container row">
                    <div className="col-md-4 my-3">

                        <Newsitem title="This title" description="This is the description" />
                    </div>
                    <div className="col-md-4 my-3">

                        <Newsitem title="This title" description="This is the description" />
                    </div>
                    <div className="col-md-4 my-3">

                        <Newsitem title="This title" description="This is the description" />
                    </div>
                    <div className="col-md-4 my-3">

                        <Newsitem title="This title" description="This is the description" />
                    </div>
                    <div className="col-md-4 my-3">

                        <Newsitem title="This title" description="This is the description" />
                    </div>
                </div>
            </div>
        )
    }
}

export default News