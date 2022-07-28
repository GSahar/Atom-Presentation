import logo from './image/logo.svg';
import './App.css';
import axios from 'axios';
import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

const ListItem = ({ value }) => (
  <div className='div_li'>
    <img className='li_avatar' src={value.Avatar}  ></img>
    <div className='li_title'>{value.Title}</div>
    <div className='li_description'>{value.Description}</div>
  </div>
);

const List = ({ items }) => (
  <div className='div_ul'>
    {
      items.map((item, i) => <ListItem key={i} value={item} />)
    }
  </div>
);

class ViewTeam extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      id: props.id
    };
  }

  render() {
    const { data, id } = this.state;

    let newData = data.filter(function (el) {
      return el.id === id;
    });

    let { Title, Team, Description, Competency, Avatar } = newData[0];

    return (
      <div className='container-team'>
        <div className='head-container'>
          <img className='head-img' src={Avatar}></img>
          <div className='head-text'>{Competency}</div>
        </div>

        <h1 className='container-title'>{Title}</h1>
        <List items={Team} />
        <div className='container-desc'>{Description} </div>
      </div>
    );
  }
}

const ListServiceItem = ({ value }) => (
  <div className='div-serv-li'>
    <img className='li-serv-avatar' src='' ></img>
    <div className='li-serv-title'>{value.Title}</div>
    <div className='li-serv-description'>{value.Description}</div>
  </div>
);

const ListService = ({ items }) => (
  <div className='div-serv-ul'>
    {
      items.map((item, i) => <ListServiceItem key={i} value={item} />)
    }
  </div>
);

class ViewPartner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      id: props.id
    };
  }

  render() {
    const { data, id } = this.state;

    let newData = data.filter(function (el) {
      return el.id === id;
    });

    let { Title, Service, Description, Caption, Caption1 } = newData[0];

    return (
      <div className='container-service'>
        <div className='head-container'>
          <img className='head-img' src={require("./image/softline_mono.png")}></img>
          <div className='head-caption'>{Caption}</div>
          <div className='head-text'>{Caption1}</div>
        </div>

        <h1 className='container-title'>{Title}</h1>
        <ListService items={Service} />
        <div className='container-desc'>{Description} </div>
      </div>
    );
  }
}

export default class App extends Component {
  //
  constructor(props) {
    super(props);
    this.state = {
      items: undefined,
    };
  }

  render() {
    const apiURL = "http://localhost:5000/items/";

    const fetchData = async () => {
      const response = await axios.get(apiURL)
      this.setState({
        items: response.data
      });
    }

    if (!this.state.items) {
      fetchData();
    }

    

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div className='app-head-text'>VII ОТРАСЛЕВОЙ ЧЕМПИОНАТ ПРОФЕССИОНАЛЬНОГО МАСТЕРСТВА ГОСКОРПОРАЦИИ «РОСАТОМ»</div>
        </header>
        <div className='App-body'>
          {this.state.items &&
            this.state.items.map((item, index) => {
              return (
                item.Type === 1 ? (

                  <div className='app-container' key={index}>
                    <ViewTeam data={this.state.items} id={item.id} />
                  </div>

                ) : (item.Type === 2 ? (

                  <div className='app-container' key={index}>
                    <ViewPartner data={this.state.items} id={item.id} />
                  </div>

                ) : undefined)


              );
            })}
        </div>
      </div>
    );
  }
}

//export default App;
