import React from 'react';
import { Box, Grid, IconButton } from '@mui/material';
import { makeStyles } from '@mui/styles';
import heartFill from '../assets/heart-fill.svg';
import heartStroke from '../assets/heart-stroke.svg';
import FavouriteProperty from './FavouriteProperty';

const useStyles = makeStyles({
  cardImage: { objectFit: 'cover' },
  IconButton: {
    position: 'absolute',
    top: '7px',
    right: '7px',
  },
  Details: {
    fontSize: { md: '17px', xs: '16px' },
    display: 'flex',
    color: 'black',
    fontWeight: 'bold',
  },
});

const Card = ({ api }) => {
  const classes = useStyles();
  const { photos, property, address, listDate, listPrice, listingId } = api;
  const [isFavorite, toggleFavorite] = FavouriteProperty(listingId);

  const date =
    new Date(listDate).getDate() +
    '/' +
    new Date(listDate).getMonth() +
    '/' +
    new Date(listDate).getFullYear().toString().substr(-2);
  return (
    <>
      <Grid className={classes.card} item md={4} sm={6} xs={12}>
        <Box
          className={classes.cardBox}
          sx={{
            pl: { lg: '18px', md: '10px', sm: '3px', xs: '3px' },
            pr: { lg: '18px', md: '10px', sm: '3px', xs: '3px' },
            mt: '24px',
          }}
        >
          <Box sx={{ position: 'relative' }}>
            <img
              style={{ borderRadius: '4px' }}
              width="100%"
              height="270vw"
              src={photos[0]}
              alt={listingId}
            />
            <IconButton
              onClick={() => toggleFavorite(listingId)}
              className={classes.IconButton}
            >
              <img
                src={isFavorite ? heartFill : heartStroke}
                className="App-logo"
                alt="favorite icon"
              />
            </IconButton>
          </Box>
          {/* detailBox */}
          <Box sx={{ p: '8px' }}>
            <Box className={classes.Details}>
              <Box
                sx={{
                  pr: '7px',
                }}
              >
                {property.bedrooms} BR
              </Box>
              |{' '}
              <Box sx={{ pr: '7px', pl: '7px' }}>Bath {property.bathsFull}</Box>
              |<Box sx={{ pl: '7px' }}>{property.area} sq Ft</Box>
            </Box>
            <Box sx={{ fontSize: '22px', fontWeight: 'bold' }}>
              {' '}
              {`$${listPrice}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            </Box>
            <Box sx={{ fontSize: '14px' }}>{address.full}</Box>
            <Box sx={{ fontSize: '14px' }}>Listed: {date}</Box>
          </Box>
        </Box>
      </Grid>
    </>
  );
};

export default Card;
