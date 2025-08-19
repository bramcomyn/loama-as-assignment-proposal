import { GoogleController } from "@/controllers/GoogleController";
import { ODRLController } from "@/controllers/ODRLController";
import { SolidController } from "@/controllers/SolidController";
import { ControllerType, type Controller } from "@/types/IASController";
import { defineStore } from "pinia";

export const useASStore = defineStore('as', {
    state: () => ({
        configuration: {
            as_url: "",
            as_type: ControllerType.ODRL
        },
        controllerInstance: new ODRLController(),
        controllers: new Map<ControllerType, Controller>([
            [ControllerType.GOOGLE, new GoogleController()],
            [ControllerType.SOLID, new SolidController()],
            [ControllerType.ODRL, new ODRLController()],
        ]),
    }),
    actions: {
        setConfiguration(configuration: { as_url: string, as_type: ControllerType }) {
            this.configuration = configuration;

            if (this.controllers.has(this.configuration.as_type) && this.configuration.as_url !== "") {
                this.controllerInstance = this.controllers.get(this.configuration.as_type) as Controller;
            } else throw new Error("invalid authorization server configuration");
        }
    }
});
