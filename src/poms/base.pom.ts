import { App} from "../app"
import { iOSelement } from "./ios/base.ios.pom";



export abstract class BaseElement {
    constructor(protected app: App, protected path: string) {}
    get() {
        return this.app.findElement(this.path);
    }
}

export class BasePom<E> {
    constructor(private app: App, public elements: E) {}
}
