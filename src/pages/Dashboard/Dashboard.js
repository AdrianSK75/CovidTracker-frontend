import { Link } from "react-router-dom";
import { Loading } from "../components/Loading";
import {BoardTable} from "./BoardTable"
import NavBar from "../components/NavBar";
import { DashboardLogic } from "./DashboardLogic";

export const Dashboard = () => {
        const {data, inside, handleSubmit, error, user} = DashboardLogic();     
        return (
            <>
            <NavBar></NavBar>
              <div class= "row justify-content-md-center">
                  <div class="col-md-auto">
                      <h1> Groups Dashboard </h1>
                      <Link to = "/group/create" className = "btn btn-primary"> Create a group </Link>
                      <BoardTable
                        data = {data}
                        is_inside = {inside}
                        handleSubmit = {handleSubmit}
                      ></BoardTable>
                      {error.length > 0 || data.length === 0 || user.token === null ? <Loading/> : null}
                  </div>
              </div></>
        );

}