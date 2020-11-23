import React, {useState} from "react"
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Checkbox from "@material-ui/core/Checkbox";
import TableContainer from "@material-ui/core/TableContainer";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import {withStyles} from "@material-ui/core/styles";


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

const styles = {
  checked: {},
  wrapper: {
    width: "100%",
    maxWidth: "920px",
    display: "grid",
    gridTemplateColumns: "1fr 2fr",
    gridColumnGap: "20px"
  },
  selectedWrapper: {
    background: "#fff",
    boxShadow: "0 10px 20px 0 rgba(0,0,0,.08)",
    padding: "10px"
  },
  tableWrapper: {
    background: "#fff",
    boxShadow: "0 10px 20px 0 rgba(0,0,0,.08)"
  },
  checkbox: {
   "&:hover": {
     backgroundColor: "#ff732b1c"
   },
   "&$checked": {
     color: "blue"
   }
  }
};


const EmployeeCard = ({data, classes}) => {
  const [selectedRowsId, setSelectedRowsId] = useState([]);


  console.log(styles);
  return (
    <div className={classes.wrapper}>

      <div className={classes.selectedWrapper}>
        <h2>Выбранные преподаватели</h2>
        {
          data
            .filter(item => selectedRowsId.some(element => element === item.id))
            .map(el => el.name)
            .join(", ")
        }
      </div>
      <TableContainer className={classes.tableWrapper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox
                  classes={{
                    root: classes.checkbox,
                    checked: classes.checked}
                  }
                  checked={selectedRowsId.length === data.length}
                  onChange={() => {
                    if (selectedRowsId.length === data.length) {
                      setSelectedRowsId([])
                    } else {
                      const ids = data.map(el => el.id);
                      setSelectedRowsId(ids)
                    }
                  }}
                />
              </TableCell>
              {headData.map((el) => (
                <TableCell
                  key={el.id}
                >
                  {el.label}

                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {
              data.map((el) => (
                <TableRow key={el.id}>
                  <TableCell padding="checkbox">
                    <Checkbox
                      classes={{
                        root: classes.checkbox,
                        checked: classes.checked}
                      }
                      checked={selectedRowsId.some((item) => item === el.id)} onChange={() => {
                      if (selectedRowsId.some(item => item === el.id)) {
                        const copy = [...selectedRowsId];
                        const indexEl = copy.findIndex((item) => item === el.id);
                        copy.splice(indexEl, 1);
                        setSelectedRowsId(copy)
                      } else {
                        setSelectedRowsId([...selectedRowsId, el.id])
                      }
                    }}/>
                  </TableCell>
                  <TableCell component="th" id={el.id} scope="row" padding="none">
                    {el.name}
                  </TableCell>
                  <TableCell>{el.lastName}</TableCell>
                  <TableCell>{el.age}</TableCell>
                </TableRow>
              ))
            }
          </TableBody>
        </Table>

      </TableContainer>

    </div>
  )
};
export default withStyles(styles)(EmployeeCard)
