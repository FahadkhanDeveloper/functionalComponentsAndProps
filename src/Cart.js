import React from 'react'

// const Cart = (props) => {
    // through destructuring we can destructure it because props is object
    const Cart = ({image,name,joined,desc,noOfFriends}) => {
  return (

    <div className="ui card">
    <div className="image">
        <img src={image} alt="not found" />
    </div>
    <div className="content">
        <a className="header">{name}</a>
        <div className="meta">
            <span className="date">{joined}</span>
        </div>
        <div className="description">
            {desc}
        </div>
    </div>
    <div className="extra content">
        <a>
            <i className="user icon"></i>
            {noOfFriends} Friends
        </a>
    </div>

</div>
        
    //     <div className="ui card">
    //                 <div className="image">
    //                     <img src={props.image} alt="not found" />
    //                 </div>
    //                 <div className="content">
    //                     <a className="header">{props.name}</a>
    //                     <div className="meta">
    //                         <span className="date">{props.joined}</span>
    //                     </div>
    //                     <div className="description">
    //                         {props.desc}
    //                     </div>
    //                 </div>
    //                 <div className="extra content">
    //                     <a>
    //                         <i className="user icon"></i>
    //                         {props.noOfFriends} Friends
    //                     </a>
    //                 </div>

    // </div>
  )
}

export default Cart