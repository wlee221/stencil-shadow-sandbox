/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface ComponentWithShadow {
    }
    interface ComponentWithoutShadow {
    }
}
declare global {
    interface HTMLComponentWithShadowElement extends Components.ComponentWithShadow, HTMLStencilElement {
    }
    var HTMLComponentWithShadowElement: {
        prototype: HTMLComponentWithShadowElement;
        new (): HTMLComponentWithShadowElement;
    };
    interface HTMLComponentWithoutShadowElement extends Components.ComponentWithoutShadow, HTMLStencilElement {
    }
    var HTMLComponentWithoutShadowElement: {
        prototype: HTMLComponentWithoutShadowElement;
        new (): HTMLComponentWithoutShadowElement;
    };
    interface HTMLElementTagNameMap {
        "component-with-shadow": HTMLComponentWithShadowElement;
        "component-without-shadow": HTMLComponentWithoutShadowElement;
    }
}
declare namespace LocalJSX {
    interface ComponentWithShadow {
    }
    interface ComponentWithoutShadow {
    }
    interface IntrinsicElements {
        "component-with-shadow": ComponentWithShadow;
        "component-without-shadow": ComponentWithoutShadow;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "component-with-shadow": LocalJSX.ComponentWithShadow & JSXBase.HTMLAttributes<HTMLComponentWithShadowElement>;
            "component-without-shadow": LocalJSX.ComponentWithoutShadow & JSXBase.HTMLAttributes<HTMLComponentWithoutShadowElement>;
        }
    }
}
