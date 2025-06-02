import { Col } from "react-bootstrap";
import Sideadmin from "./Sideadmin";



function Overviewadmin() {
    return (
        <>
            <section style={{ display: 'flex', flexDirection: 'row', width: '98vw' , marginTop:'2%'}}>
                {/* Sidebar Section */}
                <Col xs={12} md={3} lg={2} style={{
                    padding: 0,
                    height: '80vh',
                    backgroundColor: '#f8f9fa',
                    boxShadow: '2px 2px 2px  5px  rgba(0, 0, 0, 0.1)',
                    margin: '13px',
                    marginLeft:'10px'
                }}>
                    <Sideadmin />
                </Col>

                {/* Main Content Section with reduced size */}
                <Col xs={12} md={8} lg={9} style={{
                    paddingLeft: '20px',
                    paddingTop: '5px',
                    height: '80vh',
                    width: '81%'

                }}>
                    <div
                        className="d-flex flex-column mt-2 justify-content-start border rounded"
                        style={{ height: '100%' }}
                    >
                        <div className="p-3">
                            <h1>Welcome, Purnav ....</h1>
                        </div>
                    </div>
                </Col>
            </section>
        </>
    );
}
export default Overviewadmin;
