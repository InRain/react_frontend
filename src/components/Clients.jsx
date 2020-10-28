import React, {useState, useEffect} from "react";
import {TableContainer, TableRow, TableHead, TableCell, TableBody} from '@material-ui/core';
import EmployeeService from "../services/ClientService";
import ClientRow from "./ClientRow";
import AddIcon from '@material-ui/icons/Add';
import ClientCard from "./ClientCard";
import Paper from '@material-ui/core/Paper';
import Fab from "@material-ui/core/Fab";
import {makeStyles} from "@material-ui/core/styles";

const Clients = (props) => {

    const useStyles = makeStyles((theme) => ({
        fab: {
            margin: "10px"

        },
        main: {
            margin: "20px"
        }
    }));

    const classes = useStyles();

    const [clients, updateClients] = useState(null);
    const [clientDialogState, setClientDialogState] = useState({
        open: false,
        mode: "CREATE",
        inputEmployee: null
    });


    useEffect(() => {
        const getEmployees = () => {
            EmployeeService.getClients().then((response) => {
                updateClients(response.data)
            })
        }
        getEmployees();

    }, [])

    const handleCloseCreateEmployee = () => {
        setClientDialogState({
            open: false,
            mode: "",
            inputEmployee: null
        })
    };

    const openDialogAddClient = () => {
        setClientDialogState({
            open: true,
            mode: "CREATE",
            inputEmployee: null
        })
    };

    const updateEmployeeHandler = (client) => {
        console.log(client)
        let state = {
            open: true,
            mode: "UPDATE",
            client: client
        }
        setClientDialogState(state)
    }

    return (
        <div className={classes.main}>
            <Fab
                className={classes.fab}
                color="primary"
                aria-label="add"
                onClick={openDialogAddClient}
            >
                <AddIcon/>
            </Fab>
            <ClientCard open={clientDialogState.open} handleClose={handleCloseCreateEmployee}
                        state={clientDialogState}/>
            <TableContainer component={Paper}>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Individual tax number</TableCell>
                        <TableCell>Organization legal form</TableCell>
                        <TableCell>Address string</TableCell>
                        <TableCell>Debt amount</TableCell>
                        <TableCell>Communication method</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {clients ? clients.map((client) => {
                        return (
                            <ClientRow client={client} updateButtonHandler={updateEmployeeHandler}/>
                        )
                    }) : ""}
                </TableBody>
            </TableContainer>
        </div>
    );
};
export default Clients;