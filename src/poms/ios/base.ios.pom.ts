import { App } from "../../app"
import { BaseElement } from "../base.pom"



export class iOSelement extends BaseElement {
    constructor(protected app: App, protected path: string) {
        super(app, `//XCUIElement${path}`)
    }
}

export type iosElements<T extends { [key in keyof U]: iOSelement}, U> = Omit<T, keyof U> & U;
