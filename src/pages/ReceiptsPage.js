import React from "react";
import Styled from "styled-components";
import { useSelector } from "react-redux";
import PropTypes from 'prop-types';
import Button from "@mui/material/Button";

// MUI Icons
import AddIcon from '@mui/icons-material/Add';

// MUI Styles
import { styled, useTheme } from '@mui/material/styles';

// MUI Components
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';

function TablePaginationActions(props) {
    const theme = useTheme();
    const { count, page, rowsPerPage, onPageChange } = props;

    const handleFirstPageButtonClick = (event) => {
        onPageChange(event, 0);
    };

    const handleBackButtonClick = (event) => {
        onPageChange(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
        onPageChange(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
        onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <Box sx={{ flexShrink: 0, ml: 2.5 }}>
        <IconButton
            onClick={handleFirstPageButtonClick}
            disabled={page === 0}
            aria-label="first page"
        >
            {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
        </IconButton>
        <IconButton
            onClick={handleBackButtonClick}
            disabled={page === 0}
            aria-label="previous page"
        >
            {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
        </IconButton>
        <IconButton
            onClick={handleNextButtonClick}
            disabled={page >= Math.ceil(count / rowsPerPage) - 1}
            aria-label="next page"
        >
            {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
        </IconButton>
        <IconButton
            onClick={handleLastPageButtonClick}
            disabled={page >= Math.ceil(count / rowsPerPage) - 1}
            aria-label="last page"
        >
            {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
        </IconButton>
        </Box>
    );
}

TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onPageChange: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Frozen yoghurt', 1590, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 2370, 9.0, 37, 4.3),
  createData('Eclair', 2620, 16.0, 24, 6.0),
  createData('Cupcake', 3050, 3.7, 67, 4.3),
  createData('Gingerbread', 3560, 16.0, 49, 3.9),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Frozen yoghurt', 1590, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 2370, 9.0, 37, 4.3),
  createData('Eclair', 2620, 16.0, 24, 6.0),
  createData('Cupcake', 3050, 3.7, 67, 4.3),
  createData('Gingerbread', 3560, 16.0, 49, 3.9),
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
  createData('Frozen yoghurt', 1590, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 2370, 9.0, 37, 4.3),
  createData('Eclair', 2620, 16.0, 24, 6.0),
  createData('Cupcake', 3050, 3.7, 67, 4.3),
  createData('Gingerbread', 3560, 16.0, 49, 3.9),
];

function ReceiptsPage() {
    const { menu } = useSelector((state) => state.menu);
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <Receipts className=" flex flex-col items-end gap-4" menu={menu}>
            <Button className="" startIcon={<AddIcon />} variant="outlined">Add Receipt</Button>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 560 }}>
                    <Table sx={{ minWidth: 800 }} aria-label="Receipts Table" stickyHeader>
                        <TableHead>
                        <TableRow>
                            <StyledTableCell>Dessert (100g serving)</StyledTableCell>
                            <StyledTableCell align="right">Calories</StyledTableCell>
                            <StyledTableCell align="right">Fat&nbsp;(g)</StyledTableCell>
                            <StyledTableCell align="right">Carbs&nbsp;(g)</StyledTableCell>
                            <StyledTableCell align="right">Protein&nbsp;(g)</StyledTableCell>
                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {(rowsPerPage > 0 ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage) : rows).map((row) => (
                            <StyledTableRow key={row.name}>
                            <StyledTableCell component="th" scope="row">
                                {row.name}
                            </StyledTableCell>
                            <StyledTableCell align="right">{row.calories}</StyledTableCell>
                            <StyledTableCell align="right">{row.fat}</StyledTableCell>
                            <StyledTableCell align="right">{row.carbs}</StyledTableCell>
                            <StyledTableCell align="right">{row.protein}</StyledTableCell>
                            </StyledTableRow>
                        ))}
                        {emptyRows > 0 && (
                            <TableRow style={{ height: 53 * emptyRows }}>
                            <TableCell colSpan={6} />
                            </TableRow>
                        )}
                        </TableBody>
                    </Table>
                </TableContainer>
                <TablePagination
                    rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
                    component="div"
                    count={rows.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    slotProps={{
                        select: {
                        inputProps: {
                            'aria-label': 'rows per page',
                        },
                        native: true,
                        },
                    }}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                    ActionsComponent={TablePaginationActions}
                />
            </Paper>
        </Receipts>
    );
}

export default ReceiptsPage;

const Receipts = Styled.div`
    @media (max-width: 1024px) {
        min-width: 100%;
    }
    @media (min-width: 1024px) {
        min-width: ${props => props.menu ? '100%' : 'calc(100% - 12rem)'};
        transition: min-width 0.5s ease-in-out;
    }
`;

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
      border: 0,
    },
}));
