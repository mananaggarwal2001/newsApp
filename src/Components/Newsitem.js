import React  from 'react'


const NewsItem = (props) => {
    let { title, description, imageUrl, newsUrl, author, date, source } = props;

    let NewsItemCss= {
        background: `${props.darkMode==='dark'? 'black':'white'}`,
    }
    return (
        <div className="card my-3" style={{ borderColor:`${props.darkMode==='dark'? 'white':'black'}`,
        borderStyle:'solid',borderWidth:'3px', borderRadius:'1%'}}>
            <img src={!imageUrl ? 'https://www.reuters.com/resizer/CCuc2gyUk1R0tcS6_ctDWrNDpjI=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/JC2DND4M55PR3POEE5DKTOPINM.jpg' : imageUrl} className="card-img-top" alt="..." />


            <div style={{
                display: 'flex',
                justifyContent: 'flex-end',
                position: 'absolute',
                right: 0
            }}>
                <span class="badge rounded-pill bg-danger" style={{ zIndex: 1, left: '90%', fontSize: '0.8em' }}>
                    {source}
                </span>
            </div>
            <div className={`card-body`}  style={NewsItemCss}>
                <h5 className={`card-title ${props.darkMode==="dark"?"text-light":"text-dark"}`}>{title}</h5>
                <p className={`card-text ${props.darkMode==="dark"?"text-light":"text-dark"}`}>{description}</p>
                <p class={`card-text my-3 ${props.darkMode==="dark"?"text-light":"text-dark"}`}><small class={`${props.darkMode==="dark"?"text-light":"text-dark"}`}><strong>By {!author ? 'unknown' : author} on {new Date(date).toGMTString()}</strong></small></p>
                <a href={newsUrl} target='_blank' rel='noreferrer' className="btn btn-danger btn-sm"><strong>Read More</strong></a>
            </div>
        </div>
    )

}

export default NewsItem