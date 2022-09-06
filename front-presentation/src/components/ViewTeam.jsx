import React, { Component } from "react";
const ListItem = ({ value }) => (
  <div className="div_li">
    <div className="li_img">
      <img className="li_avatar" src={value.Avatar} alt="Иконка чемпионата" />
    </div>

    <dev className="li_content">
      <div className="li_title">{value.Title}</div>
      <div className="li_description">{value.Description}</div>
    </dev>
  </div>
);

const List = ({ items }) => (
  <div className="div_ul">
    {items.map((item, i) => (
      <ListItem key={i} value={item} />
    ))}
  </div>
);

export default class ViewTeam extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: props.data,
      id: props.id,
    };
  }

  render() {
    const { data, id } = this.state;

    let newData = data.filter(function (el) {
      return el.id === id;
    });

    let { Title, Team, Description, Competency, Avatar } = newData[0];

    /*  */

    /* 
      <div className="head-container">
          <h2 className="head-text">{Competency}</h2>
        </div>

        <div className="body-container">
          <div className="container-content">
            <div className="left-panel">
              <div className="container-img-content">
                <img className="head-img" src={Avatar} alt="Иконка чемпионата" />
              </div>
              <h1 className="container-title">{Title}</h1>
            </div>
            <div className="Right-panel">
              <List items={Team} />
              <div className="container-desc">{Description} </div>
            </div>
          </div>
        </div>
      */

    return (
      <div className="container-team">
        <div className="head-container">
          <h2 className="head-text">{Competency}</h2>
        </div>

        <div className="container-content">
          <div className="left-panel">
            <div className="container-img-content">
              <img className="head-img" src={Avatar} alt="Иконка чемпионата" />
            </div>
            <h1 className="container-title">{Title}</h1>
          </div>

          <div className="right-panel">
            <List items={Team} />
            <div className="container-desc">{Description} </div>
          </div>
        </div>
      </div>
    );
  }
}
