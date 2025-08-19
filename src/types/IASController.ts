export enum ControllerType {
    SOLID  = "SOLID",
    ODRL   = "ODRL",
    GOOGLE = "Google Drive"
}

export interface Controller {
    type: ControllerType;
    identify: () => string;
}
