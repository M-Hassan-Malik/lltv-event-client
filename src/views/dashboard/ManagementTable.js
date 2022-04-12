import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Progress,
  Table,
  Col,
  UncontrolledTooltip,
} from "reactstrap";
import { ServerURL } from '../../url'

const ManagementTable = () => {
  const user = useSelector((state) => state.userReducer.user);
  const [managementTableData, setManagementTableData] = useState([
    {
      _id: "61165d631763b40768420e11",
      organizer_id: "6114f11f45dd4c2254e26258",
      attendee_id: {
        _id: "611516d597606525389aa383",
        user_type: "attendee",
        fname: "Sameer",
        lname: "Rana",
        email: "sameer@attendee.com",
        password: "123",
        address: "ranchor line",
        dob: "2000-07-28T00:00:00.000Z",
        postal: 22454,
        contact: 3309564758,
        company: "MIcroHoft",
      },
      event_id: "61161ca978afcd1a187e91ab",
      ticket_no: "000001",
      month: 7,
    },
  ]);

  useEffect(() => {
    const org_id = user._id;
    axios
      .get(
        `${ServerURL}/api/dashboard/getAttendeesDataForManagementTable/${org_id}`
      )
      .then((tableData) => setManagementTableData(tableData.data));
  }, []);

  return (
    <>
      <Col lg="6">
        <Card>
          <CardHeader>
            <div className="tools float-right">
              <UncontrolledDropdown>
                <DropdownToggle
                  caret
                  className="btn-icon"
                  color="link"
                  data-toggle="dropdown"
                  type="button"
                >
                  <i className="tim-icons icon-settings-gear-63" />
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Action
                  </DropdownItem>
                  <DropdownItem
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Another action
                  </DropdownItem>
                  <DropdownItem
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Something else
                  </DropdownItem>
                  <DropdownItem
                    className="text-danger"
                    href="#pablo"
                    onClick={(e) => e.preventDefault()}
                  >
                    Remove Data
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </div>
            <CardTitle tag="h5">Booking Management Table</CardTitle>
          </CardHeader>
          <CardBody>
            <Table responsive>
              <thead className="text-primary">
                <tr>
                  <th className="text-center">#</th>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Address</th>
                  <th className="text-right">Joining Month</th>
                  <th className="text-right">Actions</th>
                </tr>
              </thead>
              <tbody>
                {managementTableData.map((data) => (
                  <tr>
                    <td className="text-center">
                      <div className="photo">
                        <img
                          alt="..."
                          src={require("assets/img/default-avatar.png").default}
                        />
                      </div>
                    </td>
                    <td>
                      {data.attendee_id.fname + " " + data.attendee_id.lname}
                    </td>
                    <td>{data.attendee_id.email}</td>
                    <td className="text-center">{data.attendee_id.address}</td>
                    <td className="text-right">{data.month}</td>
                    <td className="text-right">
                      <Button
                        className="btn-link btn-icon btn-neutral"
                        color="success"
                        id="tooltip618296632"
                        size="sm"
                        title="Refresh"
                        type="button"
                      >
                        <i className="tim-icons icon-refresh-01" />
                      </Button>
                      <UncontrolledTooltip delay={0} target="tooltip618296632">
                        Tooltip on top
                      </UncontrolledTooltip>
                      <Button
                        className="btn-link btn-icon btn-neutral"
                        color="danger"
                        id="tooltip707467505"
                        size="sm"
                        title="Delete"
                        type="button"
                      >
                        <i className="tim-icons icon-simple-remove" />
                      </Button>
                      <UncontrolledTooltip delay={0} target="tooltip707467505">
                        Tooltip on top
                      </UncontrolledTooltip>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default ManagementTable;
