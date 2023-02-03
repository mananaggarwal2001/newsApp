import React, { Component } from 'react'


export class Newsitem extends Component {

    render() {
        let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
        return (
            <div className="card my-3">
                <img src={!imageUrl ? 'https://www.reuters.com/resizer/CCuc2gyUk1R0tcS6_ctDWrNDpjI=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/JC2DND4M55PR3POEE5DKTOPINM.jpg' : imageUrl} className="card-img-top" alt="..." />
                <span class="position-absolute top-0 translate-middle badge rounded-pill bg-danger" style={{zIndex:1, left:'90%'}}>
                    {source}
                </span>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p class="card-text my-3"><small class="text-muted"><strong>By {!author ? 'unknown' : author} on {new Date(date).toGMTString()}</strong></small></p>
                    <a href={newsUrl} target='_blank' rel='noreferrer' className="btn btn-dark btn-sm">Read More</a>
                </div>
            </div>
        )
    }
}

export default Newsitem