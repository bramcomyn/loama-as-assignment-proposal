import { ControllerType } from "@/types/IASController";
import type { Controller } from "@/types/IASController";

export class SolidController implements Controller {
    public type = ControllerType.SOLID;
    public identify = () => "SOLID Controller";
}
