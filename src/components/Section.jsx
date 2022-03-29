import React from "react";

export default function section(props) {
  return (
    <div className="container">
      <div>
        <img src={props.item.imageUrl} />
      </div>
      <div className="description-container">
        <div className="location">
          <div >
           📌{props.item.location}
            <a href={props.item.googleMapsUrl}>
              View on Google Maps
            </a>
          </div>
          <h1 className="destination-name">{props.item.title}</h1>
          <h4 className="destination-date">{props.item.startDate}</h4>
          <p  className="destination-details">{props.item.description}</p>

        </div>
      </div>
    </div>
  );
}
