import {element, by, device} from 'detox';

describe('Example', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('Ouvidoria no Header ', async () => {
    await expect(element(by.id('HeaderTitulo'))).toBeVisible();
  });

  it('Icone login no Header', async () => {
    await expect(element(by.id('HeaderTitulo'))).toBeVisible();
  });
});
