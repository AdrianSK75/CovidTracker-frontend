import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import { Form } from "./Form";

const NewGame = () => {
        return (
            <>
            <Link to = {'/groups'} >Back to Dashboard</Link>
            <div class= "row justify-content-md-center">
                <div class="col-md-auto">
                    <h1> NEW GAME </h1>
                    <Form />         
                </div>
            </div>
            </>
        );
}
export default NewGame;