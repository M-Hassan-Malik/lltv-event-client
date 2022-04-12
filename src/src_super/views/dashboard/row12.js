import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import classNames from "classnames"; // react plugin used to create charts
import { Line, Bar } from "react-chartjs-2"; // react plugin for creating vector maps
import Axios from "axios";

import Row2 from "./row2";

// reactstrap components
import {
	Button,
	ButtonGroup,
	Card,
	CardHeader,
	CardBody,
	CardTitle,
	Row,
	Col,
} from "reactstrap";

// core components
import {
	char1,
	chartExample1,
	chartExample2,
	chartExample3,
	chartExample4,
} from "variables/charts.js";
import { ServerURL } from '../../../url'

const Row12 = () => {
	const user = useSelector((state) => state.userReducer.user);
	const [bigChartData, setbigChartData] = useState("data1");

	const setBgChartData = (name) => {
		setbigChartData(name);
	};

	useEffect(() => {
		switch (bigChartData) {
			case "data1":
				console.log("Data 1", bigChartData);
				char1.accounts = [10, 100, 10, 10, 10, 10, 100, 10, 10, 10, 100, 10];
				break;
			case "data2":
				console.log("Data 2", bigChartData);
				let org_id = user._id;
				Axios.get(
					`${ServerURL}/api/dashboard/getTicketsPerchased/${org_id}`
				).then((object) =>
					object.data.map((obj) => {
						char1.purchases[obj._id] = obj.purchases; // month = no of tickets purchased
					})
				);
				break;
			case "data3":
				console.log("Data 3", bigChartData);
				char1.sessions = [100, 50, 10, 70, 10, 10, 0, 10, 30, 10, 100, 200];
				break;
		}
	}, [bigChartData]);

	return (
		<>
			<Row>
				<Col xs="12">
					<Card className="card-chart">
						<CardHeader>
							<Row>
								<Col className="text-left" sm="6">
									<h5 className="card-category">Total Shipments</h5>
									<CardTitle tag="h2">Performance</CardTitle>
								</Col>
								<Col sm="6">
									<ButtonGroup
										className="btn-group-toggle float-right"
										data-toggle="buttons"
									>
										<Button
											color="info"
											id="0"
											size="sm"
											tag="label"
											className={classNames("btn-simple", {
												active: bigChartData === "data1",
											})}
											onClick={() => setBgChartData("data1")}
										>
											<span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
												Accounts
											</span>
											<span className="d-block d-sm-none">
												<i className="tim-icons icon-single-02" />
											</span>
										</Button>
										<Button
											color="info"
											id="1"
											size="sm"
											tag="label"
											className={classNames("btn-simple", {
												active: bigChartData === "data2",
											})}
											onClick={() => setBgChartData("data2")}
										>
											<span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
												Purchases
											</span>
											<span className="d-block d-sm-none">
												<i className="tim-icons icon-gift-2" />
											</span>
										</Button>
										<Button
											color="info"
											id="2"
											size="sm"
											tag="label"
											className={classNames("btn-simple", {
												active: bigChartData === "data3",
											})}
											onClick={() => setBgChartData("data3")}
										>
											<span className="d-none d-sm-block d-md-block d-lg-block d-xl-block">
												Sessions
											</span>
											<span className="d-block d-sm-none">
												<i className="tim-icons icon-tap-02" />
											</span>
										</Button>
									</ButtonGroup>
								</Col>
							</Row>
						</CardHeader>
						<CardBody>
							<div className="chart-area">
								<Line
									data={chartExample1[bigChartData]} //chartExample1["data1"].datasets[0].data[0]= 70
									options={chartExample1.options}
								/>
							</div>
						</CardBody>
					</Card>
				</Col>
				<Row2 />
				<Col lg="4">
					<Card className="card-chart">
						<CardHeader>
							<h5 className="card-category">Total Shipments</h5>
							<CardTitle tag="h3">
								<i className="tim-icons icon-bell-55 text-primary" /> 763,215
							</CardTitle>
						</CardHeader>
						<CardBody>
							<div className="chart-area">
								<Line
									data={chartExample2.data}
									options={chartExample2.options}
								/>
							</div>
						</CardBody>
					</Card>
				</Col>
				<Col lg="4">
					<Card className="card-chart">
						<CardHeader>
							<h5 className="card-category">Daily Sales</h5>
							<CardTitle tag="h3">
								<i className="tim-icons icon-delivery-fast text-info" /> 3,500€
							</CardTitle>
						</CardHeader>
						<CardBody>
							<div className="chart-area">
								<Bar
									data={chartExample3.data}
									options={chartExample3.options}
								/>
							</div>
						</CardBody>
					</Card>
				</Col>
				<Col lg="4">
					<Card className="card-chart">
						<CardHeader>
							<h5 className="card-category">Completed Tasks</h5>
							<CardTitle tag="h3">
								<i className="tim-icons icon-send text-success" /> 12,100K
							</CardTitle>
						</CardHeader>
						<CardBody>
							<div className="chart-area">
								<Line
									data={chartExample4.data}
									options={chartExample4.options}
								/>
							</div>
						</CardBody>
					</Card>
				</Col>
			</Row>
		</>
	);
};
export default Row12;
