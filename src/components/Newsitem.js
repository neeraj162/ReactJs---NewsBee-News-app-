/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

export class Newsitem extends Component {

    render() {
        let { title, description, imgUrl, newsUrl } = this.props;
        return (
            <div className="my-3">
                <div className="card mb-3" style={{ width: "100%" }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={!imgUrl?"https://images.unsplash.com/photo-1495020689067-958852a7765e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80":imgUrl} className="img-fluid rounded-start" alt="..." />
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
