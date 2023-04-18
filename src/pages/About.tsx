import { Container } from 'react-bootstrap';

export function About() {
  return (
    <Container>
      <h1 className='cursive mt-5'>Chef's Pens Collection</h1>
      <h5 className='mb-4'>App Version 1.1</h5>
      <p className='mb-5'>
        These pens are custom made with the best chefs in mind. All proceeds go to feeding hungry
        people. Thank you for your support!
      </p>
    </Container>
  );
}
