import { App } from "../../app";
import { BasePom } from "../base.pom";
import { androidElement } from "./base.android.pom";

const elements = (app: App) => {
    return {
        imageButton: new androidElement(app, "android.widget.ImageButton"),
        editText: new androidElement(app, "android=new UiSelector().className(android.widget.EditText)"),
        linearLayout: new androidElement(app, "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout[2]/android.widget.ScrollView/android.widget.LinearLayout/android.widget.ScrollView/android.widget.LinearLayout/android.widget.FrameLayout/android.support.v7.widget.RecyclerView/android.widget.LinearLayout[3]/android.widget.LinearLayout"),
        progressBar: new androidElement(app, "android=new UiSelector().className(android.widget.ProgressBar)"),
    }
}

export class AndroidSettingsPom extends BasePom<ReturnType<typeof elements>> {
    constructor(app: App) {
        super(app, elements(app))
    }
}