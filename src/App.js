import React from "react"
import EmployeeTable from "./containers/EmployeeTable.js";
import {Provider} from "react-redux";
import store from "./store";
import withStyles from "@material-ui/core/styles/withStyles";
import Header from "./components/Header";
import CssBaseline from "@material-ui/core/CssBaseline";

const styles = {
  "@global": {
    "body": {
      background: "#F6F8F9"
    }
  },
  wrapper: {
    minHeight: "100vh",
    width: "100%",
    maxWidth: "920px",
    margin: "0 auto",
    padding: '20px',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
};

const App = ({classes}) => {
  return (
    <Provider store={store}>
      <CssBaseline/>
      <div className={classes.wrapper}>
        <Header/>
        <EmployeeTable/>
      </div>
    </Provider>
  );
};

export default withStyles(styles)(App);
