import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    super();

    this.renderUserElement = this.renderUserElement.bind(this);

    this.state = {
      userPhoto: "",
      userAge: 0,
      userName: "",
      userEMail: "",
    }
  }

  async fetchRandomName() {
    this.setState(
      { loading: true },
      async () => {
      const requestHeaders = { headers: { Accept: 'application/json' } }
      const requestReturn = await fetch('https://api.randomuser.me/', requestHeaders)
      const requestObject = await requestReturn.json();
      const title = requestObject.results[0].name.title;
      const firstName =requestObject.results[0].name.first;
      const lastName = requestObject.results[0].name.last;
      const requestPhoto = await fetch(requestObject.results[0].picture.large)
      this.setState({
        loading: false,
        userName: `${title} ${firstName} ${lastName}`,
        userPhoto: requestPhoto,
        userAge: requestObject.results[0].registered.age,
        userEMail: requestObject.results[0].email,
      });
    });
  }

  componentDidMount() {
    this.fetchRandomName();
  }

  renderUserElement() {
    return (
      <div>
        <div>
          <p>Name {this.state.userName}</p>
          Photo <img src={this.userPhoto} alt="aqui vai a foto"/>
          <p>Age {this.userAge}</p>
          <p>Email {this.userEMail}</p>
        </div>
      </div>
    );
  }

  render() {
    const { loading } = this.state;
    const loadingElement = <span>Loading...</span>;

    return (
      <div>{loading ? loadingElement : this.renderUserElement() }</div>
    );
  }
}

export default App;
