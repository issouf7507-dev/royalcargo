import { PrismaClient } from "@prisma/client";

import { Request, Response } from "express";

const prisma = new PrismaClient();

export const createReservationAnonyme = async (req: Request, res: Response) => {
  const {
    nom,
    numero,
    etat,
    prix,
    poids,
    tailes,
    daten,
    condition,
    quantite,
    images,
    images2,
    images3,
    service,
    typec,
    trackcode,
  } = req.body;

  try {
    // Créer la réservation
    const reservation = await prisma.reservationanonime.create({
      data: {
        nom,
        numero,
        etat,
        prix,
        poids,
        tailes,
        daten,
        condition,
        quantite,
        images,
        images2,
        images3,
        service,
        typec,
        trackcode,
      },
    });

    return res.status(201).json({
      message: "Réservation créée avec succès",
      reservation,
    });
  } catch (error) {
    console.error("Erreur lors de la création de la réservation :", error);
    return res.status(500).json({ error: "Erreur serveur" });
  }
};

export const getReservationAnonyme = async (req: Request, res: Response) => {
  try {
    const data = await prisma.reservationanonime.findMany();

    if (!data) {
      return res.status(404).json({ error: "une erreur c est produite" });
    }

    return res.status(201).json(data);
  } catch (error) {
    console.error("Erreur lors de la recuperation des réservations :", error);
    return res.status(500).json({ error: "Erreur serveur" });
  }
};

export const getReservationAnonymeById = async (
  req: Request,
  res: Response
) => {
  const { id } = req.params;
  try {
    const data = await prisma.reservationanonime.findUnique({
      where: {
        trackcode: id,
      },
    });

    if (!data) {
      return res.status(404).json({ error: "une erreur c est produite" });
    }

    return res.status(201).json(data);
  } catch (error) {
    console.error("Erreur lors de la recuperation des réservations :", error);
    return res.status(500).json({ error: "Erreur serveur" });
  }
};

export const postReservationAnonymeById = async (
  req: Request,
  res: Response
) => {
  const { id } = req.body;
  try {
    const data = await prisma.reservationanonime.findUnique({
      where: {
        trackcode: id,
      },
    });

    if (!data) {
      return res.status(404).json({ error: "une erreur c est produite" });
    }

    return res.status(201).json([data]);
  } catch (error) {
    console.error("Erreur lors de la recuperation des réservations :", error);
    return res.status(500).json({ error: "Erreur serveur" });
  }
};

export const putReservationAnonyme = async (req: Request, res: Response) => {
  // const { id } = req.params;
  const {
    id,
    nom,
    numero,
    etat,
    prix,
    poids,
    tailes,
    daten,
    condition,
    quantite,
    images,
    images2,
    images3,
    service,
    typec,
    trackcode,
  } = req.body;

  try {
    // Créer la réservation
    const reservation = await prisma.reservationanonime.update({
      data: {
        nom,
        numero,
        etat,
        prix,
        poids,
        tailes,
        daten,
        condition,
        quantite,
        images,
        images2,
        images3,
        service,
        typec,
        trackcode,
      },
      where: {
        id: parseInt(id),
      },
    });

    return res.status(201).json({
      message: "Réservation mis a jour maintemant",
      reservation,
    });
  } catch (error) {
    console.error("Erreur lors de la mise a jour réservation :", error);
    return res.status(500).json({ error: "Erreur serveur" });
  }
};

export const imgUpload = async (req: Request, res: Response) => {
  const files = req.files as Express.Multer.File[]; // Cast pour accéder aux fichiers
  if (files && files.length > 0) {
    const filenames = files.map((file) => file.filename); // Récupère les noms des fichiers
    return res.status(200).json({
      message: "Images uploaded successfully",
      filenames,
    });
  } else {
    return res.status(500).json({ message: "Images upload failed" });
  }
};
export const imgUpload2 = async (req: Request, res: Response) => {
  const images = req.file?.filename;
  if (images) {
    return res
      .status(200)
      .json({ message: "Image uploaded successfully", filename: images });
  } else {
    return res.status(500).json({ message: "Image upload failed" });
  }
};
