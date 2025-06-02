import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';  // Importing NavDropdown
import bellIcon from "../../Image/bellIcon.png";
import profile from "../../Image/profile.png";

function Navbars() {
    return (
        <Navbar className="bg-body-tertiary border-bottom fixed-top" style={{ width: '100vw', top: '0', marginTop: '0px' }}>
            <Container>
                <Navbar.Brand href="#home" className="navbar-brand fw-bold fs-2" style={{ color: "#6941C6" }}>
                    PEOPLE.CO
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img src={bellIcon} alt="bell" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
                            <img src={profile} alt="profile" style={{ width: '40px', height: '40px', borderRadius: '50%', marginRight: '10px' }} />
                            <div style={{ fontWeight: '600', color: '#4B4B4B' }}>
                                Co Founder
                            </div>
                            <NavDropdown
                                title="Account"
                                id="basic-nav-dropdown"
                                align="end"
                                style={{ marginLeft: '10px', fontWeight: '500', color: '#6941C6' }}
                            >
                                <NavDropdown.Item href="/register" style={{ padding: '10px 20px', fontWeight: '500', color: '#28a745' }}>
                                    Register
                                </NavDropdown.Item>
                                <NavDropdown.Item href="/" style={{ padding: '10px 20px', fontWeight: '500', color: '#FF4D4D' }}>
                                    Sign Out
                                </NavDropdown.Item>
                            </NavDropdown>
                        </div>
                    </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Navbars;
