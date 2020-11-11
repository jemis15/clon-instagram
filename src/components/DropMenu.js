import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function DropMenu({active, onMouseOver, onMouseOut}) {
    return <div className="drop-menu" style={{ backgroundColor: '#0f0f0f'}} onMouseEnter={onMouseOver} onMouseLeave={onMouseOut}>
        <Container className={active ? '' : 'd-none'}>
            <MenuCollapseA data={data} />
        </Container>
    </div>
}

function MenuCollapseA({ data }) {
    return <Row>
        <Col xs="6" className={`item-color-${data.data_a.color}`}>
            <h4 className="title">{data.data_a.title}</h4>
            <Row>
                {data.data_a.items.map((data, key) => (
                    <Col key={key} xs="6">
                        <ListaHeader data={data} />
                    </Col>
                ))}
            </Row>
        </Col>
        <Col xs="3" className={`item-color-${data.data_b.color}`}>
            <h4 className="title">Titulo general</h4>
            <ListaHeader data={data.data_b.item} />
        </Col>
        <Col xs="3" className={`item-color-${data.data_c.color}`}>
            <h4 className="title">{data.data_c.title}</h4>
            {data.data_c.items.map((item, key) => (
                <ListaHeader key={key} data={item} />
            ))}
        </Col>
    </Row>;
}

function MenuCollapseB({ menus }) {
    return <div className="d-flex">
      {menus.map((menu, key) => (
        <ul key={key} className="ul-menu-collapse ul-text-white ul-border-left text-white ml-5">
          {menu.items((item, key) => (
            <li key={key} className="px-2 py-1">{item.label}</li>
          ))}
        </ul>
      ))}
      <ul className="ul-menu-collapse ul-text-white ul-border-left text-white ml-5">
        <li className="px-2 py-1">Item 1</li>
        <li className="px-2 py-1">Item 4 item 4</li>
        <li className="px-2 py-1">Item 5</li>
      </ul>
      <ul className="ul-menu-collapse ul-text-white ul-border-left text-white ml-5">
        <li className="px-2 py-1">Item 1</li>
        <li className="px-2 py-1">Item 2</li>
        <li className="px-2 py-1">Item 4 item 4</li>
        <li className="px-2 py-1">Item 5</li>
      </ul>
    </div>
  }

function ListaHeader({ data }) {
    return <div>
        <h5 className="sub-title">{data.title}</h5>
        <ul className="ul-menu-collapse ul-text-white text-center">
            {data.items.map((item, key) => (
                <li key={key}>
                    <A url={item.url} value={item.label} onClick={() => alert('hola')} />
                </li>
            ))}
        </ul>
    </div>
}

function A({ url, value, link, props }) {
    if (link) {
        return <a href={url} {...props}>{value}</a>;
    }

    return <Link to={url} {...props}>{value}</Link>;
}

const data = {
    data_a: {
        color: 'danger',
        title: 'Titulo general',
        items: [
            {
                title: 'Subtitulos',
                items: [
                    { label: 'Item del la lista', url: '#probando' },
                    { label: 'Item del la lista', url: '#probando' },
                    { label: 'Item del la lista', url: '#probando' }
                ]
            },
            {
                title: 'Subtitulos',
                items: [
                    { label: 'Item de prueba', url: '#probando' },
                    { label: 'Item de prueba', url: '#probando' },
                    { label: 'Item de prueba', url: '#probando' },
                    { label: 'Item de prueba', url: '#probando' },
                ]
            },
            {
                title: 'Subtitulos',
                items: [
                    { label: 'Item de prueba', url: '#probando' },
                    { label: 'Item de prueba', url: '#probando' },
                    { label: 'Item de prueba', url: '#probando' },
                    { label: 'Item de prueba', url: '#probando' },
                ]
            },
            {
                title: 'Subtitulos',
                items: [
                    { label: 'Item de prueba', url: '#probando' },
                    { label: 'Item de prueba', url: '#probando' },
                    { label: 'Item de prueba', url: '#probando' },
                    { label: 'Item de prueba', url: '#probando' },
                ]
            }
        ]
    },
    data_b: {
        color: 'primary',
        title: 'Titulo b',
        item: {
            title: 'Titulo 2',
            items: [
                { label: 'Item de prueba', url: '#probando' },
                { label: 'Item de prueba', url: '#probando' },
                { label: 'Item de prueba', url: '#probando' },
                { label: 'Item de prueba', url: '#probando' },
                { label: 'Item de prueba', url: '#probando' },
                { label: 'Item de prueba', url: '#probando' },
                { label: 'Item de prueba', url: '#probando' },
            ]
        }
    },
    data_c: {
        color: 'success',
        title: 'Titulo b',
        items: [
            {
                title: 'Titulo 2',
                items: [
                    { label: 'Item de prueba', url: '#probando' },
                    { label: 'Item de prueba', url: '#probando' },
                ]
            },
            {
                title: 'Titulo 3',
                items: [
                    { label: 'Item de prueba', url: '#probando' },
                    { label: 'Item de prueba', url: '#probando' },
                    { label: 'Item de prueba', url: '#probando' },
                    { label: 'Item de prueba', url: '#probando' },
                ]
            }
        ]
    }
}