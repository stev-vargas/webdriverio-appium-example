import { App } from "../../app";
import { BasePom } from "../base.pom";
import { iOSelement, iosElements } from "./base.ios.pom";

const elements = (app: App) => {
    return {
        general: new iOSelement(app, "TypeCell[@name='General']"),
        about: new iOSelement(app, "TypeCell[@name='About']"),
        version: new iOSelement(app, "TypeCell[@name='iOS Version']"),
    }
}

export class iosPreferencesMainPom extends BasePom<ReturnType<typeof elements>> {
    
    constructor(app: App) {
        super(app, elements(app));
    }
}
