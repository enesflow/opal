import { component$, QwikIntrinsicElements } from "@builder.io/qwik";
import { ClassProps } from "@components/shared";
import { twMerge } from "tailwind-merge";

const SVGs = {
  "ring-90": (
    <svg
      aria-hidden="true"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z">
        <animateTransform
          attributeName="transform"
          type="rotate"
          dur="0.75s"
          values="0 12 12;360 12 12"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  ),
  "ring-90-with-bg": (
    <svg
      aria-hidden="true"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
        opacity=".25"
      />
      <path d="M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z">
        <animateTransform
          attributeName="transform"
          type="rotate"
          dur="0.75s"
          values="0 12 12;360 12 12"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  ),
  "ring-180": (
    <svg
      aria-hidden="true"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z">
        <animateTransform
          attributeName="transform"
          type="rotate"
          dur="0.75s"
          values="0 12 12;360 12 12"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  ),
  "ring-180-with-bg": (
    <svg
      aria-hidden="true"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
        opacity=".25"
      />
      <path d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z">
        <animateTransform
          attributeName="transform"
          type="rotate"
          dur="0.75s"
          values="0 12 12;360 12 12"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  ),
  "ring-270": (
    <svg
      aria-hidden="true"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M10.72,19.9a8,8,0,0,1-6.5-9.79A7.77,7.77,0,0,1,10.4,4.16a8,8,0,0,1,9.49,6.52A1.54,1.54,0,0,0,21.38,12h.13a1.37,1.37,0,0,0,1.38-1.54,11,11,0,1,0-12.7,12.39A1.54,1.54,0,0,0,12,21.34h0A1.47,1.47,0,0,0,10.72,19.9Z">
        <animateTransform
          attributeName="transform"
          type="rotate"
          dur="0.75s"
          values="0 12 12;360 12 12"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  ),
  "ring-270-with-bg": (
    <svg
      aria-hidden="true"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
        opacity=".25"
      />
      <path d="M10.72,19.9a8,8,0,0,1-6.5-9.79A7.77,7.77,0,0,1,10.4,4.16a8,8,0,0,1,9.49,6.52A1.54,1.54,0,0,0,21.38,12h.13a1.37,1.37,0,0,0,1.38-1.54,11,11,0,1,0-12.7,12.39A1.54,1.54,0,0,0,12,21.34h0A1.47,1.47,0,0,0,10.72,19.9Z">
        <animateTransform
          attributeName="transform"
          type="rotate"
          dur="0.75s"
          values="0 12 12;360 12 12"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  ),
  "ring-resize": (
    <svg
      aria-hidden="true"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <circle
          cx="12"
          cy="12"
          r="9.5"
          fill="none"
          stroke-width="3"
          stroke-linecap="round"
          stroke="currentColor"
        >
          <animate
            attributeName="stroke-dasharray"
            dur="1.5s"
            calcMode="spline"
            values="0 150;42 150;42 150;42 150"
            keyTimes="0;0.475;0.95;1"
            keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1"
            repeatCount="indefinite"
          />
          <animate
            attributeName="stroke-dashoffset"
            dur="1.5s"
            calcMode="spline"
            values="0;-16;-59;-59"
            keyTimes="0;0.475;0.95;1"
            keySplines="0.42,0,0.58,1;0.42,0,0.58,1;0.42,0,0.58,1"
            repeatCount="indefinite"
          />
        </circle>
        <animateTransform
          attributeName="transform"
          type="rotate"
          dur="2s"
          values="0 12 12;360 12 12"
          repeatCount="indefinite"
        />
      </g>
    </svg>
  ),
  lines: (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <g>
        <line x1="12" x2="12" y1="2" y2="6" />
        <line x1="12" x2="12" y1="18" y2="22" />
        <line x1="4.93" x2="7.76" y1="4.93" y2="7.76" />
        <line x1="16.24" x2="19.07" y1="16.24" y2="19.07" />
        <line x1="2" x2="6" y1="12" y2="12" />
        <line x1="18" x2="22" y1="12" y2="12" />
        <line x1="4.93" x2="7.76" y1="19.07" y2="16.24" />
        <line x1="16.24" x2="19.07" y1="7.76" y2="4.93" />
        <animateTransform
          attributeName="transform"
          type="rotate"
          dur="0.75s"
          values="0 12 12;360 12 12"
          repeatCount="indefinite"
        />
      </g>
    </svg>
  ),
  bars: (
    <svg
      aria-hidden="true"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <rect x="11" y="1" width="2" height="5" opacity=".14" />
        <rect
          x="11"
          y="1"
          width="2"
          height="5"
          transform="rotate(30 12 12)"
          opacity=".29"
        />
        <rect
          x="11"
          y="1"
          width="2"
          height="5"
          transform="rotate(60 12 12)"
          opacity=".43"
        />
        <rect
          x="11"
          y="1"
          width="2"
          height="5"
          transform="rotate(90 12 12)"
          opacity=".57"
        />
        <rect
          x="11"
          y="1"
          width="2"
          height="5"
          transform="rotate(120 12 12)"
          opacity=".71"
        />
        <rect
          x="11"
          y="1"
          width="2"
          height="5"
          transform="rotate(150 12 12)"
          opacity=".86"
        />
        <rect x="11" y="1" width="2" height="5" transform="rotate(180 12 12)" />
        <animateTransform
          attributeName="transform"
          type="rotate"
          calcMode="discrete"
          dur="0.75s"
          values="0 12 12;30 12 12;60 12 12;90 12 12;120 12 12;150 12 12;180 12 12;210 12 12;240 12 12;270 12 12;300 12 12;330 12 12;360 12 12"
          repeatCount="indefinite"
        />
      </g>
    </svg>
  ),
};

const sizes = {
  xs: "w-6 h-6",
  sm: "w-7 h-7",
  md: "w-8 h-8",
  lg: "w-9 h-9",
  xl: "w-10 h-10",
};

const _lightVariant = {
  white: "text-white",
  black: "text-black",
  slate: "text-slate-400",
  gray: "text-gray-400",
  zinc: "text-zinc-400",
  neutral: "text-neutral-400",
  stone: "text-stone-400",
  red: "text-red-400",
  orange: "text-orange-400",
  amber: "text-amber-400",
  yellow: "text-yellow-400",
  lime: "text-lime-400",
  green: "text-green-400",
  emerald: "text-emerald-400",
  teal: "text-teal-400",
  cyan: "text-cyan-400",
  sky: "text-sky-400",
  blue: "text-blue-400",
  indigo: "text-indigo-400",
  violet: "text-violet-400",
  purple: "text-purple-400",
  fuchsia: "text-fuchsia-400",
  pink: "text-pink-400",
  rose: "text-rose-400",
};
const _mediumVariant = {
  white: "text-white",
  black: "text-black",
  slate: "text-slate-600",
  gray: "text-gray-600",
  zinc: "text-zinc-600",
  neutral: "text-neutral-600",
  stone: "text-stone-600",
  red: "text-red-600",
  orange: "text-orange-600",
  amber: "text-amber-600",
  yellow: "text-yellow-600",
  lime: "text-lime-600",
  green: "text-green-600",
  emerald: "text-emerald-600",
  teal: "text-teal-600",
  cyan: "text-cyan-600",
  sky: "text-sky-600",
  blue: "text-blue-600",
  indigo: "text-indigo-600",
  violet: "text-violet-600",
  purple: "text-purple-600",
  fuchsia: "text-fuchsia-600",
  pink: "text-pink-600",
  rose: "text-rose-600",
};

const variants = {
  light: _lightVariant,
  medium: _mediumVariant,
  dark: {
    white: "text-white",
    black: "text-black",
    slate: "text-slate-900",
    gray: "text-gray-900",
    zinc: "text-zinc-900",
    neutral: "text-neutral-900",
    stone: "text-stone-900",
    red: "text-red-900",
    orange: "text-orange-900",
    amber: "text-amber-900",
    yellow: "text-yellow-900",
    lime: "text-lime-900",
    green: "text-green-900",
    emerald: "text-emerald-900",
    teal: "text-teal-900",
    cyan: "text-cyan-900",
    sky: "text-sky-900",
    blue: "text-blue-900",
    indigo: "text-indigo-900",
    violet: "text-violet-900",
    purple: "text-purple-900",
    fuchsia: "text-fuchsia-900",
    pink: "text-pink-900",
    rose: "text-rose-900",
  },
  "outline-light": _lightVariant,
  "outline-medium": _mediumVariant,
};

export type SpinnerProps = {
  type?: keyof typeof SVGs;
  srOnlyText?: string;
  size?: keyof typeof sizes;
  variant?: keyof typeof variants;
  color?: keyof (typeof variants)[keyof typeof variants];
} & ClassProps;
export const Spinner = component$<SpinnerProps & QwikIntrinsicElements["span"]>(
  ({
    srOnlyText = "Loading...",
    size = "md",
    variant = "light",
    color = "black",
    class: classNames,
    type = "ring-270-with-bg",
    ...rest
  }) => {
    return (
      <div
        role="status"
        class={twMerge(
          "inline-block [&>svg]:w-full [&>svg]:h-full",
          sizes[size],
          variants[variant][color],
          "[&>svg]:fill-current [&>svg]:stroke-current",
          "fill-red-500",
          classNames
        )}
        {...rest}
      >
        {SVGs[type]}
        <span class="sr-only">{srOnlyText}</span>
      </div>
    );
  }
);
