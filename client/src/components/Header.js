import { Link } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';

export default props => {
    return (
        <nav class="sticky-top p-4 mb-4 bg-info">
            <div class="d-flex justify-content-between align-items-end">
                <Link class="display-4 text-white" to={"/"}>Pet Shelter</Link>
                <div class="btn-group" role="group" >
                    <Link class="btn btn-dark" to={"/pets/all"}>Adopt</Link>
                    <Link class="btn btn-dark" to={"/pets/new"}>Surrender</Link>
                    <Link class="btn btn-dark" to={"/about"}>About</Link>
                    <Link class="btn btn-dark" to={"/contact"}>Contact</Link>
                    <Link class="btn btn-light text-info" to={"/donate"}>Donate</Link>
                </div>
            </div>
        </nav>
    )
}

