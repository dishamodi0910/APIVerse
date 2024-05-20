import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let {
      title,
      description,
      imageURL,
      newsURL,
      fullTitle,
      author,
      date,
      source,
    } = this.props;

    return (
      <div>
        <div className="card">
          <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill bg-dark">
            {source}
          </span>
          <img
            src={imageURL}
            className="card-img-top"
            alt="..."
            style={{ height: "200px" }}
          />
          <div className="card-body">
            <h5 title={fullTitle} className="card-title">
              {title}...
            </h5>
            <p className="card-text">{description}...</p>
            <p className="card-text my-10" style={{ height: "35px" }}>
              <small className="text-body-secondary ">
                by {!author ? "Unknown" : author} at{" "}
                {new Date(date).toGMTString()}
              </small>
            </p>

            <a
              rel="noopener"
              target="_blank"
              href={newsURL}
              className="btn btn-sm btn-xs btn-primary"
            >
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
