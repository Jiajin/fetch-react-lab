import React, { Component } from "react";
import Counter from "../Counter";
import "./NewsFeed.css";

class NewsFeed extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
    };
  }

  async componentDidMount() {
    const URL = `https://newsapi.org/v2/everything?sources=hacker-news&apiKey=${process.env.REACT_APP_NEWSAPI_API_KEY}`;

    try {
      let resp = await fetch(URL);
      let response = await resp.json();
      this.setState({ articles: response.articles });

      // .then((response) => response.json()) // convert data to json
      // .then((json) => {
      //   console.log(json);

      //   this.setState({ articles: json.articles });
      // }); // log data
    } catch (err) {
      console.log("ERROR" + err.message);
    }
  }

  // TODO: start coding!
  anonymous(author) {
    if (author == null) {
      return "anonymous";
    } else return author;
  }
  render() {
    return this.state.articles.map((article, i) => {
      // TODO: start coding!
      return (
        // this return is needed ?
        <div className="parent">
          <Counter></Counter>
          <p className="article-title">{article.title}</p>
          <p className="article-author">
            {!article.author ? "Anonymous" : article.author}
          </p>
          <div className="article-time">
            {new Date(Date.parse(article.publishedAt)).toLocaleString()}
          </div>
          <p className="article-content">{article.content}</p>
        </div>
      );
    });
  }
}

export default NewsFeed;
