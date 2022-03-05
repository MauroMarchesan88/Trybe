import React from 'react';
import './App.css';

class App extends React.Component {
  constructor() {
    console.log("constructor")
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
    console.log("fetch")
    this.setState(
      { loading: true },
      async () => {
      const requestReturn = await fetch('https://api.randomuser.me/')
      const requestObject = await requestReturn.json();
      const title = requestObject.results[0].name.title;
      const firstName =requestObject.results[0].name.first;
      const lastName = requestObject.results[0].name.last;
      const requestPhoto = requestObject.results[0].picture.large;
      this.setState({
        loading: false,
        userName: `${title} ${firstName} ${lastName}`,
        userPhoto: requestPhoto,
        userAge: requestObject.results[0].dob.age,
        userEMail: requestObject.results[0].email,
      });
    });
  }

  componentDidMount() {
    this.fetchRandomName();
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps)
    console.log(nextState)
    const maxAge = 50;
    const age = nextState.userAge;
    console.log(age);
    return age < maxAge ? true : false;
  }
  renderUserElement() {
    return (
      <div>
        <div>
          <p>Name {this.state.userName}</p>
          <div className='photoDiv'>
            Photo <img src={this.state.userPhoto} alt="aqui vai a foto"/>
          </div>
          <p>Age {this.state.userAge}</p>
          <p>Email {this.state.userEMail}</p>
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
