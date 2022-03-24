import React from "react";
import Fade from "@material-ui/core/Fade";

// eslint-disable-next-line react/display-name
const MuiFade = React.forwardRef((props, ref) => {
  return <Fade  ref={ref} {...props} />;
});

export default MuiFade;
