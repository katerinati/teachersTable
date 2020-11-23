import React, {useState, useEffect} from "react"
import {connect} from "react-redux";
import EmployeeRow from "../components/EmployeeRow";
import {withStyles} from "@material-ui/core/styles";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell/TableCell";
import Checkbox from "@material-ui/core/Checkbox/Checkbox";
import TableBody from "@material-ui/core/TableBody";
import {fetchSearchResults} from "../store";
import CircularProgress from "@material-ui/core/CircularProgress";

const headData = [
  {
    id: 1,
    label: "Имя"
  },
  {
    id: 2,
    label: "Фамилия"
  },
  {
    id: 3,
    label: "Возраст"
  }
];

const styles = theme => ({
  wrapper: {
    display: "grid",
    gridTemplateColumns: "1fr 2fr",
    gridColumnGap: "40px",
    width: "100%",
    paddingTop: "40px",
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: "1fr",
      gridRowGap: "20px",
      paddingTop: "30px",
    }
  },
  selectedWrapper: {
    background: "#fff",
    boxShadow: "0 10px 20px 0 rgba(0,0,0,.08)",
    padding: "10px",
  },
  tableWrapper: {
    width: "100%",
    background: "#fff",
    boxShadow: "0 10px 20px 0 rgba(0,0,0,.08)"
  },
  checkbox: {
    "&:hover": {
      backgroundColor: "#ff732b1c",
    },
    "&.Mui-checked": {
      color: "#ff732b"
    }
  },
  bold: {
    fontWeight: "bold"
  },
  list: {
    display: "flex",
    flexDirection: "column"
  },
  loader: {
    alignSelf: "center",
    justifySelf: "center",
    color: "#ff732b"
  }
});

const EmployeeTable = ({searchResults, classes, fetchSearchResults}) => {
  const [selectedRowsId, setSelectedRowsId] = useState([]);

  useEffect(() => {
    fetchSearchResults();

  }, [fetchSearchResults]);
  const selectedTeachers = searchResults
    .filter(item => selectedRowsId.some(element => element === item.id))
    .map(el => el.name)
    .join(", ");

  return (

    <div className={classes.wrapper}>

      <div>
        <h3>Выбранные преподаватели:</h3>
        <div className={classes.selectedWrapper}>

          <p>{selectedTeachers.length ? selectedTeachers : "Выберите преподавателей в таблице"}</p>
        </div>
      </div>

      <div className={classes.list}>
        <h3 className={classes.pageTitle}>Все преподаватели:</h3>
        {
          searchResults.length
            ?
            <TableContainer className={classes.tableWrapper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell padding="checkbox">
                      <Checkbox
                        classes={{
                          root: classes.checkbox,
                          checked: classes.checked
                        }}
                        checked={selectedRowsId.length === searchResults.length}
                        onChange={() => {
                          if (selectedRowsId.length === searchResults.length) {
                            setSelectedRowsId([])
                          } else {
                            const ids = searchResults.map(el => el.id);
                            setSelectedRowsId(ids)
                          }
                        }}
                      />
                    </TableCell>
                    {headData.map((el) => (
                      <TableCell
                        key={el.id}
                        className={classes.bold}
                      >
                        {el.label}

                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    searchResults.map((el) => (
                      <EmployeeRow
                        data={el}
                        onSelected={(id) => {
                          if (selectedRowsId.some(item => item === id)) {
                            const copy = [...selectedRowsId];
                            const indexEl = copy.findIndex((item) => item === id);
                            copy.splice(indexEl, 1);
                            setSelectedRowsId(copy)
                          } else {
                            setSelectedRowsId([...selectedRowsId, id])
                          }
                        }}
                        isSelected={selectedRowsId.some((item) => item === el.id)}/>
                    ))
                  }
                </TableBody>
              </Table>
            </TableContainer>
            :
            <CircularProgress className={classes.loader}/>
        }
      </div>

    </div>
  )
};

const mapStateToProps = (state) => {
  return {
    searchResults: state
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchSearchResults: () => dispatch(fetchSearchResults())
  }
};

export default withStyles(styles)(connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployeeTable));
