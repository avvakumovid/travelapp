import React, { FC } from 'react';
import { Layout } from './../../common/Layout';
import Meta from './../../../utils/Meta';
import { IPlace } from 'types/plcae';
import { PlaceItem } from './../../elements/Home/PopularPlaces/PlaceItem';
import { useFavorites } from './useFavorites';

const Favorites: FC<{ places: IPlace[] }> = ({ places }) => {

  return (
    <Layout>
      <Meta title='My favorites' />
      <h1 className='heading'>Favorites</h1>
      <div style={{ width: '80%', margin: '0 auto', paddingBottom: '100px' }}>
        {places.length ? (
          places.map((place: IPlace) => {
            return (
              <PlaceItem
                key={place._id}
                place={place}
                removeHandler={e => {
                  e.preventDefault();
                  alert(place.location.city);
                }}
              />
            );
          })
        ) : (
          <span
            style={{
              marginTop: '-2rem',
              opacity: '.6',
              fontStyle: 'italic',
            }}
          >
            Not Found
          </span>
        )}
      </div>
    </Layout>
  );
};

export default Favorites;
