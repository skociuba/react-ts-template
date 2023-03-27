import {Given, Then, When} from '@cucumber/cucumber';
import {Selector} from 'testcafe';

import config from '../config';

//Scenario:Example scenario.
Given('Customer has successfully go to testPage', async (t) => {
  // await t.maximizeWindow().navigateTo(config.GET_APP_URL(config.routes.testPage.root));
  await t.maximizeWindow().navigateTo(config.GET_APP_URL(`/test-page`));
});

When('He saw header with {string} name', async (t, [expectedText]) => {
  const header = await (await Selector('[data-testid="header"]').innerText).trim();
  await t.expect(header).eql(expectedText);
});

Then('Customer after clicking link went to the minePage', async (t) => {
  const button = await Selector('[data-testid="button"]');
  await t.click(button).takeScreenshot();
});
