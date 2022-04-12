import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Card, CardBody, CardFooter, CardTitle, Row, Col } from "reactstrap";
import Axios from "axios";
import { ServerURL } from '../../url'
const Row2 = () => {
	const user = useSelector((state) => state.userReducer.user);

	const [dataOfSecondRow, setDataOfSecondRow] = useState({});

	useEffect(() => {
		const org_id = user._id;
		Axios.get(
			 `${ServerURL}/api/dashboard/getSecondDataOfSecondRow/${org_id}`
		).then((res) => {
			setDataOfSecondRow({
				noOfBookings: res.data.NoOfBookings,
				noOfEvents: res.data.NoOfEvents,
			});
		}); 
	}, []);

	return (
		<>
			<Col lg="4" md="6">
				<Card className="card-stats">
					<CardBody>
						<Row>
							<Col xs="5">
								<div className="info-icon text-center icon-warning">
									<i className="tim-icons icon-chat-33" />
								</div>
							</Col>
							<Col xs="7">
								<div className="numbers">
									<p className="card-category">Events</p>
									<CardTitle tag="h3">{dataOfSecondRow.noOfEvents}</CardTitle>
								</div>
							</Col>
						</Row>
					</CardBody>
					<CardFooter>
						<hr />
						<div className="stats">
							<i className="tim-icons icon-refresh-01" />Total no. of events you have
						</div>
					</CardFooter>
				</Card>
			</Col>
			<Col lg="4" md="6">
				<Card className="card-stats">
					<CardBody>
						<Row>
							<Col xs="5">
								<div className="info-icon text-center icon-primary">
									<i className="tim-icons icon-shape-star" />
								</div>
							</Col>
							<Col xs="7">
								<div className="numbers">
									<p className="card-category">Bookings</p>
									<CardTitle tag="h3">{dataOfSecondRow.noOfBookings}</CardTitle>
								</div>
							</Col>
						</Row>
					</CardBody>
					<CardFooter>
						<hr />
						<div className="stats">
							<i className="tim-icons icon-sound-wave" />Total no. of tickets purchased
						</div>
					</CardFooter>
				</Card>
			</Col>
			<Col lg="4" md="6">
				<Card className="card-stats">
					<CardBody>
						<Row>
							<Col xs="5">
								<div className="info-icon text-center icon-success">
									<i className="tim-icons icon-single-02" />
								</div>
							</Col>
							<Col xs="7">
								<div className="numbers">
									<p className="card-category">Attendees</p>
									<CardTitle tag="h3">150,000</CardTitle>
								</div>
							</Col>
						</Row>
					</CardBody>
					<CardFooter>
						<hr />
						<div className="stats">
							<i className="tim-icons icon-trophy" /> Total no. of customers
						</div>
					</CardFooter>
				</Card>
			</Col>
		</>
	);
};

export default Row2;
