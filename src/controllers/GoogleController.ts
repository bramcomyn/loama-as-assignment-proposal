import { ControllerType } from "@/types/IASController";
import type { Controller } from "@/types/IASController";

export class GoogleController implements Controller {
    public type = ControllerType.GOOGLE;
    public identify = () => "Google Controller";
}
