import { BaseElement } from "../base.pom";

export class androidElement extends BaseElement { }

export type androidElements <T extends { [key in keyof U]: androidElement}, U> = Omit<T, keyof U> & U;