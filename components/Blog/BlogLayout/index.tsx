
import { Container } from "react-bootstrap"

export const BlogLayout: React.FC = ( { children}) =>
{
    return (
        <Container style={{marginTop: "10px"}}>
            {children}
        </Container>
    )
}