import { component$, QwikIntrinsicElements, Slot } from "@builder.io/qwik";
import {
  Menu as HeadlessMenu,
  MenuItem as HeadlessMenuItem,
  MenuItemProps as HeadlessMenuItemProps,
  MenuProps as HeadlessMenuProps,
} from "@components/headless";
import { ClassProps } from "@components/shared";
import { twMerge } from "tailwind-merge";

export const Menu = component$<
  HeadlessMenuProps & QwikIntrinsicElements["div"]
>(({ class: classNames, ...rest }) => {
  return (
    <HeadlessMenu class={twMerge(classNames)} {...rest}>
      <div q:slot="trigger">
        <Slot name="trigger" />
      </div>
      <Slot />
    </HeadlessMenu>
  );
});

export const MenuItem = component$<HeadlessMenuItemProps>(
  ({ class: classNames, ...rest }) => {
    return (
      <HeadlessMenuItem class={twMerge(classNames)} {...rest}>
        <div
          class={twMerge(
            "px-2 py-1 rounded-lg bg-gray-500 w-full cursor-pointer inline-flex items-center justify-center",
            classNames
          )}
        >
          <Slot />
        </div>
      </HeadlessMenuItem>
    );
  }
);

export const MenuTrigger = component$<
  QwikIntrinsicElements["div"] & ClassProps
>(({ class: classNames, ...rest }) => {
  return (
    <div
      class={twMerge(
        "px-2 py-1 rounded-lg shadow-md cursor-pointer inline-flex items-center justify-center",
        classNames
      )}
      {...rest}
    >
      <Slot />
    </div>
  );
});
