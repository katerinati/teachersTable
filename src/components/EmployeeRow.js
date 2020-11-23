import React from "react"
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import Checkbox from "@material-ui/core/Checkbox";
import {withStyles} from "@material-ui/core/styles";




const styles = {
  checkbox: {
    "&:hover": {
      backgroundColor: "#ff732b1c",
    },
    "&.Mui-checked.MuiCheckbox-colorSecondary": {
      color: "#ff732b"
    }
  },
  rowSelected: {
    backgroundColor: "#ff732b1c"
  }
};


const EmployeeRow = ({data, classes, onSelected, isSelected}) => {

  return (
    <TableRow key={data.id} className={isSelected && classes.rowSelected}>
      <TableCell padding="checkbox">
        <Checkbox
          classes={{
            root: classes.checkbox,
            checked: classes.checked
          }}
          checked={isSelected}
          onChange={() => onSelected(data.id)}/>
      </TableCell>
      <TableCell component="th" id={data.id} scope="row">
        {data.name}
      </TableCell>
      <TableCell>{data.lastName}</TableCell>
      <TableCell>{data.age}</TableCell>
    </TableRow>
  )
};
export default withStyles(styles)(EmployeeRow)
