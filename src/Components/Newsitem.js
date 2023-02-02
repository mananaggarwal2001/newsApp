import React, { Component } from 'react'


export class Newsitem extends Component {

    render() {
        let { title, description, imageUrl, newsUrl } = this.props;
        return (
            <div className="card my-3" style={{ width: "18rem" }}>
                <img src={!imageUrl ? 'https://www.reuters.com/resizer/CCuc2gyUk1R0tcS6_ctDWrNDpjI=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/JC2DND4M55PR3POEE5DKTOPINM.jpg' : imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <a href={newsUrl} target='_blank' rel='noreferrer' className="btn btn-dark btn-sm">Read More</a>
                </div>
            </div>
        )
    }
}

export default Newsitem