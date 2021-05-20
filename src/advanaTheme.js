import { createMuiTheme } from "@material-ui/core/styles";
import { grey, indigo, cyan, orange } from "@material-ui/core/colors";

const advanaTheme = createMuiTheme({
  palette: {
    primary: {
      main: indigo[700],
    },
    secondary: {
      main: cyan[600],
      contrastText: "#ffffff",
    },
    info: {
      main: orange[600],
      contrastText: "#ffffff",
    },
  },
});

advanaTheme.props = {
  MuiButton: {
    disableElevation: true,
  },
  MuiInputLabel: {
    shrink: false,
  },
  MuiInput: {
    disableUnderline: true,
  },
  MuiTooltip: {
    arrow: true,
  },
};

advanaTheme.overrides = {
  MuiButton: {
    root: {
      minWidth: "100px",
      padding: "10px 20px",
      borderRadius: 0,
      textTransform: "uppercase",
      border: "2px solid transparent",
      color: "disabled",
      "&:hover,& .selected": {
        backgroundColor: "transparent",
        color: advanaTheme.palette.secondary.main,
        borderBottom: `2px solid ${cyan[600]}`,
      },
    },
    containedPrimary: {
      "&:hover": {
        backgroundColor: "transparent",
        color: advanaTheme.palette.primary.main,
        border: `2px solid ${indigo[700]}`,
        fontWeight: "700",
      },
    },
    outlinedPrimary: {
      border: `2px solid ${indigo[700]}`,
      "&:hover": {
        color: "#ffffff",
        backgroundColor: `${indigo[700]}`,
        border: "2px solid transparent",
      },
    },
    containedSecondary: {
      fontWeight: 300,
    },
  },
  MuiInputLabel: {
    root: {
      textTransform: "uppercase",
      fontSize: "1.5rem",
    },
  },
  MuiInput: {
    root: {
      top: advanaTheme.spacing(2),
      borderBottom: `1px solid ${grey[500]}`,
      padding: advanaTheme.spacing(1),
      "&$focused": {
        borderBottom: `2px solid ${advanaTheme.palette.primary.main}`,
      },
    },
  },
  MuiTooltip: {
    tooltip: {
      backgroundColor: "#fff",
      border: `2px solid ${advanaTheme.palette.primary.main}`,
      color: advanaTheme.palette.primary.main,
    },
    arrow: {
      color: advanaTheme.palette.primary.main,
    },
  },
};

export default advanaTheme;
