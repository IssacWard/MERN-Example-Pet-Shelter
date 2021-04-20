import 'bootstrap/dist/css/bootstrap.min.css';

export default () => {
    return (
        <div>
            <span class="h3 d-flex justify-content-center p-2 font-weight-bold">Contact:</span>
            <div class="d-flex justify-content-center p-2">

                <div class="col-6">
                    <h2 class="d-flex justify-content-center lead font-weight-bold bg-info p-2">Title 1:</h2>
                    <p class="p-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>

                <div class="col ">
                    <h2 class="d-flex justify-content-center lead font-weight-bold bg-info p-2">Information:</h2>
                    <div class="row d-flex justify-content-center">
                        <div class="col-4 text-right  mt-4">
                            <p class="font-weight-bold">Address:</p>
                            <br />
                            <p  class="font-weight-bold">Phone:</p>
                        </div>
                        <div class="col-6  mt-4">
                            <p>
                            0000 Road St.
                            <br/>
                            City, State 0000
                            </p>
                            <p>(000)-000-0000</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}