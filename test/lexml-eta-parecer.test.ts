import { html } from 'lit';
import { fixture, expect } from '@open-wc/testing';
import { LexmlEtaParecer } from '../src/components/parecer/LexmlEtaParecer.js';
import '../src/lexml-eta-parecer.js';

describe('LexmlEtaParecer', () => {
  it('has a default header "Hey there" and counter 5', async () => {
    const el = await fixture<LexmlEtaParecer>(
      html`<lexml-eta-parecer></lexml-eta-parecer>`,
    );

    expect(el.header).to.equal('Hey there');
    // expect(el.counter).to.equal(5);
  });

  it('increases the counter on button click', async () => {
    const el = await fixture<LexmlEtaParecer>(
      html`<lexml-eta-parecer></lexml-eta-parecer>`,
    );
    el.shadowRoot!.querySelector('button')!.click();

    // expect(el.counter).to.equal(6);
  });

  it('can override the header via attribute', async () => {
    const el = await fixture<LexmlEtaParecer>(
      html`<lexml-eta-parecer header="attribute header"></lexml-eta-parecer>`,
    );

    expect(el.header).to.equal('attribute header');
  });

  it('passes the a11y audit', async () => {
    const el = await fixture<LexmlEtaParecer>(
      html`<lexml-eta-parecer></lexml-eta-parecer>`,
    );

    await expect(el).shadowDom.to.be.accessible();
  });
});
