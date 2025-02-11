import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import { statusColor, StyledTableCell, StyledTableRow } from '@/helpers/Common';
import { Box } from '@mui/material';

const QaTickets = ({ filter }) => {
    function createData(
        ticketNo: string,
        status: string,
        Assignee: string,
        board: string,
        Link: string,
    ) {
        return { ticketNo, status, Assignee, board, Link };
    }

    const rows = [
        createData('E2D-11456', 'In Progress', "Vaneet Kaur", "E2D", "www.google.com"),
        createData('LEG2-6746', 'QA', "sumit kumar", "LEG2", "www.google.com"),
        createData('ELNKWEB-1344', 'Code Review', "Gurbakshish", "ELNKWEB", "www.google.com"),
        createData('E2D-14456', 'Dev Testing', "kanica", "E2D", "www.google.com"),
    ];

    return (
        <TableContainer component={Paper} sx={{ mt: filter == "All" ? 5 : '' }}>
            <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center" colSpan={12} sx={{ bgcolor: "#D0E8C5", fontFamily: 'Poppins', fontSize: '27px', fontWeight: 900, height: "56px" }}>
                            QA Ticket
                        </TableCell>
                    </TableRow>
                    <TableRow>
                        <StyledTableCell sx={{ fontWeight: 900 }}>Ticket No</StyledTableCell>
                        <StyledTableCell sx={{ fontWeight: 900 }} align="center">Ticket Staus</StyledTableCell>
                        <StyledTableCell sx={{ fontWeight: 900 }} align="center">Assignee</StyledTableCell>
                        <StyledTableCell sx={{ fontWeight: 900 }} align="center">Board</StyledTableCell>
                        <StyledTableCell sx={{ fontWeight: 900 }} align="center">Link</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <StyledTableRow key={row.ticketNo}>
                            <TableCell component="th" scope="row">
                                {row.ticketNo}
                            </TableCell>
                            <TableCell align="center">
                                <Box
                                    sx={{
                                        borderRadius: "20px", padding: 1,
                                        ...statusColor(row.status),
                                        fontWeight: "bold"
                                    }} >
                                    {row.status}
                                </Box>
                            </TableCell>
                            <TableCell align="center">{row.Assignee}</TableCell>
                            <TableCell align="center">{row.board}</TableCell>
                            <TableCell align="center"><InsertLinkIcon /></TableCell>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default QaTickets