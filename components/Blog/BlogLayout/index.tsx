
import { Container } from "react-bootstrap"

export const BlogLayout: React.FC = ({children}: any) =>
{
    return (
        <Container style={{marginTop: "10px"}}>
            {children}
        </Container>
    )
}