import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import PropertyCard from './PropertyCard';

const property = {
  address: {
    city: 'Houston',
    country: 'United States',
    crossStreet: 'Dunne Ave',
    full: '74434 East Sweet Bottom Br #18393',
    postalCode: '77096',
    state: 'Texas',
    streetName: 'East Sweet Bottom Br',
    streetNumber: 74434,
    streetNumberText: '74434',
    unit: '18393',
  },
  listPrice: 20714261,
  listDate: '2011-05-23T18:50:30.184391Z',
  photos: [
    'https://s3-us-west-2.amazonaws.com/cdn.simplyrets.com/properties/trial/home9.jpg',
    'https://s3-us-west-2.amazonaws.com/cdn.simplyrets.com/properties/trial/home-inside-9.jpg',
  ],
  mlsId: 1005192,
  property: {
    area: 1043,
    bathsFull: 5,
    bathsHalf: 6,
    bedrooms: 2,
  },
};
test('renders PropertyCard component', () => {
  const p = render(
    <BrowserRouter>
      <PropertyCard property={property} />
    </BrowserRouter>,
  );

  const cardImage = screen.getAllByTestId('property-card-image')[0];
  expect(cardImage.src).toBe(
    'https://s3-us-west-2.amazonaws.com/cdn.simplyrets.com/properties/trial/home9.jpg',
  );

  const cardPrice = screen.getAllByTestId('property-price')[0];
  expect(cardPrice).toHaveTextContent('$20,714,261');

  const cardAddress = screen.getAllByTestId('property-address')[0];
  expect(cardAddress).toHaveTextContent(
    '74434 East Sweet Bottom Br, Houston, Texas',
  );
});
