import fs from "fs";
import path from "path";
import { test, expect } from '@playwright/test';

function getSnapShotFilePath (filename: string) {
  return path.join(__dirname , `/snapshot/${filename}`);
}

test('empty test', async ({ page }) => {
  await page.goto('http://localhost:3000');
});

test("test screenshot or take", async ({page}) => {
  await page.goto('http://localhost:3000');
  const filename = "test.png";
  const filePath = getSnapShotFilePath(filename);
  const isFileExist = fs.existsSync(filePath);
  if(isFileExist) {
    await expect(page).toHaveScreenshot(filename);
  }else {
     await page.screenshot({path: filePath});
  }
})
