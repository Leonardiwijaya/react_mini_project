import { Button } from "antd";
import { authAdmin } from "../utils/auth";


export function Account(props) {
    const td1 = {
        color: "grey",
      };
      
      const td2 = {
        paddingLeft: "5px",
      };
    const admin = authAdmin.isAuthorized();
    return (
      <div style={{ margin: "30px" }}>
        <h4>Account info</h4>
        <table>
          <tr>
            <td style={td1}>Name:</td>
            <td style={td2}>{admin.name}</td>
          </tr>
          <tr>
            <td style={td1}>Email:</td>
            <td style={td2}>{admin.email}</td>
          </tr>
          <tr>
            <td style={td1}>Phone:</td>
            <td style={td2}>{admin.phone}</td>
          </tr>
          <tr>
            <td style={td1}>Role:</td>
            <td style={td2}>{admin.role}</td>
          </tr>
        </table>
        <Button
          type="primary"
          htmlType="button"
          onClick={() => {
            authAdmin.logout();
          }}
        >
          Logout
        </Button>
      </div>
    );
  }