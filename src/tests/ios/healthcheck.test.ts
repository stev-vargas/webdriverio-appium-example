
import assert from "assert";
import { App, getCapabilities } from "../../app";
import { iosPreferencesMainPom } from "../../poms/ios/preferences.main.pom";


const capabilities = getCapabilities("ios");

describe("iOS HealthCheck", () => {
    let app: App;

    before(async () => {
        app = new App();
        await app.init(capabilities);
    });

    after(async () => {
        await app.quit();
    });

    it("Validate Version", async () => {
        const mainPreferences = new iosPreferencesMainPom(app);
        const general = await mainPreferences.elements.general.get();
        await general?.click();
        const about = await mainPreferences.elements.about.get();
        await about?.click()
        const version = await mainPreferences.elements.version.get();
        const isDisplayed = await version?.isDisplayed();
        assert(isDisplayed !== undefined);
    });
});