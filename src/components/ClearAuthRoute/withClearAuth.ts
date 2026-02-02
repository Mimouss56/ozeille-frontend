import { type ComponentType, createElement } from "react";

import { ClearAuthRoute } from "./ClearAuthRoute";

/**
 * HOC to wrap a component with ClearAuthRoute
 */
export const withClearAuth = <P extends object>(Component: ComponentType<P>) => {
  const WrappedComponent = (props?: P) =>
    createElement(ClearAuthRoute, null, createElement(Component, props ?? ({} as P)));
  WrappedComponent.displayName = `WithClearAuth(${Component.displayName ?? Component.name ?? "Component"})`;
  return WrappedComponent;
};
