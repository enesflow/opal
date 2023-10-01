import { component$, QwikIntrinsicElements, Slot } from "@builder.io/qwik";
import { ClassProps } from "@components/shared";
import { twMerge } from "tailwind-merge";

export const Row = component$<QwikIntrinsicElements["div"] & ClassProps>(
  ({ class: classNames, ...rest }) => {
    return (
      <div
        class={twMerge("flex flex-row items-center align-middle", classNames)}
        {...rest}
      >
        <Slot />
      </div>
    );
  }
);

export const Col = component$<QwikIntrinsicElements["div"] & ClassProps>(
  ({ class: classNames, ...rest }) => {
    return (
      <div
        class={twMerge("flex flex-col items-center align-middle", classNames)}
        {...rest}
      >
        <Slot />
      </div>
    );
  }
);
