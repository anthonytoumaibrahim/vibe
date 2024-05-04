import { LegacyRef, useRef } from "react";
import { logout } from "../../actions";
import Button from "@/components/Button";

const LogoutButton = () => {
  const logoutBtnRef: LegacyRef<HTMLButtonElement> = useRef(null);

  const handleLogout = async () => {
    logoutBtnRef!.current!.disabled = true;
    await logout();
  };

  return (
    <Button
      variant="outlined"
      color="error"
      size="small"
      onClick={() => handleLogout()}
      ref={logoutBtnRef}
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
