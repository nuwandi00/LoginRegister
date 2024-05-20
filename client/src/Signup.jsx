import {usestate} from React;

function Signup() {
  return (
    <div className="d-flex justify-content-center align-items-center bg-secondary vh-100">
        <div className="bg-white p-3 rounded w-25">
            <h2>Register</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="email">
                    <strong>Name</strong>
                    </label>
                    <input
                    type="text"
                    placeholder="Enter your name"
                    autocomplete="off"
                    name="email"
                    className="form-control rounded-0"
                    />
                </div>
                <div className="mb-3">
                <label htmlFor="email">
                <strong>Name</strong>
                    </label>
                    <input
                    type="text"
                    placeholder="Enter your Email"
                    autocomplete="off"
                    name="email"
                    className="form-control rounded-0"
                    />
                </div>
                <div className="mb-3">
                <label htmlFor="email">
                <strong>Name</strong>
                    </label>
                    <input
                    type="text"
                    placeholder="Enter your Email"
                    autocomplete="off"
                    name="email"
                    className="form-control rounded-0"
                    />
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">
                        Register
                        </button>
                        <p>Already Have an Account</p>
                        <button className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
                    Login
                    </button>
            </form>
        </div>
    </div>

  );
}

export default Signup