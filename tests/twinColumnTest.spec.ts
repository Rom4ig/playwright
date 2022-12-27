import { test, expect } from "@playwright/test";
import { TwinColumnPage } from "../pages/twinColumnPage";

test("Twin column validation via adding item", async ({ page }) => {
    const listName = "{5} Заголовок";
    const twinColumnPage = new TwinColumnPage(page);

    await twinColumnPage.goto();
    await twinColumnPage.selectListItemByName(listName);
    const isItemChecked =  await twinColumnPage.isLastItemChecked();
    await twinColumnPage.addListItems();
    const summaryList = await twinColumnPage.getSummaryListItems();
    const isButtonEnabled = await twinColumnPage.isButtonEnabled();

    expect(isItemChecked).toBe(true);
    expect(summaryList).toContain(listName);
    expect(isButtonEnabled).toBe(false);
});