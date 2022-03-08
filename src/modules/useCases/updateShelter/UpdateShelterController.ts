import { Request, Response } from "express";
import { UpdateShelterUseCase } from "./UpdateShelterUseCase";
class UpdateShelterController {
  constructor(private updateShelterUseCase: UpdateShelterUseCase) {}

  handle(request: Request, response: Response): Response {
    const { id, name } = request.body;
    return response.send(this.updateShelterUseCase.execute({id, name}))
  }
}

export { UpdateShelterController };
