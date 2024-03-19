import React from "react";
import { Container } from "react-bootstrap";

const Footer = () => {
    return (
        <footer>
            <Container>
                <div data-testid="footer-content">
                    <p>
                        &copy; {new Date().getFullYear()} Your Website Name. All
                        rights reserved.
                    </p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
