import { DeleteShelterUseCase } from "./deleteShelterUseCase";
import { Request, Response } from "express";
class DeleteShelterController {
  constructor(private deleteShelterUseCase: DeleteShelterUseCase) {}
  handle(request: Request, response: Response) {
    const { id } = request.params;

    return response.send(this.deleteShelterUseCase.execute(id));
  }
}

export { DeleteShelterController };
