import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const JWT_SECRET_MOBILE =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjMsImlhdCI6MTcxMjE0NDI5OSwiZXhwIjoxNzEyMTQ3ODk5fQ.Uu1Kw5V8jt8sGbHJ1j1z-AS2VIaf6epAtS4YOmx3QLg";
const JWT_SECRET_DASHBOARD =
  "eyJhbGciOiJIUzI1nR5cCI6Idwwhjdy21.64a32ffaadbf4728aacb93677f9d6b7464a32ffaadbf.64059948-5632-4aa8-9faf-ed56ab3fbaad";

export const authMiddlewareMobile = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Token manquant" });

  try {
    const decoded = jwt.verify(token, JWT_SECRET_MOBILE) as { userId: number };
    req.userId = decoded.userId;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Token invalide ou expiré" });
  }
};

export const authMiddlewareDashboard = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ error: "Token manquant" });

  try {
    const decoded = jwt.verify(token, JWT_SECRET_DASHBOARD) as {
      userId: number;
    };
    req.userId = decoded.userId;
    next();
  } catch (error) {
    return res.status(401).json({ error: "Token invalide ou expiré" });
  }
};
// export const authMiddleware = (
//   req: Request,
//   res: Response,
//   next: NextFunction
// ) => {
//   // Récupérer le token d'authentification depuis les en-têtes
//   const authHeader = req.headers.authorization;

//   if (!authHeader || !authHeader.startsWith("Bearer ")) {
//     return res.status(401).json({ error: "Authentification requise." });
//   }

//   const token = authHeader.split(" ")[1];

//   try {
//     // Vérifier et décoder le token
//     const decoded = jwt.verify(token, JWT_SECRET) as { userId: number };

//     // Attacher l'ID de l'utilisateur décodé à la requête
//     req.userId = decoded.userId;

//     // Passer à la prochaine fonction ou middleware
//     next();
//   } catch (error) {
//     console.error(error);
//     return res.status(401).json({ error: "Token invalide ou expiré." });
//   }
// };
