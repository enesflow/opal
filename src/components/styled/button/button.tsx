import {
  component$,
  QRL,
  QwikIntrinsicElements,
  QwikJSX,
  QwikMouseEvent,
  Slot,
  useSignal,
} from "@builder.io/qwik";
import { ClassProps } from "@components/shared";
import { Spinner, SpinnerProps } from "@components/styled/spinners/spinners";
import { twMerge } from "tailwind-merge";

function preprocessStyles<T extends Record<string, Record<string, string>>>(
  variants: T
): T {
  for (const key in variants) {
    const variant = variants[key] as any;
    for (const color in variant) {
      variant[color] = `${variant[color]} rounded-lg`;
      if (key.startsWith("outline")) {
        variant[color] = `${variant[color]} border-2`;
      }
    }
  }
  return variants;
}

const variants = preprocessStyles({
  light: {
    slate: "text-slate-700 bg-slate-200 enabled:hover:bg-slate-300",
    gray: "text-gray-700 bg-gray-200 enabled:hover:bg-gray-300",
    zinc: "text-zinc-700 bg-zinc-200 enabled:hover:bg-zinc-300",
    neutral: "text-neutral-700 bg-neutral-200 enabled:hover:bg-neutral-300",
    stone: "text-stone-700 bg-stone-200 enabled:hover:bg-stone-300",
    red: "text-red-700 bg-red-200 enabled:hover:bg-red-300",
    orange: "text-orange-700 bg-orange-200 enabled:hover:bg-orange-300",
    amber: "text-amber-700 bg-amber-200 enabled:hover:bg-amber-300",
    yellow: "text-yellow-700 bg-yellow-200 enabled:hover:bg-yellow-300",
    lime: "text-lime-700 bg-lime-200 enabled:hover:bg-lime-300",
    green: "text-green-700 bg-green-200 enabled:hover:bg-green-300",
    emerald: "text-emerald-700 bg-emerald-200 enabled:hover:bg-emerald-300",
    teal: "text-teal-700 bg-teal-200 enabled:hover:bg-teal-300",
    cyan: "text-cyan-700 bg-cyan-200 enabled:hover:bg-cyan-300",
    sky: "text-sky-700 bg-sky-200 enabled:hover:bg-sky-300",
    blue: "text-blue-700 bg-blue-200 enabled:hover:bg-blue-300",
    indigo: "text-indigo-700 bg-indigo-200 enabled:hover:bg-indigo-300",
    violet: "text-violet-700 bg-violet-200 enabled:hover:bg-violet-300",
    purple: "text-purple-700 bg-purple-200 enabled:hover:bg-purple-300",
    fuchsia: "text-fuchsia-700 bg-fuchsia-200 enabled:hover:bg-fuchsia-300",
    pink: "text-pink-700 bg-pink-200 enabled:hover:bg-pink-300",
    rose: "text-rose-700 bg-rose-200 enabled:hover:bg-rose-300",
  },
  medium: {
    slate: "text-slate-50 bg-slate-500 enabled:hover:bg-slate-600",
    gray: "text-gray-50 bg-gray-500 enabled:hover:bg-gray-600",
    zinc: "text-zinc-50 bg-zinc-500 enabled:hover:bg-zinc-600",
    neutral: "text-neutral-50 bg-neutral-500 enabled:hover:bg-neutral-600",
    stone: "text-stone-50 bg-stone-500 enabled:hover:bg-stone-600",
    red: "text-red-50 bg-red-500 enabled:hover:bg-red-600",
    orange: "text-orange-50 bg-orange-500 enabled:hover:bg-orange-600",
    amber: "text-amber-50 bg-amber-500 enabled:hover:bg-amber-600",
    yellow: "text-yellow-50 bg-yellow-500 enabled:hover:bg-yellow-600",
    lime: "text-lime-50 bg-lime-500 enabled:hover:bg-lime-600",
    green: "text-green-50 bg-green-500 enabled:hover:bg-green-600",
    emerald: "text-emerald-50 bg-emerald-500 enabled:hover:bg-emerald-600",
    teal: "text-teal-50 bg-teal-500 enabled:hover:bg-teal-600",
    cyan: "text-cyan-50 bg-cyan-500 enabled:hover:bg-cyan-600",
    sky: "text-sky-50 bg-sky-500 enabled:hover:bg-sky-600",
    blue: "text-blue-50 bg-blue-500 enabled:hover:bg-blue-600",
    indigo: "text-indigo-50 bg-indigo-500 enabled:hover:bg-indigo-600",
    violet: "text-violet-50 bg-violet-500 enabled:hover:bg-violet-600",
    purple: "text-purple-50 bg-purple-500 enabled:hover:bg-purple-600",
    fuchsia: "text-fuchsia-50 bg-fuchsia-500 enabled:hover:bg-fuchsia-600",
    pink: "text-pink-50 bg-pink-500 enabled:hover:bg-pink-600",
    rose: "text-rose-50 bg-rose-500 enabled:hover:bg-rose-600",
  },
  dark: {
    slate: "text-slate-50 bg-slate-800 enabled:hover:bg-slate-900",
    gray: "text-gray-50 bg-gray-800 enabled:hover:bg-gray-900",
    zinc: "text-zinc-50 bg-zinc-800 enabled:hover:bg-zinc-900",
    neutral: "text-neutral-50 bg-neutral-800 enabled:hover:bg-neutral-900",
    stone: "text-stone-50 bg-stone-800 enabled:hover:bg-stone-900",
    red: "text-red-50 bg-red-800 enabled:hover:bg-red-900",
    orange: "text-orange-50 bg-orange-800 enabled:hover:bg-orange-900",
    amber: "text-amber-50 bg-amber-800 enabled:hover:bg-amber-900",
    yellow: "text-yellow-50 bg-yellow-800 enabled:hover:bg-yellow-900",
    lime: "text-lime-50 bg-lime-800 enabled:hover:bg-lime-900",
    green: "text-green-50 bg-green-800 enabled:hover:bg-green-900",
    emerald: "text-emerald-50 bg-emerald-800 enabled:hover:bg-emerald-900",
    teal: "text-teal-50 bg-teal-800 enabled:hover:bg-teal-900",
    cyan: "text-cyan-50 bg-cyan-800 enabled:hover:bg-cyan-900",
    sky: "text-sky-50 bg-sky-800 enabled:hover:bg-sky-900",
    blue: "text-blue-50 bg-blue-800 enabled:hover:bg-blue-900",
    indigo: "text-indigo-50 bg-indigo-800 enabled:hover:bg-indigo-900",
    violet: "text-violet-50 bg-violet-800 enabled:hover:bg-violet-900",
    purple: "text-purple-50 bg-purple-800 enabled:hover:bg-purple-900",
    fuchsia: "text-fuchsia-50 bg-fuchsia-800 enabled:hover:bg-fuchsia-900",
    pink: "text-pink-50 bg-pink-800 enabled:hover:bg-pink-900",
    rose: "text-rose-50 bg-rose-800 enabled:hover:bg-rose-900",
  },
  "outline-light": {
    slate:
      "text-slate-700 bg-slate-100 border-slate-400 enabled:hover:bg-slate-200",
    gray: "text-gray-700 bg-gray-100 border-gray-400 enabled:hover:bg-gray-200",
    zinc: "text-zinc-700 bg-zinc-100 border-zinc-400 enabled:hover:bg-zinc-200",
    neutral:
      "text-neutral-700 bg-neutral-100 border-neutral-400 enabled:hover:bg-neutral-200",
    stone:
      "text-stone-700 bg-stone-100 border-stone-400 enabled:hover:bg-stone-200",
    red: "text-red-700 bg-red-100 border-red-400 enabled:hover:bg-red-200",
    orange:
      "text-orange-700 bg-orange-100 border-orange-400 enabled:hover:bg-orange-200",
    amber:
      "text-amber-700 bg-amber-100 border-amber-400 enabled:hover:bg-amber-200",
    yellow:
      "text-yellow-700 bg-yellow-100 border-yellow-400 enabled:hover:bg-yellow-200",
    lime: "text-lime-700 bg-lime-100 border-lime-400 enabled:hover:bg-lime-200",
    green:
      "text-green-700 bg-green-100 border-green-400 enabled:hover:bg-green-200",
    emerald:
      "text-emerald-700 bg-emerald-100 border-emerald-400 enabled:hover:bg-emerald-200",
    teal: "text-teal-700 bg-teal-100 border-teal-400 enabled:hover:bg-teal-200",
    cyan: "text-cyan-700 bg-cyan-100 border-cyan-400 enabled:hover:bg-cyan-200",
    sky: "text-sky-700 bg-sky-100 border-sky-400 enabled:hover:bg-sky-200",
    blue: "text-blue-700 bg-blue-100 border-blue-400 enabled:hover:bg-blue-200",
    indigo:
      "text-indigo-700 bg-indigo-100 border-indigo-400 enabled:hover:bg-indigo-200",
    violet:
      "text-violet-700 bg-violet-100 border-violet-400 enabled:hover:bg-violet-200",
    purple:
      "text-purple-700 bg-purple-100 border-purple-400 enabled:hover:bg-purple-200",
    fuchsia:
      "text-fuchsia-700 bg-fuchsia-100 border-fuchsia-400 enabled:hover:bg-fuchsia-200",
    pink: "text-pink-700 bg-pink-100 border-pink-400 enabled:hover:bg-pink-200",
    rose: "text-rose-700 bg-rose-100 border-rose-400 enabled:hover:bg-rose-200",
  },
  "outline-medium": {
    slate:
      "text-slate-950 bg-slate-300 border-slate-600 enabled:hover:bg-slate-400",
    gray: "text-gray-950 bg-gray-300 border-gray-600 enabled:hover:bg-gray-400",
    zinc: "text-zinc-950 bg-zinc-300 border-zinc-600 enabled:hover:bg-zinc-400",
    neutral:
      "text-neutral-950 bg-neutral-300 border-neutral-600 enabled:hover:bg-neutral-400",
    stone:
      "text-stone-950 bg-stone-300 border-stone-600 enabled:hover:bg-stone-400",
    red: "text-red-950 bg-red-300 border-red-600 enabled:hover:bg-red-400",
    orange:
      "text-orange-950 bg-orange-300 border-orange-600 enabled:hover:bg-orange-400",
    amber:
      "text-amber-950 bg-amber-300 border-amber-600 enabled:hover:bg-amber-400",
    yellow:
      "text-yellow-950 bg-yellow-300 border-yellow-600 enabled:hover:bg-yellow-400",
    lime: "text-lime-950 bg-lime-300 border-lime-600 enabled:hover:bg-lime-400",
    green:
      "text-green-950 bg-green-300 border-green-600 enabled:hover:bg-green-400",
    emerald:
      "text-emerald-950 bg-emerald-300 border-emerald-600 enabled:hover:bg-emerald-400",
    teal: "text-teal-950 bg-teal-300 border-teal-600 enabled:hover:bg-teal-400",
    cyan: "text-cyan-950 bg-cyan-300 border-cyan-600 enabled:hover:bg-cyan-400",
    sky: "text-sky-950 bg-sky-300 border-sky-600 enabled:hover:bg-sky-400",
    blue: "text-blue-950 bg-blue-300 border-blue-600 enabled:hover:bg-blue-400",
    indigo:
      "text-indigo-950 bg-indigo-300 border-indigo-600 enabled:hover:bg-indigo-400",
    violet:
      "text-violet-950 bg-violet-300 border-violet-600 enabled:hover:bg-violet-400",
    purple:
      "text-purple-950 bg-purple-300 border-purple-600 enabled:hover:bg-purple-400",
    fuchsia:
      "text-fuchsia-950 bg-fuchsia-300 border-fuchsia-600 enabled:hover:bg-fuchsia-400",
    pink: "text-pink-950 bg-pink-300 border-pink-600 enabled:hover:bg-pink-400",
    rose: "text-rose-950 bg-rose-300 border-rose-600 enabled:hover:bg-rose-400",
  },
});

const sizes = {
  xs: "px-3 py-2 text-xs",
  sm: "px-3 py-2 text-sm",
  md: "px-5 py-2.5 text-sm",
  lg: "px-5 py-3 text-base",
  xl: "px-6 py-3.5 text-base",
};
const outlineSizes = {
  xs: "px-[0.625rem] py-[0.375rem] text-xs",
  sm: "px-[0.625rem] py-[0.375rem] text-sm",
  md: "px-[1rem] py-[0.5rem] text-sm",
  lg: "px-[1rem] py-[0.5rem] text-base",
  xl: "px-[1.25rem] py-[0.75rem] text-base",
};

export type ButtonVariants = keyof typeof variants;
export type ButtonColors = keyof (typeof variants)[ButtonVariants];

export type StyledButtonProps = {
  // TODO: Dont exclude Record, but create a utility class that converts? it to usable class
  variant?: keyof typeof variants;
  color?: ButtonColors;
  size?: keyof typeof sizes & keyof typeof outlineSizes;
  onClick$?:
    | ((
        event: QwikMouseEvent<HTMLButtonElement>,
        element: HTMLButtonElement
      ) => void | Promise<void>)
    | QRL<
        (
          event: QwikMouseEvent<HTMLButtonElement>,
          element: HTMLButtonElement
        ) => void | Promise<void>
      >;
  loadingIndicator?: QwikJSX.Element | string;
  spinnerType?: SpinnerProps["type"];
} & ClassProps;
export type HTMLButtonProps = QwikIntrinsicElements["button"];

export type ButtonProps = StyledButtonProps & HTMLButtonProps;

export const Button = component$<ButtonProps>(
  ({
    size = "md",
    variant = "light",
    color = "neutral",
    class: classNames,
    onClick$,
    loadingIndicator,
    spinnerType = "ring-270-with-bg",
    disabled,
    ...rest
  }) => {
    const loadingSig = useSignal<boolean | undefined>(undefined);
    return (
      <button
        class={twMerge(
          variant.startsWith("outline") ? outlineSizes[size] : sizes[size],
          "transition-[background-color,opacity] duration-150 ease-out opacity-100 relative",
          variants[variant][color],
          disabled && "opacity-50 cursor-not-allowed",
          loadingSig.value && "bg-opacity-75 cursor-wait",
          classNames
        )}
        onClick$={async (event, element) => {
          if (loadingSig.value || disabled || !onClick$) return;
          loadingSig.value = true;
          await onClick$(event, element);
          loadingSig.value = false;
        }}
        disabled={disabled || loadingSig.value}
        {...rest}
      >
        {loadingSig.value && (
          <div class="absolute inset-0 flex items-center justify-center animate-pop-in">
            {loadingIndicator ?? (
              <Spinner
                color={color}
                variant={variant}
                size={size}
                type={spinnerType}
              />
            )}
          </div>
        )}
        <div
          class={
            loadingSig.value
              ? "animate-pop-out"
              : loadingSig.value === false && "" + "animate-pop-in"
          }
        >
          <Slot />
        </div>
      </button>
    );
  }
);
