import logo from './image/logo.svg';

import 'antd/dist/antd.css';
import './style/App.css';
import './style/team_style.css';
import axios from 'axios';
import React, { Component } from 'react';
import ViewPartner from './components/ViewPartner';
import ViewTeam from './components/ViewTeam';
import { Carousel } from 'antd';

export default class App extends Component {

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
          <Carousel autoplay speed={1000} autoplaySpeed={6000} fade>
            {this.state.items &&
              this.state.items.map((item, index) => {
                return (
                  item.Type === 1 ? (
                    <div className='app-container' key={index} >
                      <ViewTeam data={this.state.items} id={item.id} />
                    </div>

                  ) : (item.Type === 2 ? (
                    <div className='app-container' key={index} >
                      <ViewPartner data={this.state.items} id={item.id} />
                    </div>
                  ) : undefined)
                );
              })}
          </Carousel>
        </div>
      </div>
    );
  }
}