import React, { Component } from 'react';

const ListServiceItem = ({ value }) => (
    <div className='div-serv-li'>
        <img className='li-serv-avatar' src='' alt='Иконка услуги' />
        <dev className='li_content'>
            <div className='li-serv-title'>{value.Title}</div>
            <div className='li-serv-description'>{value.Description}</div>
        </dev>
    </div>
);

const ListService = ({ items }) => (
    <div className='div-serv-ul'>
        {
            items.map((item, i) => <ListServiceItem key={i} value={item} />)
        }
    </div>
);

export default class ViewPartner extends Component {
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
                    <img className='head-img' src={require("../image/softline_mono.png")} alt='Иконка спонсора'></img>
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