import { MainApp } from '../main-app';
import { fixture, html } from '@open-wc/testing';

const assert = chai.assert;

suite('main-app', () => {

  test('is defined', () => {
    const el = document.createElement('main-app');
    assert.instanceOf(el, MainApp);
  });

  test('renders with default values', async () => {
    const el = await fixture(html`<main-app></main-app>`);
    assert.shadowDom.equal(el, `
      <h1>Hello, World!</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `);
  });

  test('renders with a set name', async () => {
    const el = await fixture(html`<main-app name="Test"></main-app>`);
    assert.shadowDom.equal(el, `
      <h1>Hello, Test!</h1>
      <button part="button">Click Count: 0</button>
      <slot></slot>
    `);
  });

  test('handles a click', async () => {
    const el = await fixture(html`<main-app></main-app>`) as MainApp;
    const button = el.shadowRoot!.querySelector('button')!;
    button.click();
    await el.updateComplete;
    assert.shadowDom.equal(el, `
      <h1>Hello, World!</h1>
      <button part="button">Click Count: 1</button>
      <slot></slot>
    `);
  });

});
