/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

export class Newsitem extends Component {
    
  render() {
    let {title, description, imgUrl, newsUrl} = this.props;
    return (
      <div className="my-3">
        <div className="card mb-3" style={{width: "540px"}}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={imgUrl} className="img-fluid rounded-start" alt="..." />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">
                  {description}
                </p>
                <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Go somewhere</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Newsitem;
