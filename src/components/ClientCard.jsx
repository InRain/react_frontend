import React, {useEffect, useState} from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogActions from "@material-ui/core/DialogActions";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import ClientService from "../services/ClientService";


const ClientCard = ({handleClose, open, state}) => {

    const [client, setClient] = useState(
        {
            id: "",
            fullName: "",
            individualTaxNumber: "",
            organizationalLegalForm: "",
            address: "",
            debtAmount: "",
            communicationType: ""
        }
    )


    const submitEmployee = () => {

        if (state.mode === "CREATE") {
            console.log("create")
            console.log(client)
            ClientService.addClient(client)

        }
        if (state.mode === "UPDATE") {
            console.log("upd")
            ClientService.updateClient(client,client.id)
        }

        handleClose();
        window.location.reload();

    }

    const handleChange = (event) => {
        setClient({...client, [event.target.id]: event.target.value});
        console.log(client)
    };


    useEffect(() => {
        console.log("eff")
        console.log(state.mode)
        if (state.mode === "CREATE") {
            setClient("");
        }
        if (state.mode === "UPDATE") {
            if (state.client) {
                console.log("setting client")
                setClient(state.client)
            }
        }
    },[state.mode])


    return (
        <div>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle>
                    {state.mode === "CREATE" ? "Add Client" : "View / update client"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Client Info
                    </DialogContentText>
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="fullName"
                        label="Full name"
                        name="fullName"
                        value={client.fullName}
                        onChange={handleChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="individualTaxNumber"
                        label="Individual tax number"
                        name="individualTaxNumber"
                        value={client.individualTaxNumber}
                        onChange={handleChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="organizationalLegalForm"
                        label="Organization legal form"
                        name="organizationalLegalForm"
                        value={client.organizationalLegalForm}
                        onChange={handleChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="address"
                        label="Address string"
                        name="address"
                        value={client.address}
                        onChange={handleChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="debtAmount"
                        label="Debt amount"
                        name="debtAmount"
                        value={client.debtAmount}
                        onChange={handleChange}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        fullWidth
                        id="communicationType"
                        label="Communication method"
                        name="communicationMethod"
                        value={client.communicationType}
                        onChange={handleChange}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={submitEmployee} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

ClientCard.propTypes = {};

export default ClientCard;