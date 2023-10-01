import {
  $,
  component$,
  createContextId,
  QwikIntrinsicElements,
  QwikKeyboardEvent,
  Signal,
  Slot,
  useContextProvider,
  useId,
  useOnWindow,
  useSignal,
  useStore,
  useTask$,
  useVisibleTask$,
} from "@builder.io/qwik";
import { ClassProps } from "@components/shared";
import { twMerge } from "tailwind-merge";

export type MenuProps = {
  itemsClass?: ClassProps["class"];
  keepMenuOpenWhenItemClicked?: boolean;
} & ClassProps;

export type MenuContextService = {
  currentItemId: Signal<string | undefined>;
};
export const menuContext = createContextId<MenuContextService>("opal-menu");

export const Menu = component$<MenuProps & QwikIntrinsicElements["div"]>(
  ({
    keepMenuOpenWhenItemClicked,
    itemsClass,
    class: classNames,
    ...rest
  }) => {
    const isExpandedSig = useSignal<boolean>(false);
    const triggerRef = useSignal<HTMLButtonElement>();
    const menuRef = useSignal<HTMLDivElement>();
    const itemsRef = useSignal<HTMLDivElement>();
    const itemsRefs = useStore<HTMLButtonElement[]>([]);
    const menuId = useId(); // only used for aria-labelledby (accessibility)
    const itemsId = useId(); // only used for aria-controls (accessibility)
    const currentItemId = useSignal<string | undefined>(undefined);
    const menuContextService: MenuContextService = {
      currentItemId,
    };
    const currentInFocusItemIndex = useSignal<number>(-1);

    useContextProvider(menuContext, menuContextService);

    useTask$(({ track }) => {
      track(() => isExpandedSig.value);
      if (!isExpandedSig.value) {
        currentInFocusItemIndex.value = -1;
        currentItemId.value = undefined;
      }
    });

    useVisibleTask$(() => {
      const items = itemsRef.value?.querySelectorAll("button");
      if (items?.length) {
        items.forEach((item) => itemsRefs.push(item));
      }
    });

    useOnWindow(
      "click",
      $((e) => {
        if (
          isExpandedSig.value &&
          (keepMenuOpenWhenItemClicked
            ? !menuRef.value?.contains(e.target as Node)
            : !triggerRef.value?.contains(e.target as Node))
        ) {
          isExpandedSig.value = false;
        }
      })
    );

    return (
      <div
        id={menuId}
        class={twMerge("inline-block relative focus:outline-none", classNames)}
        {...rest}
        ref={menuRef}
        onkeydown$={$((e: QwikKeyboardEvent) => {
          if (e.key === "Enter") {
            if (!isExpandedSig.value) {
              isExpandedSig.value = true;
              return;
            } else {
              itemsRefs[currentInFocusItemIndex.value]?.click();
            }
          } else if (e.key === "Escape") {
            isExpandedSig.value = false;
            triggerRef.value?.focus();
          } else if (e.key === "ArrowDown" || e.key === "ArrowUp") {
            let nextIndex = currentInFocusItemIndex.value;
            if (e.key === "ArrowDown") {
              nextIndex++;
              if (nextIndex >= itemsRefs.length) {
                nextIndex = 0;
              }
            } else if (e.key === "ArrowUp") {
              nextIndex--;
              if (nextIndex < 0) {
                nextIndex = itemsRefs.length - 1;
              }
            }

            currentInFocusItemIndex.value = nextIndex;
            currentItemId.value = itemsRefs[nextIndex]?.id;
            itemsRefs[nextIndex]?.focus();
          }
        })}
        preventdefault:keydown
        tabIndex={0}
      >
        <button
          onClick$={$(() => (isExpandedSig.value = !isExpandedSig.value))}
          ref={triggerRef}
          aria-haspopup
          aria-expanded={isExpandedSig.value}
          aria-controls={isExpandedSig.value ? itemsId : undefined}
        >
          <Slot name="trigger" />
        </button>
        <nav
          id={itemsId}
          role="menu"
          class={twMerge(itemsClass, !isExpandedSig.value && "hidden")}
          ref={itemsRef}
          aria-labelledby={menuId}
        >
          <Slot />
        </nav>
      </div>
    );
  }
);

export type MenuItemProps = {} & ClassProps & QwikIntrinsicElements["button"];
export const MenuItem = component$<MenuItemProps>(({ class: classNames, ...rest }) => {
  const itemId = useId();
  // const menuContextService = useContext(menuContext);
  // const isFocused = menuContextService.currentItemId.value === itemId;

  // we just need a focusable div, we don't use a button because
  // we want the developer to be able to use whatever they want

  return (
    <button
      id={itemId}
      class={twMerge("focus:outline-none", classNames)}
      {...rest}
      role="menuitem"
    >
      <Slot />
    </button>
  );
});
