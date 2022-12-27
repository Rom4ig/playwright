import { test, expect } from "@playwright/test";
import { TwinColumnPage } from "../pages/twinColumnPage";

test("Twin column validation via adding item", async ({ page }) => {
    const listName = "{5} Заголовок";
    const twinColumnPage = new TwinColumnPage(page);

    await twinColumnPage.goto();
    await twinColumnPage.addListItemByName(listName);
    const summaryList = await twinColumnPage.getSummaryListItems();
    const isButtonEnabled = await twinColumnPage.isButtonEnabled();

    expect(summaryList).toContain(listName);
    expect(isButtonEnabled).toBe(false);
});