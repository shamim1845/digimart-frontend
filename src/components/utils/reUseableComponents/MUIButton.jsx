import { styled as btn } from "@mui/material/styles";
import Button from "@mui/material/Button";

const MUIButton = btn(Button)({
  backgroundColor: "tomato",
  width: "100%",
  color: "var(--text-primary)",
  fontFamily: "Poppins",
  fontSize: "1.6rem",
  padding: "1rem 3rem",
  margin: "2rem 0 1rem",
  "&:hover": {
    backgroundColor: "#A9333A",
  },
});

export default MUIButton;
