import React from 'react';
import { Col, Card } from 'react-bootstrap';

import { CardContainer } from './collection-item.styles';


const CollectionItem = ({ name, sourceName, price, routeName }) => (
    <Col sm={4} md={3} className="p-2">
        <CardContainer className='border rounded-0 text-center bg-white'>
            <Card.Img className='mx-auto p-2' variant="top" src={`img/rentpage/${routeName}/${sourceName}.jpg`} />
            <Card.Text className="h3 text-uppercase font-weight-normal m-0">{name}</Card.Text>
            <Card.Text className="h4 font-weight-light text-uppercase py-2"> {price}$ month</Card.Text>
        </CardContainer>
    </Col>
);

export default CollectionItem;