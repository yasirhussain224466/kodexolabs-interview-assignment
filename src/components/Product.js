import React from 'react';
import Card from './Card';
import { Grid, Container, AppBar, Toolbar, Box } from '@mui/material';
import { getListings } from '../simplyRetsApi';
import Loader from './Loader';

const Product = () => {
  const [api, setApi] = React.useState([]);
  React.useEffect(() => {
    async function fetchListings() {
      const data = await getListings();
      setApi(data);
    }

    fetchListings();
  }, []);

  return (
    <>
      <AppBar mb={10} position="static" sx={{ backgroundColor: '#f1f1f1' }}>
        <Toolbar>
          <Box
            sx={{
              color: 'black',
              ml: '30px',
              fontSize: '20px',
              fontFamily: 'sans-serif',
              fontWeight: 'bold',
              letterSpacing: '1px',
            }}
            flexGrow={1}
          >
            Property Listing
          </Box>
        </Toolbar>
      </AppBar>
      <Container >
        <Grid container>
          {api ? (
            api.map((currElem, i) => {
              return <Card api={currElem} key={i} />;
            })
          ) : (
            <Loader />
          )}
        </Grid>
      </Container>
    </>
  );
};

export default Product;
