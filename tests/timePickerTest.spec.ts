import { test, expect } from "@playwright/test";
import { TimepickerPage } from "../pages/timepickerPage";
import { DateFormatter } from "../services/DateFormatter";

test("Timepicker validation with current date", async ({ page }) => {
    const timepickerPage = new TimepickerPage(page);

    await timepickerPage.goto();
    await timepickerPage.submitNowTime();
    const date = new Date();
    const currentTime = DateFormatter.twoDigitDate(date);
    const currentDate = DateFormatter.deleteTimeZoneName(date);
    const inputValue = await timepickerPage.getInputValue();
    const notificationText = await timepickerPage.getNotificationText();

    expect(inputValue).toEqual(currentTime);
    expect(notificationText).toContain(currentDate);
});