import { Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";
import { tabUrl } from "../constants/routes";

export class TabPage extends BasePage {
    readonly page: Page;
    readonly content: Locator;
    tab: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.content = this.frame.locator(".eos-tabs-tabpane-active");
    }

    async goto() {
        await this.page.goto(tabUrl);
    }

    async clickTabByName(name: string) {
        const regex = new RegExp(name);
        this.tab = this.frame.getByText(regex);
        await this.tab.click();
    }

    async getTextContent(): Promise<string> {
        return this.content.textContent();
    }
}