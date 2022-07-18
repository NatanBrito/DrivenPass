import { Request, Response } from "express";

import { createNote } from "../repositories/SecureNoteRepository.js";
import * as SecureNoteService from "../services/SecureNoteService.js";
export async function createSecureNote(req: Request, res: Response) {
  const { title, titleAnnotation, annotation } = req.body;
  const data: createNote = {
    userId: res.locals.userData.id,
    title: title,
    titleAnnotation: titleAnnotation,
    annotation: annotation,
  };
  await SecureNoteService.createCredentials(data);
  res.sendStatus(200);
}
export async function findSecureNote(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  const userId: number = res.locals.userData.id;
  if (id === 0) {
    const getAllCredential = await SecureNoteService.findAllSecureNote(
      id,
      userId
    );
    return res.status(200).send(getAllCredential);
  }
  const findNote = await SecureNoteService.findSecureNote(id, userId);
  res.status(200).send(findNote);
}
export async function deleteSecureNote(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  const userId: number = res.locals.userData.id;

  await SecureNoteService.deleteByIdSecureNote(id, userId);
  res.sendStatus(200);
}
