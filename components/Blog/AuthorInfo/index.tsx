
import { Media, Image } from "react-bootstrap";

export const AuthorInfo: React.FC = () =>
{
    return (
            <Media className="mb-4 admin-intro">
                <Image
                    roundedCircle
                    width={64}
                    height={64}
                    className="mr-3"
                    src=""
                    alt="Generic placeholder"
                    />
                <Media.Body>
                    <h5 className="font-weight-bold mb-0">Hello Friends,</h5>
                    <p className="welcome-text">
                        My name is Slavo_3 and I am an experienced software engineer & freelance developer.
                        and this is my blog page.
                    </p>
                </Media.Body>
            </Media>
        )
}