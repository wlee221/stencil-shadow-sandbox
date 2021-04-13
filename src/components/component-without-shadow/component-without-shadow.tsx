import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-without-shadow',
  styleUrl: 'component-without-shadow.css',
})
export class ComponentWithoutShadow {
  render() {
    return <div class="not-shadowed">I do not use shadow DOM.</div>;
  }
}
