import { test, expect } from "@playwright/test";
import { TabPage } from "../pages/tabPage";

test("Tab with name 'Вкладка 4' should have content 'Текст 4'", async ({ page }) => {
    const tabName = "Вкладка 4";
    const tabContent = "Текст 4";
    const tabPage = new TabPage(page);

    await tabPage.goto();
    await tabPage.clickTabByName(tabName);
    const text = await tabPage.getTextContent();

    expect(text).toEqual(tabContent);
});