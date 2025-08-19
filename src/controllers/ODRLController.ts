import { ControllerType } from "@/types/IASController";
import type { Controller } from "@/types/IASController";

export class ODRLController implements Controller {
    public type = ControllerType.ODRL;
    public identify = () => "ODRL Controller";
}
