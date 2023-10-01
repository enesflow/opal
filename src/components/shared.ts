import {ClassList} from "@builder.io/qwik";

export type ClassProps = { class?: Exclude<ClassList, Record<any, any>> };