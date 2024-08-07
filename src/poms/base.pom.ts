import { App} from "../app"

export abstract class BaseElement {
    constructor(protected app: App, protected path: string) {}
    get() {
        return this.app.findElement(this.path);
    }
}

export class BasePom<E> {
    constructor(private app: App, public elements: E) {}
}
