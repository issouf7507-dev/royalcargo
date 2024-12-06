import path from "path";
import multer from "multer";

const imgDir = path.resolve(__dirname, "../../public/img");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, imgDir); // Dossier où les images seront stockées
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + "-" + file.originalname); // Nom unique pour éviter les conflits
  },
});

export const upload = multer({ storage });
