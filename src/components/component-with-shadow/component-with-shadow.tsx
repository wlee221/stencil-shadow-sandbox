import { Component, h } from '@stencil/core';

@Component({
  tag: 'component-with-shadow',
  styleUrl: 'component-with-shadow.css',
  shadow: true,
})
export class ComponentWithShadow {
  render() {
    return <div class="shadowed">I'm a shadowed component.</div>;
  }
}
