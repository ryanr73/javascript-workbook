import React, {Component} from 'react';
import './App.css';

class News extends Component {
  render() {
    return <div>
      <ul className="list-unstyled">
        {this.props.news.map((newsItem) =>
        /* <li>{ JSON.stringify(newsItem) } </li> */ < li className = "news-item" > <a target="_blank" href={newsItem.url}>
          <div className="row">
            <div className="col-md-5">
              <div className="thumbnail"><img src={newsItem.urlToImage} alt=""/></div>
            </div>
            <div className="col-md-7">
              <h4>{newsItem.title}</h4>
              {newsItem.description}</div>
          </div>
        </a> < /li>)}
      </ul>
      <Attribution></Attribution>
    </div>;
  }
}
//fetches newsapi source; creates news array in state
class NewsContainer extends Component {
  url = 'https://newsapi.org/v1/articles?source=recode&sortBy=top&apiKey=f3b5d5b4f322477b8686e992bfc8a067';
  constructor(props) {
    super(props);
    this.state = {
      news: []
    }
  }

  componentDidMount() {
    const self = this;
    fetch(this.url).then((response) => {
      return response.json()
    }).then((json) => {
      if (json.status === 'ok') {
        self.setState({news: json.articles});
      } else {
        alert(json.status);
      }
    }).catch((ex) => {
      console.log('parsing failed', ex)
    })
  }

  render() {
    return <div>
      {/* <h1>NewsContainer</h1> */}
      <News news={this.state.news}/>
    </div>;
  }
}

//must post attribution as part of usage agreement
class Attribution extends Component {
  render() {
    return <div>
      <small>
        <em>Powered by NewsApi.org</em>
      </small>
    </div>;
  }
}

class App extends Component {
  render() {
    return (
      <div className="api news">
        <h1>Current News from Recode</h1>
        <NewsContainer/>
      </div>
    );
  }
}

export default App;
