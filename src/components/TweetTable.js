import React from "react";
import PropTypes from "prop-types";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import TableSortLabel from "@material-ui/core/TableSortLabel";

function desc(a, b, orderBy) {
  if (b[orderBy] < a[orderBy]) {
    return -1;
  }
  if (b[orderBy] > a[orderBy]) {
    return 1;
  }
  return 0;
}

function stableSort(array, cmp) {
  const stabilizedThis = array.map((el, index) => [el, index]);
  stabilizedThis.sort((a, b) => {
    const order = cmp(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getSorting(order, orderBy) {
  return order === "desc"
    ? (a, b) => desc(a, b, orderBy)
    : (a, b) => -desc(a, b, orderBy);
}

const headCells = [
  {
    id: "name",
    numeric: false,
    disablePadding: false,
    label: "Username"
  },
  { id: "content", numeric: false, disablePadding: false, label: "Content" },
  { id: "polarity", numeric: true, disablePadding: false, label: "Polarity" },
  {
    id: "normalizedSentiment",
    numeric: false,
    disablePadding: false,
    label: "Sentiment"
  },
  { id: "favorites", numeric: true, disablePadding: false, label: "Favorites" },
  { id: "retweets", numeric: true, disablePadding: false, label: "Retweets" }
];
function EnhancedTableHead(props) {
  const { classes, order, orderBy, onRequestSort } = props;
  const createSortHandler = property => event => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow className={classes.tableHead}>
        {headCells.map(headCell => (
          <TableCell
            className={classes.headCell}
            key={headCell.id}
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
              classes={{
                root: classes.headCellLabel,
                active: classes.headCellActive,
                icon: classes.headCellIcon,
                iconDirectionDesc: classes.headCellIconDesc,
                iconDirectionAsc: classes.headCellIconAsc
              }}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <span
                  className={clsx(classes.visuallyHidden, classes.tableHead)}
                >
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </span>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}

EnhancedTableHead.propTypes = {
  classes: PropTypes.object.isRequired,
  onRequestSort: PropTypes.func.isRequired,
  order: PropTypes.oneOf(["asc", "desc"]).isRequired,
  orderBy: PropTypes.string.isRequired,
  rowCount: PropTypes.number.isRequired
};

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  tableContainer: {
    overflowX: "auto"
  },
  table: {
    minWidth: 800,
    borderCollapse: "separate"
  },
  visuallyHidden: {
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    top: 20,
    width: 1
  },
  headCell: {
    backgroundColor: theme.palette.primary.main,
    "&:first-of-type": {
      paddingLeft: theme.spacing(4),
      borderTopLeftRadius: theme.radius,
      borderBottomLeftRadius: theme.radius
    },
    "&:last-of-type": {
      paddingRight: theme.spacing(4),
      borderTopRightRadius: theme.radius,
      borderBottomRightRadius: theme.radius
    }
  },
  headCellLabel: {
    color: theme.palette.primary.contrastText + " !important",
    "&:hover": {
      color: theme.palette.primary.contrastText
    }
  },
  headCellIcon: {
    color: theme.palette.primary.contrastText
  },
  headCellActive: {
    color: theme.palette.primary.contrastText
  },
  headCellIconDesc: {
    color: theme.palette.primary.contrastText + " !important"
  },
  headCellIconAsc: {
    color: theme.palette.primary.contrastText + " !important"
  }
}));

export default function TweetTable({ tweets }) {
  let rows = [];
  tweets.edges.forEach(({ node }) => rows.push(node));

  const classes = useStyles();
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("username");
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = event => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const emptyRows =
    rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);

  return (
    <div className={classes.root}>
      <div
        className={classes.tableContainer}
        style={{
          height: 750
        }}
      >
        <Table
          className={classes.table}
          aria-labelledby="tableTitle"
          size="medium"
          aria-label="enhanced table"
          stickyHeader
        >
          <EnhancedTableHead
            classes={classes}
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
            rowCount={rows.length}
          />
          <TableBody>
            {stableSort(rows, getSorting(order, orderBy))
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map(row => {
                return (
                  <TableRow key={row.id} className={classes.tableRow}>
                    <TableCell
                      component="th"
                      scope="row"
                      className={classes.tableCell}
                    >
                      {row.username}
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      <div
                        style={{
                          height: 102,
                          overflowY: "auto"
                        }}
                      >
                        {row.content}
                      </div>
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      {row.polarity}
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      {row.normalizedSentiment}
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      {row.favorites}
                    </TableCell>
                    <TableCell className={classes.tableCell}>
                      {row.retweets}
                    </TableCell>
                  </TableRow>
                );
              })}
            {emptyRows > 0 && (
              <TableRow style={{ height: 53 * emptyRows }}>
                <TableCell colSpan={6} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </div>
  );
}

TweetTable.propTypes = {
  tweets: PropTypes.object
};
