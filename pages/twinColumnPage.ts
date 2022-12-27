import { Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";
import { twinColumnUrl } from "../constants/routes";

export class TwinColumnPage extends BasePage {
    readonly page: Page;
    readonly arrowRight: Locator;
    readonly summaryList: Locator;
    listItem: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.arrowRight = this.frame.getByRole("button", { name: "right" });
        this.summaryList = this.frame.locator("//div[div/span/.='Итоговый список']/div[@class='eos-transfer-list-body']");
    }

    async goto() {
        await this.page.goto(twinColumnUrl);
    }

    async selectListItemByName(name: string) {
        this.listItem = await this.frame.getByText(name);
        await this.listItem.click();
    }

    async addListItemByName(name: string) {
        await this.selectListItemByName(name);
        await this.arrowRight.click();
    }

    async getSummaryListItems(): Promise<string> {
        return this.summaryList.textContent();
    }

    async isButtonEnabled(): Promise<boolean> {
        return this.arrowRight.isEnabled();
    }
}