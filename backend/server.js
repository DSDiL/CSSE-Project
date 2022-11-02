const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const BilRoutes = require('./routes/bill');
const ForeignerRoutes = require('./routes/foreigner');
const ManagerRoutes = require('./routes/manager');
const packagesRoutes = require('./routes/packages');
const PaymentRoutes = require('./routes/payment');
const PostpaidRoutes = require('./routes/postpaid');
const QRRoutes = require('./routes/qr');
const ReportRoutes = require('./routes/report');
const TimetableRoutes = require('./routes/timeTable');
const PrepaidRegisterRouter = require("./routes/prepaid.js");

const env = require('dotenv');
env.config();

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(process.env.DB_CONNECTION);

const conn = mongoose.connection;

conn.once('open', () => {
    console.log('successfully connected');
})

app.listen(5000);

app.use('/api/bills', BilRoutes);
app.use('/api/foreiners', ForeignerRoutes);
app.use('/api/manager', ManagerRoutes);
app.use('/api/packages', packagesRoutes);
app.use('/api/payment', PaymentRoutes);
app.use('/api/postpaid', PostpaidRoutes);
app.use('/api/qr', QRRoutes);
app.use('/api/report', ReportRoutes);
app.use('/api/timetable', TimetableRoutes);
app.use("/api/prepaidRegister", PrepaidRegisterRouter);
