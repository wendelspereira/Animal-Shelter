import { FindShelterUseCase } from "./FindShelterUseCase";
import { Request, Response } from "express";
class FindShelterController {
  constructor(private findShelterUseCase: FindShelterUseCase) {}

  handle(request: Request, response: Response): Response {
    const { id } = request.params;
    return response.send(this.findShelterUseCase.execute(id))
  }
}

export { FindShelterController };
