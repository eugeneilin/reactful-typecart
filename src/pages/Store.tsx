import { Col, Container, Row } from 'react-bootstrap';
import storeItems from '../data/items.json';
import { StoreItem } from '../components/StoreItem';

export function Store() {
  return (
    <Container>
      <h2 className='my-5 cursive text-center'>
        Discover our assortment of enchanting culinary pens, filled with endless ink.
      </h2>
      <Row md={2} xs={1} lg={3} className='g-3'>
        {storeItems.map((item) => (
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
}
