import react, { useState } from 'react'
import { Container, Card, CardContent, Grid, TextField, makeStyles, Button } from '@material-ui/core'
import axios from 'axios'

const useStyles = makeStyles((theme) => ({
    Container: {
        marginTop: 10
    },
    title: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        background: '#3374FF',
        color: 'white'
    },
    btn: {
        marginTop: 10,
        marginBottom: 20
    }
}))

function QrCode() {

    const classes = useStyles()
    const [url, setUrl] = useState('')
    const [qrImage, setQrImage] = useState('')

    const generateQrcode = (e) => {
        e.preventDefault();
        axios.post("http://localhost:5000/api/scanQrCode", { url: url })
            .then(response => {
                console.log(response);
                setQrImage(response.data)
            })
    }

    return (

        <div>
            <br></br>
            <Container className={classes.container}>
                <Card>
                    
                    <h2 className={classes.title}><br></br>Generate QR Code and download</h2>

                    <CardContent>
                        <br></br>
                        <br></br>
                        <Grid container spacing={2}>
                            <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                                <TextField label="Enter text here" onChange={(e) => setUrl(e.target.value)} value={url} /><br></br>
                                <Button variant="contained" color="primary" className={classes.btn} onClick={generateQrcode}>Generate QR Code</Button>
                                <br />
                            </Grid>
                            <br></br>
                            <Grid item xl={4} lg={4} md={6} sm={12} xs={12}>
                                {
                                    url.length > 0 && qrImage
                                        ?
                                        <>
                                            <a href={qrImage} download ><img src={qrImage} alt="qrimage" /></a>
                                            <p>Please Scan QR code to access the data.. </p>
                                        </>
                                        :
                                        null
                                }
                            </Grid>
                        </Grid>

                    </CardContent>
                </Card>
            </Container>
        </div>
    )
}

export default QrCode