import { Link } from '@reach/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

export default props => {
    return (
        <nav class="p-4 mt-4 bg-dark text-white footer">
            <div class="d-flex justify-content-between">
                <div class="container-fluid">
                    <div class="row">
                        <div class="col ">
                            <h2 class="d-flex justify-content-center lead font-weight-bold bg-info p-2">Contact:</h2>
                            <div class="row d-flex justify-content-center">
                                <div class="col-4 text-right  mt-2">
                                    <p class="font-weight-bold">Address:</p>
                                    <br />
                                    <p  class="font-weight-bold">Phone:</p>
                                </div>
                                <div class="col-6  mt-2">
                                    <p>
                                    0000 Road St.
                                    <br/>
                                    City, State 0000
                                    </p>
                                    <p>(000)-000-0000</p>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="col">
                            <h2 class="d-flex justify-content-center lead font-weight-bold bg-info p-2">Adoption Hours:</h2>
                            <table class="d-flex justify-content-center table-sm table-borderless text-white">
                                <tbody>
                                    <tr>
                                        <th>Mon</th>
                                        <td>11am-6pm</td>
                                    </tr>
                                    <tr>
                                        <th>Tues</th>
                                        <td>11am-6pm</td>
                                    </tr>
                                    <tr>
                                        <th>Wed</th>
                                        <td>11am-6pm</td>
                                    </tr>
                                    <tr>
                                        <th>Thurs</th>
                                        <td>Closed</td>
                                    </tr>
                                    <tr>
                                        <th>Fri</th>
                                        <td>11am-6pm</td>
                                    </tr>
                                    <tr>
                                        <th>Sat</th>
                                        <td>12pm-3pm</td>
                                    </tr>
                                    <tr>
                                        <th>Sun</th>
                                        <td>12pm-3pm</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div class="col">
                            <h2 class="d-flex justify-content-center lead font-weight-bold bg-info p-2">Navigation:</h2>
                            <div class="row d-flex justify-content-center">
                                <div class="col-6  mt-2">
                                    <Link class="btn btn-outline-info btn-block font-weight-bold " to={"/pets/all"}>Adopt</Link>
                                    <br />
                                    <Link class="btn btn-outline-info btn-block font-weight-bold" to={"/about"}>About</Link>
                                </div>
                                <div class="col-6  mt-2">
                                    <Link class="btn btn-outline-info btn-block font-weight-bold" to={"/pets/new"}>Surrender</Link>
                                    <br />
                                    <Link class="btn btn-outline-info btn-block font-weight-bold" to={"/contact"}>Contact</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}
