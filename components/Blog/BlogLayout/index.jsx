
import { Container } from "react-bootstrap"

export const BlogLayout  = ({children}) =>
{
    return (
        <Container style={{marginTop: "10px"}}>
            {children}
        </Container>
    )
}