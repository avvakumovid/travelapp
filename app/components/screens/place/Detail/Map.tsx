import React, { FC } from 'react';
import styles from './Detail.module.scss';
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from 'react-simple-maps';
import { TypeLocation } from '../../../../types/plcae';

const geoUrl =
  'https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json';

export const Map: FC<{ location: TypeLocation }> = ({ location }) => {
  return (
    <div className={styles.map}>
      <ComposableMap
        projectionConfig={{
          center: [90, 53],
          scale: 100,
        }}
        width={240}
        height={140}
      >
        <ZoomableGroup zoom={0.6}>
          <Geographies geography={geoUrl}>
            {({ geographies }: any) =>
              geographies.map((geo: any) => {
                const isCurrent = geo.properties.name === location.country;
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={isCurrent ? '#eb601e' : '#39373B'}
                    stroke={isCurrent ? 'transparent' : '#212022'}
                    style={{
                      default: { outline: 'none' },
                      hover: { outline: 'none' },
                      pressed: { outline: 'none' },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};
