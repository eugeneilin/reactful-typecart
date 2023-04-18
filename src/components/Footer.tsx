import { Container } from 'react-bootstrap';

export function Footer() {
  return (
    <Container className='text-center'>
      <p>
        Made by{' '}
        <a href='https://eugeneilin.dev/' target='_blank'>
          Eugene Ilin
        </a>
        .
      </p>
    </Container>
  );
}
