import { component$, QwikIntrinsicElements, Slot } from "@builder.io/qwik";
import { ClassProps } from "@components/shared";
import { twMerge } from "tailwind-merge";

const typographyClasses = {
  h1: "text-center font-extrabold tracking-tight md:text-5xl text-4xl",
  h2: "text-center font-bold tracking-tight md:text-4xl text-3xl",
  h3: "text-center font-semibold tracking-tight md:text-3xl text-2xl",
  h4: "text-center font-semibold tracking-tight md:text-2xl text-xl",
  h5: "text-center font-semibold tracking-tight md:text-xl text-lg",
  h6: "text-center font-medium tracking-tight md:text-lg text-base",
  // h7: "text-center font-medium tracking-tight md:text-base text-sm",
};

export type TitleProps = {
  size?: keyof typeof typographyClasses;
} & ClassProps;

export const Title = component$<QwikIntrinsicElements["h1"] & TitleProps>(
  ({ class: classNames, size = "h1", ...rest }) => {
    return (
      <h1 class={twMerge(typographyClasses[size], classNames)} {...rest}>
        <Slot />
      </h1>
    );
  }
);

export const Text = component$<QwikIntrinsicElements["p"] & ClassProps>(
  ({ class: classNames, ...rest }) => {
    return (
      <p class={twMerge("text-base", classNames)} {...rest}>
        <Slot />
      </p>
    );
  }
);
