import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import fs from "fs";
import path from "path";

const prisma = new PrismaClient();

export const getArticle = async (req: Request, res: Response) => {
  try {
    const article = await prisma.articleBlog.findMany();

    if (!article) {
      return res.status(404).json({ error: "une erreur c est produite" });
    }

    return res.status(201).json(article);
  } catch (error) {
    console.error("Erreur lors de la recuperation de l'article :", error);
    return res.status(500).json({ message: "Erreur interne du serveur" });
  }
};

export const getArticleById = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const article = await prisma.articleBlog.findMany({
      where: {
        id: parseInt(id),
      },
    });

    if (!article) {
      return res.status(404).json({ error: "une erreur c est produite" });
    }

    return res.status(201).json(article);
  } catch (error) {
    console.error("Erreur lors de la recuperation de l'article :", error);
    return res.status(500).json({ message: "Erreur interne du serveur" });
  }
};

export const createArticle = async (req: Request, res: Response) => {
  try {
    const { titre, description } = req.body;
    const image = req.file?.filename; // Nom de l'image uploadée

    const newArticle = await prisma.articleBlog.create({
      data: {
        titre,
        description,
        image: image ? `${image}` : "", // Stockez le chemin relatif de l'image
      },
    });

    return res.status(201).json({
      message: "Article créé avec succès",
      article: newArticle,
    });
  } catch (error) {
    console.error("Erreur lors de la création de l'article :", error);
    return res.status(500).json({ message: "Erreur interne du serveur" });
  }
};

export const updateArticle = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { titre, description } = req.body;
    const image = req.file?.filename;

    const updatedArticle = await prisma.articleBlog.update({
      where: { id: parseInt(id) },
      data: {
        titre,
        description,
        image: image ? `${image}` : undefined, // Mettez à jour l'image uniquement si une nouvelle est uploadée
      },
    });

    return res.status(200).json({
      message: "Article mis à jour avec succès",
      article: updatedArticle,
    });
  } catch (error) {
    console.error("Erreur lors de la mise à jour de l'article :", error);
    return res.status(500).json({ message: "Erreur interne du serveur" });
  }
};

export const deleteArticle = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    // Récupérez l'article pour supprimer l'image associée
    const article = await prisma.articleBlog.findUnique({
      where: { id: parseInt(id) },
    });

    if (!article) {
      return res.status(404).json({ message: "Article non trouvé" });
    }

    // Supprimez l'image du système de fichiers
    if (article.image) {
      const imagePath = path.resolve(__dirname, "../../public", article.image);
      fs.unlink(imagePath, (err) => {
        if (err)
          console.error("Erreur lors de la suppression de l'image :", err);
      });
    }

    // Supprimez l'article de la base de données
    await prisma.articleBlog.delete({
      where: { id: parseInt(id) },
    });

    return res.status(200).json({ message: "Article supprimé avec succès" });
  } catch (error) {
    console.error("Erreur lors de la suppression de l'article :", error);
    return res.status(500).json({ message: "Erreur interne du serveur" });
  }
};
