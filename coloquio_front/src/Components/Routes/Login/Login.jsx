import React from "react";
import "./Login.css"; // Assuming this is your CSS file with styles
import Navbar from "../../Layout/NavBar/Navbar";
import axios from "axios";

const Login = () => {
  const handleGoogleLogin = async () => {
    try {
      // Make a request to the backend server to initiate the Google OAuth2 flow
      const response = await axios.get("/auth/google");
      window.location.href = response.data.redirectUrl;
    } catch (error) {
      console.error("Error initiating Google login:", error);
    }
  };

  const handleFacebookLogin = async () => {
    try {
      // Make a request to the backend server to initiate the Facebook OAuth2 flow
      const response = await axios.get("/auth/facebook");
      window.location.href = response.data.redirectUrl;
    } catch (error) {
      console.error("Error initiating Facebook login:", error);
    }
  };
  return (
    <div>
      <Navbar />
      <section className="background-radial-gradient overflow-hidden">
        <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
          <div className="row gx-lg-5 align-items-center mb-5">
            <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
              <h1
                className="my-5 display-5 fw-bold ls-tight"
                style={{ color: "hsl(218, 81%, 95%)" }}
              >
                Coloquio de Vinculación <br />
                <span style={{ color: "hsl(218, 81%, 75%)" }}>CVP 2024</span>
              </h1>
              <p
                className="mb-4 opacity-70"
                style={{ color: "hsl(218, 81%, 85%)" }}
              >
                Aviso: Acceso Restringido
              </p>
              <p
                className="mb-4 opacity-70"
                style={{ color: "hsl(218, 81%, 85%)" }}
              >
                Solo los administradores del evento tienen permiso para iniciar
                sesión. Si necesitas acceso como administrador, por favor
                contacta al equipo organizador. Gracias por tu comprensión.
              </p>
            </div>

            <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
              <div
                id="radius-shape-1"
                className="position-absolute rounded-circle shadow-5-strong"
                style={{ background: "radial-gradient(#44006b, #ad1fff)" }}
              ></div>
              <div
                id="radius-shape-2"
                className="position-absolute shadow-5-strong"
                style={{
                  borderRadius: "38% 62% 63% 37% / 70% 33% 67% 30%",
                  background: "radial-gradient(#44006b, #ad1fff)",
                }}
              ></div>

              <div className="card bg-glass">
                <div className="card-body px-4 py-5 px-md-5">
                  <div className="container">
                    <h2 className="text-center p-4">Iniciar Sesión</h2>
                  </div>
                  <form>
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="form3Example3"
                        className="form-control"
                        placeholder="example@example.com"
                      />
                      <label className="form-label" htmlFor="form3Example3">
                        Correo electronico
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form3Example4"
                        className="form-control"
                        placeholder="********"
                      />
                      <label className="form-label " htmlFor="form3Example4">
                        Password
                      </label>
                    </div>

                    <div className="form-check d-flex justify-content-left mb-4">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        value=""
                        id="form2Example33"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="form2Example33"
                      >
                        Recordar contraseña
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-primary btn-block mb-4 col-12"
                    >
                      Sign up
                    </button>

                    <div className="container-fluid">
                      <div className="row">
                        <button
                          onClick={handleGoogleLogin}
                          className="btn btn-light btn-block col-12"
                        >
                          Login with Google
                        </button>
                      </div>
                      <div className="row mt-2">
                        <button
                          onClick={handleFacebookLogin}
                          className="btn btn-light btn-block col-12"
                        >
                          Login with Facebook
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
