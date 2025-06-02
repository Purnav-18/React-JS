import purple from '../../Image/purple.png';
import black from '../../Image/black.png';
import { Link } from 'react-router-dom';
import { Col } from 'react-bootstrap';

function Sideadmin() {
    return (
        <>
            <Col
                xs={12}
                md={3}
                lg={2}
                style={{
                    padding: '20px 10px',
                    height: "80vh",
                    boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
                    color: "#fff",
                }}
            >
                <section>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'flex-start',
                            alignItems: 'flex-start',
                        }}
                    >
                        {/* Overview Link */}
                        <Link
                            to={'/overviewadmin'}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                textDecoration: 'none',
                                padding: '12px 15px',
                                color: '#fff',
                                width: '100%',
                                borderRadius: '5px',
                                marginBottom: '10px',
                                transition: 'background-color 0.3s ease',
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.backgroundColor = '#495057';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.backgroundColor = 'transparent';
                            }}
                        >
                            <div className="d-flex flex-row">
                                <img
                                    src={purple}
                                    alt="Overview"
                                    style={{
                                        width: '30px',
                                        height: '30px',
                                        marginRight: '10px',
                                    }}
                                />
                                <div style={{ fontSize: '20px', fontWeight: '600', color: 'GrayText' }}>Overview</div>
                            </div>
                        </Link>

                        {/* Directory Link */}
                        <Link
                            to={'/adminDireactory'}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                textDecoration: 'none',
                                padding: '12px 15px',
                                color: '#fff',
                                width: '100%',
                                borderRadius: '5px',
                                transition: 'background-color 0.3s ease',
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.backgroundColor = '#495057';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.backgroundColor = 'transparent';
                            }}
                        >
                            <div className="d-flex flex-row">
                                <img
                                    src={black}
                                    alt="direactory"
                                    style={{
                                        width: '30px',
                                        height: '30px',
                                        marginRight: '10px',
                                    }}
                                />
                                <div style={{ fontSize: '20px', fontWeight: '600', color: 'GrayText' }}>Directory</div>
                            </div>
                        </Link>
                    </div>
                </section>
            </Col>
        </>
    );
}

export default Sideadmin;
