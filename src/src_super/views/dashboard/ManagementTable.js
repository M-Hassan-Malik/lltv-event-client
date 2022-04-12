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
import { ServerURL } from "../../../url";

const ManagementTable = (props) => {
  const { title } = props;
  // const user = useSelector((state) => state.userReducer.user);
  const [managementTableData, setManagementTableData] = useState([
    {
      _id: "",
      organizer_id: "",
      attendee_id: {
        _id: "",
        user_type: "",
        fname: "",
        lname: "",
        email: "",
        password: "",
        address: "",
        dob: "",
        postal: "",
        contact: "",
        company: "",
      },
      event_id: "",
      ticket_no: "",
      month: "",
    },
  ]);

  useEffect(() => {
    let data = {
      limit: "",
      startFrom: "",
    };
    title === "Manage Organizers"
      ? axios
          .get(`${ServerURL}/api/super/organizers/getAdmins`, {
            data: JSON.stringify(data),
          })
          .then((tableData) => setManagementTableData(tableData.data))
      : axios
          .get(`${ServerURL}/api/super/attendees/getAttendees`, {
            data: JSON.stringify(data),
          })
          .then((tableData) => setManagementTableData(tableData.data));
  }, []);

  return (
    <>
      <Col lg="6" className="col-management-table">
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
            <CardTitle tag="h5">{title}</CardTitle>
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
                {managementTableData.map((data, i) => (
                  <tr key={i}>
                    <td className="text-center">
                      <div className="photo">
                        <img
                          alt="..."
                          src={require("assets/img/default-avatar.png").default}
                        />
                      </div>
                    </td>
                    <td>Hassan</td>
                    <td>admin@admin.com</td>
                    <td className="text-center">nee town karachi</td>
                    <td className="text-right">12-Oct-2020</td>
                    <td className="text-right" id="management-table-actions">
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
