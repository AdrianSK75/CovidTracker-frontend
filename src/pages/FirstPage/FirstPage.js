import { Link } from "react-router-dom";


const FirstPage = () => {
        return (
            <>
            <div class= "row justify-content-md-center">
                <div class="col-md-auto">
                    <Link to = '/login' className="btn btn-success">  Are you ready?  </Link>
                </div>
            </div>
            </>
        );
}
export default FirstPage;