import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import LoginForm from "../app/(auth)/login/components/LoginForm";
import { GoogleOAuthProvider } from "@react-oauth/google";

// jest.mock("../../components/GLoginButton", () => () => (
//   <button>Mocked Google Login</button>
// ));

describe("Login", () => {
  it("renders the login form", () => {
    render(
      <GoogleOAuthProvider clientId="375974338673-7bq5hv0q8178djj2tjv75k15sr5klhue.apps.googleusercontent.com">
        <LoginForm />
      </GoogleOAuthProvider>
    );
    const login_form = screen.getByTestId("login_form");

    expect(login_form).toBeInTheDocument();
  });
});
