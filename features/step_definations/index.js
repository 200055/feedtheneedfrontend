const { expect } = require("chai");
const { Given, When, Then, Before, After } = require("@cucumber/cucumber");
const { Builder, By, Key, until, sleep } = require("selenium-webdriver");
const { delay } = require("../utils/delay");

Given("Test login functionality", { timeout: 30000 }, async function () {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:3000/");
  await driver.findElement(By.id("email")).sendKeys("duku.aryal@gmail.com");
  await driver.findElement(By.id("password")).sendKeys("123456");
  await driver.sleep(delay);
  await driver.findElement(By.id("loginBtn")).click();

  await driver.wait(until.elementLocated(By.id("dashboard")), 30000);
  expect(await driver.wait(until.elementLocated(By.id("dashboard"))));
  // await driver.quit();
});
Given("Test add staff functionality", { timeout: 30000 }, async function () {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:3000/dashboard/addstaff");
  await driver.findElement(By.id("username")).sendKeys("staffbdd");
  await driver.findElement(By.id("email")).sendKeys("staffbdd@gmail.com");
  await driver.findElement(By.id("password")).sendKeys("12345678");
  await driver.sleep(delay);
  await driver.findElement(By.id("addStaffBtn")).click();

  await driver.wait(until.elementLocated(By.id("username")), 30000);
  expect(await driver.wait(until.elementLocated(By.id("username"))));
  // await driver.quit();
});

Given("Test update contact functionality", { timeout: 30000 }, async function () {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:3000/dashboard/contact");
  await driver.findElement(By.id("companyName")).sendKeys("FeedTheNeedBDD");
  await driver.findElement(By.id("companyAddress")).sendKeys("Dillibazar");
  await driver.findElement(By.id("companyPhone")).sendKeys("9840311031");
  await driver.findElement(By.id("companyFounded")).sendKeys("2021");
  await driver.sleep(delay);
  await driver.findElement(By.id("updateBtn")).click();

  await driver.wait(until.elementLocated(By.id("companyName")), 30000);
  expect(await driver.wait(until.elementLocated(By.id("companyName"))));
  // await driver.quit();
});

Given("Test change admin password functionality", { timeout: 30000 }, async function () {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:3000/dashboard/changepassword");
  await driver.findElement(By.id("currentPassword")).sendKeys("123456");
  await driver.findElement(By.id("newPassword")).sendKeys("1234578");
  await driver.findElement(By.id("confirmNewPassword")).sendKeys("12345678");
  await driver.sleep(delay);
  await driver.findElement(By.id("changePasswordBtn")).click();

  await driver.wait(until.elementLocated(By.id("currentPassword")), 30000);
  expect(await driver.wait(until.elementLocated(By.id("currentPassword"))));
  // await driver.quit();
});

Given("Test update map functionality", { timeout: 30000 }, async function () {
  let driver = await new Builder().forBrowser("chrome").build();
  await driver.get("http://localhost:3000/dashboard/map");
  await driver.findElement(By.id("lat")).sendKeys("27.7059314");
  await driver.findElement(By.id("long")).sendKeys("85.3267846");
  await driver.sleep(delay);
  await driver.findElement(By.id("updateMapsBtn")).click();
  await driver.wait(until.elementLocated(By.id("lat")), 30000);
  expect(await driver.wait(until.elementLocated(By.id("lat"))));
  // await driver.quit();
});