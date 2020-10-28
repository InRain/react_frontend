import React from "react";
import {TableCell, TableRow} from '@material-ui/core';
import Button from "@material-ui/core/Button";
import DeleteIcon from '@material-ui/icons/Delete';
import {makeStyles} from "@material-ui/core/styles";
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import ClientService from "../services/ClientService";


const ClientRow = ({client, updateButtonHandler}) => {

    const [open, setOpen] = React.useState(false);

    const useStyles = makeStyles((theme) => ({
        actionContainer: {
            display: "flex",
            flexDirection: "column",
        },
        button: {
            margin: "5px",
        }
    }));

    const classes = useStyles();

    const handleOpenDeleteDialog = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleDeleteClient = () => {
        ClientService.deleteClient(client.id)
        setOpen(false)
        window.location.reload();
    }
    return (
        <TableRow>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">{"Use Google's location service?"}</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Let Google help apps determine location. This means sending anonymous location data to
                        Google, even when no apps are running.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleDeleteClient} color="primary" autoFocus>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
            <TableCell>{client.fullName}</TableCell>
            <TableCell>{client.individualTaxNumber}</TableCell>
            <TableCell>{client.organizationalLegalForm}</TableCell>
            <TableCell>{client.address}</TableCell>
            <TableCell>{client.debtAmount}</TableCell>
            <TableCell>{client.communicationType}</TableCell>
            <TableCell>
                <div className={classes.actionContainer}>
                    <Button className={classes.button}
                            variant="contained"
                            onClick={() => {
                                updateButtonHandler(client)
                            }}>
                        View/Update Client
                    </Button>
                    <Button className={classes.button}
                            variant="contained"
                            color="secondary"
                            onClick={handleOpenDeleteDialog}
                            startIcon={<DeleteIcon/>}>
                        Delete
                    </Button>
                </div>
            </TableCell>
        </TableRow>
    );

};
export default ClientRow;
