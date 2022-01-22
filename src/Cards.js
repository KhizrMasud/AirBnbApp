import react from "react";
import './index.css'

export default function Cards (props) {
    let badgeText
    if (props.dm.openSpots === 0) {
        badgeText = "sold out"
    } else if (props.dm.location === "Online") {
        badgeText = "online"
    }
    return (
        <div className = "cards">
            <div className = "image--box">
                {badgeText && <div className="card--badge">{badgeText}</div>}
                <img src={`./${props.dm.coverImg}`} className="card--image"/>
            </div>
            
            <div className="card--stats">
                <img src="" className="card--star"/>
                <span>{props.dm.stats.rating}</span>
                <span className='gray'>({props.dm.stats.reviewCount}) • </span>
                <span className="gray">{props.dm.location}</span>
            </div>
            <p className="card--title">{props.dm.title}</p>
            <p className="card--price">  
                <span className='bold'> From ${props.dm.price}</span> / person
            </p>
        </div>
    )
}