import React from "react";

import "./PostIt.css";

const PostCard = (props) => {
  return (
    <div className="card">
      <div className="image-container">
        <img className="image_post" src={props.img} alt="" />
      </div>
      <div>
        <div className="title_date_post">
          <h2 className="title_post">{props.title}</h2>
        </div>
        <div className="description_post">
          <p className="description">{props.text}</p>
        </div>
        <div className="category_post">
          <button className="category">{props.category}</button>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
