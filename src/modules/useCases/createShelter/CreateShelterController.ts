import { Request, Response } from "express";
import { CreateShelterUseCase } from "./CreateShelterUseCase";

class CreateShelterController {
  constructor(private createShelterUseCase: CreateShelterUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name } = request.body;
    this.createShelterUseCase.execute(name);

    return response.status(201).send();
  }
}

export { CreateShelterController };
