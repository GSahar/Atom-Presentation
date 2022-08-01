import React, { Component } from 'react';
const ListItem = ({ value }) => (
  <div className='div_li'>
    <img className='li_avatar' src={value.Avatar} alt='Иконка чемпионата' />
    <dev className='li_content'>
      <div className='li_title'>{value.Title}</div>
      <div className='li_description'>{value.Description}</div>
    </dev>
  </div>
);

const List = ({ items }) => (
  <div className='div_ul'>
    {
      items.map((item, i) => <ListItem key={i} value={item} />)
    }
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

    return (
      <div className='container-team'>
        <div className='head-container'>
          <img className='head-img' src={Avatar} alt='Иконка чемпионата' />
          <div className='head-text'>{Competency}</div>
        </div>

        <h1 className='container-title'>{Title}</h1>
        <List items={Team} />
        <div className='container-desc'>{Description} </div>
      </div>
    );
  }
}