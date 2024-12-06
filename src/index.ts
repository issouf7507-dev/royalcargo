import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import user from "./routes/user";
import reservation from "./routes/reservation";
import userC from "./routes/userC";
import blog from "./routes/blog";
import reservationanonyme from "./routes/reservationanonyme";
import path from "path";
import "dotenv/config";

const app = express();
const port = 9001;
// const imgDir = path.resolve(__dirname, "../public/img");
const imgDir = path.resolve(__dirname, "../public/img");
const imgDi2 = path.resolve(__dirname, "../public/imaA");

// middleware
// cors (Cross-Origin Resource Sharing) est un middleware qui permet à votre application de gérer les requêtes provenant de différents domaines (origines).
app.use(cors());

app.use(bodyParser.json());

// Servir les fichiers statiques
app.use("/api/v01/img", express.static(imgDir));
app.use("/api/v01/img2", express.static(imgDi2));
//

app.use(user);
app.use(reservation);
app.use(reservationanonyme);
app.use(userC);
app.use(blog);

// app.listen(port, () => {
//   console.log(`Server running on http://192.168.1.10:${port}`);
// });

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running on http://192.168.1.10:${port}`);
});
