import React from "react"
import {connect} from "react-redux";
import EmployeeCard from "../EmployeeCard/EmployeeCard";
import {withStyles} from "@material-ui/core/styles";

const styles = {
  wrapper: {
    minHeight: "100vh",
    padding: '16px 0 0 20px',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    background: "#F6F8F9"
  },
  link: {
    cursor: "pointer",
    alignSelf: "flex-start"
  },
  header: {
    width: "162px",
    height: "40px",
    background: "url(data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjQwIiB3aWR0aD0iMTYyIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDIpIiBmaWxsPSJub25lIj48cGF0aCBkPSJNMTAgMTRjMi44MzgtMS43NjkgNS4yNjctMi4yMTggOC0yLTEuMDc1LjY1MS0xLjUxOS45ODEtMiAxIC44NjYuNCAxLjY2NS40MyAzIDEtLjA5MS0uMjcuMjY0LS4xNSAxIDAgMS40MjYtMy42MjcgNC4yMzktNS43MjYgOC02TDE1IDAgMiA4YzMuNjcyLjI3NCA2LjQyNiAyLjI4MyA4IDZ6IiBmaWxsPSIjMzMzIi8+PHBhdGggZD0iTTEwLjU1NSAxMy41YzIuNTg3LTEuNSAyLjkyOC0xLjgyNSA1LjE2Mi0xLjE3OC0uNTg4LjIwNiAxLjA0MS40MTMuNzQ3LjkxMy42NzYtLjA4OCAxLjQ3LS4wNTkgMi4zNTIuMTQ3LjM1My4wODguNzA2LjIwNiAxLjA1OC4zNTMuNDctLjkxMiAxLTEuNzA2IDEuNTg4LTIuNDEydi0xLjAyOWMtLjE3Ni0xLjQ3MS0yLjg1Mi0yLjY0Ny02LjE3NC0yLjY0Ny0zLjMyMiAwLTUuOTk4IDEuMTc2LTYuMTc0IDIuNjQ3djEuMDI5Yy41MjkuNjQ3IDEgMS4zNTMgMS40NDEgMi4xNzZ6IiBmaWxsPSIjNTM1MzUzIi8+PHBhdGggZD0iTTE5LjM1NSAxM2MtLjIwMS4yNjQtLjU0Ny4xMTYtLjk2OCAwLS43OTEtLjE1LTEuNTctLjE4LTEuOTM1IDAtLjAwOS0uNTkzLjQyMy0uOTE4Ljk2OC0xLTIuMTg5LS43NzUtNC41NTQtLjMzMi02Ljc3NCAxQzguMjIyIDkuMDY4IDQuNzYgNyAuMDAxIDd2MjFsMTQuNTE2IDUgMTUuNDg0LTVWN2MtNC44NzUgMC04LjM2NSAyLjEyNy0xMC42NDUgNnoiIGZpbGw9IiNmZjczMmIiLz48cGF0aCBkPSJNMCAyOGwxNC41MTYgNUwzMCAyOHYzbC0xNS40ODQgOUwwIDMxem0yLjA1OC00Ljc2NVY5LjQxMWMyLjU1OCAwIDQuODUxIDEuNzY1IDYuOTA5IDUuMjk0LjUgMS4wODguNSAxLjc2NSAwIDIuMDU5LS43MzUuNDQxLTEuNjE3LS4xNDctMi4zNTItMS43NjUtLjc5NC42NzYtMS4yMDUgMi4zNTMtMS4yMzUgNS0uMjM1LS42NzYtLjMyMy0xLjQ3MS0uMjM1LTIuMzUzLTIuMjkzLjg4Mi0yLjIzNCAzLjcwNi0zLjA4NyA1LjU4OHptMjYuNDYxIDBWOS40MTFjLTIuNTU4IDAtNC44NTEgMS43NjUtNi45MDkgNS4yOTQgMi45NCAxLjk3MSA1LjIzMyA0Ljc5NCA2LjkwOSA4LjUyOXoiIGZpbGw9IiNmZmRkY2QiLz48ZWxsaXBzZSBjeD0iOC41MjYiIGN5PSIyNS41ODgiIGZpbGw9IiNmZmYiIHJ4PSIyLjk0IiByeT0iMi45NDEiLz48ZWxsaXBzZSBjeD0iMjIuNjM5IiBjeT0iMjUuNTg4IiBmaWxsPSIjZmZmIiByeD0iMi45NCIgcnk9IjIuOTQxIi8+PGVsbGlwc2UgY3g9IjguNTI2IiBjeT0iMjUuNTg4IiBmaWxsPSIjMzMzIiByeD0iMS40NyIgcnk9IjEuNDcxIi8+PGVsbGlwc2UgY3g9IjIyLjYzOSIgY3k9IjI1LjU4OCIgZmlsbD0iIzMzMyIgcng9IjEuNDciIHJ5PSIxLjQ3MSIvPjxlbGxpcHNlIGN4PSIxOS42OTkiIGN5PSIyMC4yOTQiIGZpbGw9IiNlZDRkMTQiIHJ4PSIxLjQ3IiByeT0iMSIvPjxlbGxpcHNlIGN4PSIxMC44NzgiIGN5PSIyMC4yOTQiIGZpbGw9IiNlZDRkMTQiIHJ4PSIxLjQ3IiByeT0iMSIvPjxwYXRoIGQ9Ik0xNi43NTkgMzYuMDI5SDE1Ljczdi0xLjExOGMuOTExLS4yOTQgMS42MTctMS41IDEuNjE3LTIuMTE4IDAtLjczNS0uOTExLTEuMDI5LTIuMDU4LTEuMDI5LTEuMTQ3IDAtMi4wNTguMjk0LTIuMDU4IDEuMDI5IDAgLjY0Ny43MDYgMS44MjQgMS42MTcgMi4xMTh2MS4xMThjLTEuNTI5LS4wMjktMy4yMzQtLjI2NS0zLjM4MS0xLjM4MmEuNDU2LjQ1NiAwIDAwLS41LS4zODIuNDU2LjQ1NiAwIDAwLS4zODIuNWMuMjY1IDEuOTQxIDIuODUyIDIuMTQ3IDQuNzkyIDIuMTQ3aDEuMzgyYS40NTIuNDUyIDAgMDAuNDQxLS40NDEuNDUyLjQ1MiAwIDAwLS40NDEtLjQ0MXoiIGZpbGw9IiMzMzMiLz48cGF0aCBkPSJNMTEuNDY2IDYuOTQxVjIuMjM1TDkuNzAyIDMuMjY0VjYuOTRhMS41ODggMS41ODggMCAwMC0uNjc2IDEuMjk0IDEuNTUgMS41NSAwIDAwMS41NTggMS41NTljLjg1MyAwIDEuNTU4LS43MDYgMS41NTgtMS41NTkgMC0uNTI5LS4yNjUtMS4wMjktLjY3Ni0xLjI5NHoiIGZpbGw9IiM0OGExZTYiLz48cGF0aCBkPSJNNTMuNzg5IDI1LjFDNDkuMTMzIDI1LjEgNDYgMjIuNzMzIDQ2IDE4LjQzMWMwLTQuMjQ0IDMuMTYxLTYuNTgzIDcuNzg5LTYuNjY5di0xLjc2MWgyLjk2djEuNzYxYzQuNTk4LjA4NyA3Ljc4OSAyLjUxMiA3Ljc4OSA2LjY2OSAwIDQuMjQ0LTMuMTkgNi42NC03Ljc4OSA2LjY2OXYyLjI1MmgtMi45NnptMC0yLjc0M3YtNy44NTNjLTMuMTA0LjAyOS00LjY1NiAxLjYxNy00LjY1NiAzLjkyNyAwIDIuNTQxIDEuNjY3IDMuODk4IDQuNjU2IDMuOTI3em0yLjk2LTcuODUzdjcuODUzYzMuMDc1LS4wMjkgNC42NTYtMS4zMjggNC42NTYtMy45MjcgMC0yLjI4MS0xLjQ5NC0zLjg5OC00LjY1Ni0zLjkyN3ptMTUuMDg5IDEuNDcyYzMuNTkzIDAgNS45MiAyLjQ1NCA1LjkyIDUuNzE3cy0yLjMyOCA1LjcxNy01LjkyIDUuNzE3Yy0zLjU5MyAwLTUuOTItMi40NTQtNS45Mi01LjcxN3MyLjMyOC01LjcxNyA1LjkyLTUuNzE3em0wIDguODM1YzEuNzI0IDAgMi45Ni0xLjI0MSAyLjk2LTMuMTE4IDAtMS44NDgtMS4yOTMtMy4xMTgtMi45Ni0zLjExOC0xLjYzOCAwLTIuOTMxIDEuMjEzLTIuOTMxIDMuMTE4IDAgMS44MTkgMS4yMzYgMy4xMTggMi45MzEgMy4xMTh6bTguMzM1LTguNTc1aDIuNzg4djEwLjkxM2gtMi43ODh6bTYuMDkzIDUuMTk3bDQuNjg1IDUuNzE3SDg3LjMzbC00LjMxMS01LjUxNCAzLjkzNy01LjM5OWgzLjUwNnptMTUuMjMyIDQuMWMtLjkyIDEuMjQxLTIuNTU4IDEuOTA2LTQuMzExIDEuOTA2LTMuNTM1IDAtNS44OTItMi4yODEtNS44OTItNS43MTcgMC0zLjE3NiAyLjMyOC01LjcxNyA1LjYzMy01LjcxNyAxLjc4MiAwIDMuMzYzLjQ2MiA0LjM2OCAxLjQ3MmwtMS4yOTMgMi4xOTRjLS44MzMtLjgwOC0xLjcyNC0xLjA2OC0yLjcwMi0xLjA2OC0xLjU1MiAwLTMuMDE4IDEuMTg0LTMuMDE4IDMuMTE4czEuNDk0IDMuMTE4IDMuMTMzIDMuMTE4YzEuMTc4IDAgMi4wOTgtLjU0OSAyLjc4OC0xLjMyOHptNi45ODQgMS44NzdoLS4xNDRjLTMuNzk0IDAtNS44OTItMi40ODMtNS44OTItNS43MTcgMC0yLjk0NSAyLjA2OS01LjcxNyA1Ljg2My01LjcxN2guMTcydi01LjgwM2gyLjc4OHY1LjgwM2guMjAxYzMuNzM2IDAgNS44MzQgMi41MTIgNS44MzQgNS43MTcgMCAzLjI2Mi0xLjg5NyA1LjcxNy01LjgzNCA1LjcxN2gtLjIwMXY0LjU5MWgtMi43ODh6bS0uMDU3LTIuNTk4aC4wODZ2LTYuMjM2aC0uMjAxYy0yLjA0MSAwLTIuODc0IDEuNDQ0LTIuODc0IDMuMTE4LS4wMjkgMS44MTkuOTc3IDMuMTE4IDIuOTg5IDMuMTE4em0yLjg0NS02LjIzNnY2LjIzNmguMDg2YzIuMDEyIDAgMi45Ni0xLjI5OSAyLjk2LTMuMTE4IDAtMS42MTctLjkyLTMuMTE4LTIuODc0LTMuMTE4em0xMy42OC0yLjU5OGMzLjU5MyAwIDUuOTIgMi40NTQgNS45MiA1LjcxN3MtMi4zMjggNS43MTctNS45MiA1LjcxNy01LjkyLTIuNDU0LTUuOTItNS43MTcgMi4zMjgtNS43MTcgNS45Mi01LjcxN3ptMCA4LjgzNWMxLjcyNCAwIDIuOTYtMS4yNDEgMi45Ni0zLjExOCAwLTEuODQ4LTEuMjkzLTMuMTE4LTIuOTYtMy4xMTgtMS42MzggMC0yLjkzMSAxLjIxMy0yLjkzMSAzLjExOCAwIDEuODE5IDEuMjM2IDMuMTE4IDIuOTMxIDMuMTE4em04LjMzNS04LjU3NWgyLjc4OHYxLjAzOWMuNjktLjcyMiAxLjk1NC0xLjI5OSAzLjM2My0xLjI5OSAyLjk4OSAwIDQuOTE1IDIuMzM5IDQuOTE1IDUuNTQzIDAgMy4zMi0yLjI3IDUuODktNS43NDggNS44OS0uOTc3IDAtMS44OTctLjE3My0yLjUyOS0uNTJ2NS4xMWgtMi43ODh6bTIuNzU5IDMuNTUxdjQuNDE3Yy43NDcuNDkxIDEuMzguNjM1IDIuMjk5LjYzNSAxLjkyNiAwIDMuMDQ2LTEuNDE1IDMuMDQ2LTMuMjM0IDAtMS43MzItMS4wMDYtMy4wMDMtMi44NDUtMy4wMDMtLjk0OC0uMDI5LTEuODExLjQzMy0yLjUgMS4xODR6bTkuMDUzIDQuNzY0aDEuMzhjLjc3Ni0xLjAxIDEuMzgtMy4yMzQgMS41MjMtNS42ODhsLjE3Mi0yLjYyN2g4LjAxOHY4LjMxNWgxLjgxMXY1LjEzOWgtMi42NDR2LTIuNTQxaC03LjcwMnYyLjU0MWgtMi41ODd2LTUuMTM5em00LjI1NCAwaDQuMDI0di01LjY4OGgtMi42NDRsLS4wODYgMS4xMjZjLS4yMDEgMi4yODEtLjgwNSAzLjg5OC0xLjI5MyA0LjU2MnoiIGZpbGw9IiMzMzMiLz48L2c+PC9zdmc+)",
    backgroundRepeat: "no-repeat",
  }
};

const EmployeeTable = ({searchResults, classes}) => {

  return (
    <div className={classes.wrapper}>
      <a href="https://foxford.ru/" className={classes.link}>
        <header className={classes.header}/>
      </a>
      <h1>Наши преподаватели</h1>
      <EmployeeCard data={searchResults}/>
    </div>
  )
};
const mapStateToProps = (state) => {
  return {
    searchResults: state
  }
};
export default withStyles(styles)(connect(
  mapStateToProps
)(EmployeeTable));
