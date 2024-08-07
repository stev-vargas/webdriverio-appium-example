import { App } from "../../app";
import { BasePom } from "../base.pom";
import { iOSelement, iosElements } from "./base.ios.pom";

interface Elements {
    general: iOSelement;
    about: iOSelement;
    version: iOSelement;
}

const elements = (app: App): Elements => {
    return {
        general: new iOSelement(app, "TypeCell[@name='General']"),
        about: new iOSelement(app, "TypeCell[@name='About']"),
        version: new iOSelement(app, "TypeCell[@name='iOS Version']"),
    }
}


 
export class iosPreferencesMainPom extends BasePom<Elements> {
    
    constructor(app: App) {
        super(app, elements(app));
    }
}
