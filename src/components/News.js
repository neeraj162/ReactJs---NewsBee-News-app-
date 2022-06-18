import React, { Component } from "react";
import Newsitem from "./Newsitem";

export class News extends Component {
    
    constructor() {
        super();
        console.log("hel");
        this.state = {
            articles: [],
            loading: false,
        };
    }
    async componentDidMount() {
        // this runs after render statement
        let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=770b8e4a116246f8b8145a275cf8ccf5";
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles: parsedData.articles})
    }

    render() {
        return (
            <div className="container my-3 d-flex justify-content-center">
                <div className="row">
                    <h2>NewsBee - Top Headlines..</h2>

                    {this.state.articles.map((element) => {
                        return (
                            <div key={element.url}>
                                <Newsitem
                                    title={element.title?element.title:""}
                                    description={element.description?element.description:""}
                                    imgUrl={element.urlToImage}
                                    newsUrl={element.url}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default News;
