import { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import RdrBox from '../components/common/RdrBox';

const Home = () => {
  return (
    <Fragment>
      <Container>
        <RdrBox 
          title="The Official Home for All Your Favourite RubberDuck Rampage Games"
          content="Join the dedicated RubberDuck Rampage Gamers community with exclusive in-game outfits, accessories, and collectibles"
          link="Shop Now"
          linkTo="/store/products"
        />
      </Container>
    </Fragment>
  )
}

export default Home