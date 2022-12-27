import { FrameLocator, Page } from "@playwright/test";

export class BasePage {
    readonly frame: FrameLocator;

    constructor(page: Page) {
        this.frame = page.frameLocator("#storybook-preview-iframe");
    }
}