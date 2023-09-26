import { styled as btn } from "@mui/material/styles";
import Button from "@mui/material/Button";

const MUIButton = btn(Button)({
  backgroundColor: "tomato",
  color: "var(--text-primary)",
  fontSize: "1.4rem",
  fontWeight: "600",
  padding: "1rem 2rem",
  width: "100%",
  "&:hover": {
    backgroundColor: "#f0563a",
  },
});

export default MUIButton;
