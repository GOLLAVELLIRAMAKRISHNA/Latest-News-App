import img from '../../assets/img.jpg'

const Newscard = ({ title, description, url, src,publish }) => {
    return (
        <div className="card">
            <img src={src?src:img} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title?title.slice(0,50):"This is the Breaking News."}</h5>
                <p className="card-text">{description?description.slice(0,90)+"...":"This is the Breaking News."}</p>
                <p>{publish}</p>
                <a target='_Blank' href={url} className="btn btn-primary">See more</a>
            </div>
        </div>
    )
}

export default Newscard;