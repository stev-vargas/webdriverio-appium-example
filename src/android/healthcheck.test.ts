import { App, getCapabilities } from "../app"
import { AndroidSettingsPom } from "../poms/android/settings.pom";

const capabilities = getCapabilities("android")

 describe("HealthCheck", () => {
    let app: App;

    before(async() => {
        app = new App();
        await app.init(capabilities);
    });

    after(async() => {
        await app.quit();
    })

    it("Test",async () => {
        const settings = new AndroidSettingsPom(app);
        const imageButton = await settings.elements.imageButton.get(); 
        await imageButton?.click()
        const editText = await settings.elements.editText.get();
        await editText?.click();
        await editText?.setValue("bat");
        const linearLayout = await settings.elements.linearLayout.get();
        await linearLayout?.click();
        const progressBar = await settings.elements.progressBar.get();
        await progressBar?.isDisplayed();
    });
 })