import { FC } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Container from 'react-bootstrap/Container';



export const Preloader: FC = () =>
{
    

    return (
        <Container fluid className="d-flex align-items-center justify-content-center" style={{ height: '100vh'}}>
            <Spinner animation="border" role="status" className="text-primary">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
        </Container>
    )
}