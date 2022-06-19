import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'


export class News extends Component {
    static defaultProps = {
        country: 'in',
        pageSize: 10,
        category: 'general'
    }
    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string,
    }
    constructor() {
        super();
        this.state = {
            articles: [],
            loading: false,
            page: 1,
        };
    }
    async componentDidMount() {
        // this runs after render statement
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=770b8e4a116246f8b8145a275cf8ccf5&page=1&pageSize=${this.props.pageSize}`;
        this.setState({loading: true});
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults , loading: false});
    }

    handleNextClick = async () => {
        if (!(Math.ceil(this.state.totalResults / this.props.pageSize) < this.state.page + 1)) {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=770b8e4a116246f8b8145a275cf8ccf5&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({loading: true});
            let data = await fetch(url);
            let parsedData = await data.json();

            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false,
            })
        }

    }
    handlePrevClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=770b8e4a116246f8b8145a275cf8ccf5&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        this.setState({loading: true})
        let data = await fetch(url);
        let parsedData = await data.json();

        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false,
        })

    }

    render() {
        return (
            <div className="container my-3 ">
                <div className="row d-flex justify-content-center">
                    <h2 className="text-center">NewsBee - Top Headlines..</h2>
                    {this.state.loading && <Spinner/>}
                    {!this.state.loading && this.state.articles.map((element) => {
                        return (
                            <div key={element.url}>
                                <Newsitem
                                    title={element.title ? element.title : ""}
                                    description={element.description ? element.description : ""}
                                    imgUrl={element.urlToImage}
                                    newsUrl={element.url}
                                />
                            </div>
                        );
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                    <button disabled={Math.ceil(this.state.totalResults / this.props.pageSize) < this.state.page + 1} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        );
    }
}

export default News;
