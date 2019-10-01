import React from "react";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import Container from "../container";

// const useStyles = makeStyles(theme => ({
//   textField: {
//     marginLeft: theme.spacing(1),
//     marginRight: theme.spacing(1),
//     width: 200
//   }
// }));
// const classes = useStyles();


const scenarioHeading = (
  <>Before we get started... Lets give your scenario a name</>
);

const scenarioContent = (
  <TextField required id="standard-required" label="Required" margin="normal" />
);
export const ScenarioName = () => {
    return (
        <Container heading={scenarioHeading} content={scenarioContent} />
      );
} 
  
// export default ScenarioName;
{/* <Container heading={scenarioHeading} content={scenarioContent} /> */}