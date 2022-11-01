import { ComponentType } from "react";
import { LazyExoticComponent, Suspense } from "react";
import { Preloader } from "../components/common/Preloader/Preloader";

export const withSuspense = (
  Component: LazyExoticComponent<ComponentType<{}>>
) => (
  <Suspense fallback={<Preloader />}>
    <Component />
  </Suspense>
);
