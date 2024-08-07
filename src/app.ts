import { remote, RemoteOptions } from "webdriverio";

let appiumPort = 4723;
const envAppiumPort = process.env.APPIUM_PORT;
if (envAppiumPort != null && /\d+/.test(envAppiumPort.trim())) {
    appiumPort = parseInt(envAppiumPort, 10);
}

const appiumOptions: RemoteOptions = {
    hostname: process.env.APPIUM_HOST ?? "127.8.8.1",
    port: appiumPort,
    logLevel: "info",
    capabilities: {},
}

export class App {
    private driver: WebdriverIO.Browser | undefined;

    async init (capabilities: any) {
        appiumOptions.capabilities = capabilities;
        this.driver = await remote(appiumOptions)
    }

    async quit() {
        if (this.driver == null) {
            return;
        }
        
        await this.driver.pause(1000);
        await this.driver.deleteSession();
    }

    async findElement(selector: string) {
        if (this.driver === null) {
            throw new Error("Driver not initialized.")
        }

        return await this.driver?.$(selector);
    }
}

export function getCapabilities(os: "ios" | "android") {
    switch (os) {
        case "ios": {
            return {
                platformName: "iOS",
                "appium:platformVersion": "17.5",
                "appium:deviceName": "iPhone 13 Pro Max",
                "appium:automationName": "XCUITest",
                "appium:app": "com.apple.Preferences",
                "appium:locale": "US",
                "appium:language": "en",
            }
        }
        case "android": {
            return {
                platformName: "Android",
                "appium:automationName": "UiAutomator2",
                "appium:deviceName": "Android",
                "appium:appPackage": "com.android.settings",
                "appium:appActivity": ".Settings",
                "appium:locale": "US",
                "appium:language": "en",
            }
        }
    }
}