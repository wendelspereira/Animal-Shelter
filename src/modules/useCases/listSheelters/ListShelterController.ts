import { Request, Response } from "express";
import { ListShelterUseCase } from "../listSheelters/ListShelterUseCase";

class ListShelterController {
  constructor(private listShelterUseCase: ListShelterUseCase) {}

  handle(request: Request, response: Response): Response {
    return response.send(this.listShelterUseCase.execute());
  }
}

export { ListShelterController };
