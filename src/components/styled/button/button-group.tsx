import {
  component$,
  QwikIntrinsicElements,
  Slot,
  useStylesScoped$,
} from "@builder.io/qwik";
import { ClassProps } from "@components/shared";
import { twMerge } from "tailwind-merge";

export type ButtonGroupProps = {} & ClassProps;
export type HTMLDivProps = QwikIntrinsicElements["div"];

export const ButtonGroup = component$<ButtonGroupProps & HTMLDivProps>(
  ({ class: classNames, ...rest }) => {
    useStylesScoped$(`
    :global(.button-group > button:first-child) {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
    }
    :global(.button-group > button:last-child) {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
    }
    :global(.button-group > button:not(:first-child):not(:last-child)) {
      border-radius: 0;
    }
  `);
    return (
      <div class={twMerge("button-group", classNames)} {...rest}>
        <Slot />
      </div>
    );
  }
);
