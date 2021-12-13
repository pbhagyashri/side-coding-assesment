import React from 'react';
import Container from 'react-bootstrap/Container';
import chickenImage from '../assets/chicken-house-image.jpg';

const NoRouteMatch = () => {
  return (
    <Container>
      <img
        style={{ width: '70%', marginLeft: '15%', marginTop: '5%' }}
        src={chickenImage}
        alt="Unknown route. please try navigating to another page."
      />
    </Container>
  );
};

export default NoRouteMatch;
