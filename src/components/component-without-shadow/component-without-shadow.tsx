import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'component-without-shadow',
  styleUrl: 'component-without-shadow.css',
})
export class ComponentWithoutShadow {
  render() {
    return (
      <Host>
        <div>I do not use shadow DOM.</div>
      </Host>
    );
  }
}
