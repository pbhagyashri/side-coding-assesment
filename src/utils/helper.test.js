import {
  numOfBaths,
  formatAddress,
  formatPrice,
  formatListing,
} from './helper';

test('num of baths is a fraction', () => {
  expect(numOfBaths(3, 1)).toBe(3.5);
});

test('num of baths is a whole number', () => {
  expect(numOfBaths(2)).toBe(2);
});

test('num of baths is a whole number', () => {
  expect(numOfBaths(2, 0)).toBe(2);
});

test('address is formatted correctly', () => {
  const address = {
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
  };
  expect(formatAddress(address)).toBe(
    '74434 East Sweet Bottom Br, Houston, Texas',
  );
});

test('address is formatted correctly', () => {
  const address = {
    city: 'Oak Ridge',
    country: 'United States',
    crossStreet: 'CASTILLE CT.',
    full: '8369 West MAJESTY STREET Path #1765',
    postalCode: '77379',
    state: 'Texas',
    streetName: 'West MAJESTY STREET Path',
    streetNumber: 8369,
    streetNumberText: '8369',
    unit: '1765',
  };
  expect(formatAddress(address)).toBe(
    '8369 West MAJESTY STREET Path, Oak Ridge, Texas',
  );
});

test('price is formatted correctly', () => {
  const price = 13685168;
  expect(formatPrice(price)).toBe('$13,685,168');
});

test('price is formatted correctly', () => {
  const price = 20764446;
  expect(formatPrice(price)).toBe('$20,764,446');
});

test('price is formatted correctly', () => {
  const price = 7857291;
  expect(formatPrice(price)).toBe('$7,857,291');
});

test('listing date is formatted correctly', () => {
  const listDate = '2011-05-23T18:50:30.184391Z';
  expect(formatListing(listDate)).toBe('4/23/2011');
});

test('listing date is formatted correctly', () => {
  const listDate = '1994-10-25T13:58:17.284009Z';
  expect(formatListing(listDate)).toBe('9/25/1994');
});
