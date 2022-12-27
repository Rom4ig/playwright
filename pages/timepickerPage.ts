import { Locator, Page } from "@playwright/test";
import { BasePage } from "./basePage";
import { timepickerUrl } from "../constants/routes";

export class TimepickerPage extends BasePage {
    readonly page: Page;
    readonly arrowDown: Locator;
    readonly nowButton: Locator;
    readonly inputTime: Locator;
    readonly notification: Locator;
    readonly submitButton: Locator;

    constructor(page: Page) {
        super(page);
        this.page = page;
        this.arrowDown = this.frame.locator(".eos-field-icons");
        this.nowButton = this.frame.locator(".eos-picker-now-btn");
        this.inputTime = this.frame.locator("input#basic_timepicker");
        this.notification = this.frame.locator(".eos-message__content");
        this.submitButton = this.frame.getByRole("button", { name: "Submit" });
    }

    async goto() {
        await this.page.goto(timepickerUrl);
    }

    async submitNowTime() {
        await this.arrowDown.click();
        await this.nowButton.click();
        await this.submitButton.click();
    }

    async getInputValue(): Promise<string> {
        return this.inputTime.inputValue();
    }

    async getNotificationText(): Promise<string> {
        return this.notification.textContent();
    }
}