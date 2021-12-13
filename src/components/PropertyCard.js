import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

import FavoritePropertyIcon from './FavoritePropertyIcon';
import './property-card.scss';
import {
  numOfbath,
  formatAddress,
  formatPrice,
  formatListing,
} from '../utils/helper';

const PropertyCard = ({ property }) => {
  return (
    <Card className="property-card">
      <Link to={`/properties/${property.mlsId}`} key={property.mlsId}>
        <Card.Img
          varient="top"
          src={property.photos[0]}
          className="property-card__image"
        />
      </Link>
      <Card.Body>
        <div>
          <FavoritePropertyIcon mlsId={property.mlsId} />
          <ul className="property-card__list">
            <li className="property-card__list-item">
              {property.property.bedrooms} BR |
            </li>
            <li className="property-card__list-item">
              {numOfbath(
                property.property.bathsFull,
                property.property.bathsHalf,
              )}{' '}
              Bath |
            </li>
            <li className="property-card__list-item">
              {property.property.area} Sq Ft
            </li>
          </ul>
          <h2>{formatPrice(property.listPrice)}</h2>
          <address className="property-card__address">
            {formatAddress(property.address)}
          </address>
        </div>
        <p className="text-muted">Listed {formatListing(property.listDate)}</p>
      </Card.Body>
    </Card>
  );
};

export default PropertyCard;
