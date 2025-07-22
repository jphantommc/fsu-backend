import express from "express";
import departmentsRouter from "./api/departments.js";
import professorsRouter from "./api/professors.js";
const app = express();
app.use(express.json());

app.use("/api/departments", departmentsRouter);
app.use("/api/professors", professorsRouter);
export default app;

