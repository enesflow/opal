import {NiceSection, ShowcaseSection} from "#/lib-types/src/root";
import { $, component$, Slot, useSignal, useStyles$ } from "@builder.io/qwik";
import { Spinner } from "@components/styled/spinners/spinners";
import { Button, ButtonGroup, Col, Row, Text, Title } from "~/components";
import styles from "./global.css?inline";

export const ShowcaseSection = component$(() => {
  return (
    <div class="flex flex-col align-middle items-center justify-center gap-2 h-full flex-wrap">
      <Slot />
    </div>
  );
});

export const ShowcaseRow = component$(() => {
  return (
    <div class="flex align-middle items-center justify-center gap-2 flex-wrap">
      <Slot />
    </div>
  );
});

export const ShowcaseCol = component$(() => {
  return (
    <div class="flex flex-col align-middle items-center justify-center gap-2 flex-wrap">
      <Slot />
    </div>
  );
});

export const NiceSection = component$(() => {
  return (
    <section class="mt-8 border-2 border-neutral-300 p-8 rounded-lg">
      <Slot />
    </section>
  );
});


export default component$(() => {
  useStyles$(styles);
  const buttonsDisabledSig = useSignal<boolean | undefined>(undefined);
  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <title>Opal - A component library for Qwik</title>
      </head>
      <body class="md:m-8 m-4">
        <Title>Opal - A component library for Qwik</Title>
        {/*<br />
        <Menu itemsClass="absolute flex flex-col">
          <MenuTrigger q:slot="trigger">Click me</MenuTrigger>
          <MenuItem onClick$={() => alert("Clicked on Item 1")}>
            Item 1
          </MenuItem>
          <MenuItem onClick$={() => alert("Clicked on Item 2")}>
            Item 2
          </MenuItem>
          <MenuItem onClick$={() => alert("Clicked on Item 3")}>
            Item 3
          </MenuItem>
        </Menu>*/}
        <main class="md:w-2/3 m-auto flex flex-col gap-4">
          <NiceSection>
            <Title size="h2" class="font-mono">
              &lt;Button&gt;
            </Title>
            <hr class="my-4" />
            <ShowcaseSection>
              <Title size="h3">Light</Title>
              <ShowcaseRow>
                <Button
                  variant="light"
                  color="slate"
                  disabled={buttonsDisabledSig.value}
                >
                  Slate
                </Button>
                <Button
                  variant="light"
                  color="gray"
                  disabled={buttonsDisabledSig.value}
                >
                  Gray
                </Button>
                <Button
                  variant="light"
                  color="zinc"
                  disabled={buttonsDisabledSig.value}
                >
                  Zinc
                </Button>
                <Button
                  variant="light"
                  color="neutral"
                  disabled={buttonsDisabledSig.value}
                >
                  Neutral
                </Button>
                <Button
                  variant="light"
                  color="stone"
                  disabled={buttonsDisabledSig.value}
                >
                  Stone
                </Button>
                <Button
                  variant="light"
                  color="red"
                  disabled={buttonsDisabledSig.value}
                >
                  Red
                </Button>
                <Button
                  variant="light"
                  color="orange"
                  disabled={buttonsDisabledSig.value}
                >
                  Orange
                </Button>
                <Button
                  variant="light"
                  color="amber"
                  disabled={buttonsDisabledSig.value}
                >
                  Amber
                </Button>
                <Button
                  variant="light"
                  color="yellow"
                  disabled={buttonsDisabledSig.value}
                >
                  Yellow
                </Button>
                <Button
                  variant="light"
                  color="lime"
                  disabled={buttonsDisabledSig.value}
                >
                  Lime
                </Button>
                <Button
                  variant="light"
                  color="green"
                  disabled={buttonsDisabledSig.value}
                >
                  Green
                </Button>
                <Button
                  variant="light"
                  color="emerald"
                  disabled={buttonsDisabledSig.value}
                >
                  Emerald
                </Button>
                <Button
                  variant="light"
                  color="teal"
                  disabled={buttonsDisabledSig.value}
                >
                  Teal
                </Button>
                <Button
                  variant="light"
                  color="cyan"
                  disabled={buttonsDisabledSig.value}
                >
                  Cyan
                </Button>
                <Button
                  variant="light"
                  color="sky"
                  disabled={buttonsDisabledSig.value}
                >
                  Sky
                </Button>
                <Button
                  variant="light"
                  color="blue"
                  disabled={buttonsDisabledSig.value}
                >
                  Blue
                </Button>
                <Button
                  variant="light"
                  color="indigo"
                  disabled={buttonsDisabledSig.value}
                >
                  Indigo
                </Button>
                <Button
                  variant="light"
                  color="violet"
                  disabled={buttonsDisabledSig.value}
                >
                  Violet
                </Button>
                <Button
                  variant="light"
                  color="purple"
                  disabled={buttonsDisabledSig.value}
                >
                  Purple
                </Button>
                <Button
                  variant="light"
                  color="fuchsia"
                  disabled={buttonsDisabledSig.value}
                >
                  Fuchsia
                </Button>
                <Button
                  variant="light"
                  color="pink"
                  disabled={buttonsDisabledSig.value}
                >
                  Pink
                </Button>
                <Button
                  variant="light"
                  color="rose"
                  disabled={buttonsDisabledSig.value}
                >
                  Rose
                </Button>
              </ShowcaseRow>
              <Title size="h3">Medium</Title>
              <ShowcaseRow>
                <Button
                  variant="medium"
                  color="slate"
                  disabled={buttonsDisabledSig.value}
                >
                  Slate
                </Button>
                <Button
                  variant="medium"
                  color="gray"
                  disabled={buttonsDisabledSig.value}
                >
                  Gray
                </Button>
                <Button
                  variant="medium"
                  color="zinc"
                  disabled={buttonsDisabledSig.value}
                >
                  Zinc
                </Button>
                <Button
                  variant="medium"
                  color="neutral"
                  disabled={buttonsDisabledSig.value}
                >
                  Neutral
                </Button>
                <Button
                  variant="medium"
                  color="stone"
                  disabled={buttonsDisabledSig.value}
                >
                  Stone
                </Button>
                <Button
                  variant="medium"
                  color="red"
                  disabled={buttonsDisabledSig.value}
                >
                  Red
                </Button>
                <Button
                  variant="medium"
                  color="orange"
                  disabled={buttonsDisabledSig.value}
                >
                  Orange
                </Button>
                <Button
                  variant="medium"
                  color="amber"
                  disabled={buttonsDisabledSig.value}
                >
                  Amber
                </Button>
                <Button
                  variant="medium"
                  color="yellow"
                  disabled={buttonsDisabledSig.value}
                >
                  Yellow
                </Button>
                <Button
                  variant="medium"
                  color="lime"
                  disabled={buttonsDisabledSig.value}
                >
                  Lime
                </Button>
                <Button
                  variant="medium"
                  color="green"
                  disabled={buttonsDisabledSig.value}
                >
                  Green
                </Button>
                <Button
                  variant="medium"
                  color="emerald"
                  disabled={buttonsDisabledSig.value}
                >
                  Emerald
                </Button>
                <Button
                  variant="medium"
                  color="teal"
                  disabled={buttonsDisabledSig.value}
                >
                  Teal
                </Button>
                <Button
                  variant="medium"
                  color="cyan"
                  disabled={buttonsDisabledSig.value}
                >
                  Cyan
                </Button>
                <Button
                  variant="medium"
                  color="sky"
                  disabled={buttonsDisabledSig.value}
                >
                  Sky
                </Button>
                <Button
                  variant="medium"
                  color="blue"
                  disabled={buttonsDisabledSig.value}
                >
                  Blue
                </Button>
                <Button
                  variant="medium"
                  color="indigo"
                  disabled={buttonsDisabledSig.value}
                >
                  Indigo
                </Button>
                <Button
                  variant="medium"
                  color="violet"
                  disabled={buttonsDisabledSig.value}
                >
                  Violet
                </Button>
                <Button
                  variant="medium"
                  color="purple"
                  disabled={buttonsDisabledSig.value}
                >
                  Purple
                </Button>
                <Button
                  variant="medium"
                  color="fuchsia"
                  disabled={buttonsDisabledSig.value}
                >
                  Fuchsia
                </Button>
                <Button
                  variant="medium"
                  color="pink"
                  disabled={buttonsDisabledSig.value}
                >
                  Pink
                </Button>
                <Button
                  variant="medium"
                  color="rose"
                  disabled={buttonsDisabledSig.value}
                >
                  Rose
                </Button>
              </ShowcaseRow>
              <Title size="h3">Dark</Title>
              <ShowcaseRow>
                <Button
                  variant="dark"
                  color="slate"
                  disabled={buttonsDisabledSig.value}
                >
                  Slate
                </Button>
                <Button
                  variant="dark"
                  color="gray"
                  disabled={buttonsDisabledSig.value}
                >
                  Gray
                </Button>
                <Button
                  variant="dark"
                  color="zinc"
                  disabled={buttonsDisabledSig.value}
                >
                  Zinc
                </Button>
                <Button
                  variant="dark"
                  color="neutral"
                  disabled={buttonsDisabledSig.value}
                >
                  Neutral
                </Button>
                <Button
                  variant="dark"
                  color="stone"
                  disabled={buttonsDisabledSig.value}
                >
                  Stone
                </Button>
                <Button
                  variant="dark"
                  color="red"
                  disabled={buttonsDisabledSig.value}
                >
                  Red
                </Button>
                <Button
                  variant="dark"
                  color="orange"
                  disabled={buttonsDisabledSig.value}
                >
                  Orange
                </Button>
                <Button
                  variant="dark"
                  color="amber"
                  disabled={buttonsDisabledSig.value}
                >
                  Amber
                </Button>
                <Button
                  variant="dark"
                  color="yellow"
                  disabled={buttonsDisabledSig.value}
                >
                  Yellow
                </Button>
                <Button
                  variant="dark"
                  color="lime"
                  disabled={buttonsDisabledSig.value}
                >
                  Lime
                </Button>
                <Button
                  variant="dark"
                  color="green"
                  disabled={buttonsDisabledSig.value}
                >
                  Green
                </Button>
                <Button
                  variant="dark"
                  color="emerald"
                  disabled={buttonsDisabledSig.value}
                >
                  Emerald
                </Button>
                <Button
                  variant="dark"
                  color="teal"
                  disabled={buttonsDisabledSig.value}
                >
                  Teal
                </Button>
                <Button
                  variant="dark"
                  color="cyan"
                  disabled={buttonsDisabledSig.value}
                >
                  Cyan
                </Button>
                <Button
                  variant="dark"
                  color="sky"
                  disabled={buttonsDisabledSig.value}
                >
                  Sky
                </Button>
                <Button
                  variant="dark"
                  color="blue"
                  disabled={buttonsDisabledSig.value}
                >
                  Blue
                </Button>
                <Button
                  variant="dark"
                  color="indigo"
                  disabled={buttonsDisabledSig.value}
                >
                  Indigo
                </Button>
                <Button
                  variant="dark"
                  color="violet"
                  disabled={buttonsDisabledSig.value}
                >
                  Violet
                </Button>
                <Button
                  variant="dark"
                  color="purple"
                  disabled={buttonsDisabledSig.value}
                >
                  Purple
                </Button>
                <Button
                  variant="dark"
                  color="fuchsia"
                  disabled={buttonsDisabledSig.value}
                >
                  Fuchsia
                </Button>
                <Button
                  variant="dark"
                  color="pink"
                  disabled={buttonsDisabledSig.value}
                >
                  Pink
                </Button>
                <Button
                  variant="dark"
                  color="rose"
                  disabled={buttonsDisabledSig.value}
                >
                  Rose
                </Button>
              </ShowcaseRow>
              <Title size="h3">Outline Light</Title>
              <ShowcaseRow>
                <Button
                  variant="outline-light"
                  color="slate"
                  disabled={buttonsDisabledSig.value}
                >
                  Slate
                </Button>
                <Button
                  variant="outline-light"
                  color="gray"
                  disabled={buttonsDisabledSig.value}
                >
                  Gray
                </Button>
                <Button
                  variant="outline-light"
                  color="zinc"
                  disabled={buttonsDisabledSig.value}
                >
                  Zinc
                </Button>
                <Button
                  variant="outline-light"
                  color="neutral"
                  disabled={buttonsDisabledSig.value}
                >
                  Neutral
                </Button>
                <Button
                  variant="outline-light"
                  color="stone"
                  disabled={buttonsDisabledSig.value}
                >
                  Stone
                </Button>
                <Button
                  variant="outline-light"
                  color="red"
                  disabled={buttonsDisabledSig.value}
                >
                  Red
                </Button>
                <Button
                  variant="outline-light"
                  color="orange"
                  disabled={buttonsDisabledSig.value}
                >
                  Orange
                </Button>
                <Button
                  variant="outline-light"
                  color="amber"
                  disabled={buttonsDisabledSig.value}
                >
                  Amber
                </Button>
                <Button
                  variant="outline-light"
                  color="yellow"
                  disabled={buttonsDisabledSig.value}
                >
                  Yellow
                </Button>
                <Button
                  variant="outline-light"
                  color="lime"
                  disabled={buttonsDisabledSig.value}
                >
                  Lime
                </Button>
                <Button
                  variant="outline-light"
                  color="green"
                  disabled={buttonsDisabledSig.value}
                >
                  Green
                </Button>
                <Button
                  variant="outline-light"
                  color="emerald"
                  disabled={buttonsDisabledSig.value}
                >
                  Emerald
                </Button>
                <Button
                  variant="outline-light"
                  color="teal"
                  disabled={buttonsDisabledSig.value}
                >
                  Teal
                </Button>
                <Button
                  variant="outline-light"
                  color="cyan"
                  disabled={buttonsDisabledSig.value}
                >
                  Cyan
                </Button>
                <Button
                  variant="outline-light"
                  color="sky"
                  disabled={buttonsDisabledSig.value}
                >
                  Sky
                </Button>
                <Button
                  variant="outline-light"
                  color="blue"
                  disabled={buttonsDisabledSig.value}
                >
                  Blue
                </Button>
                <Button
                  variant="outline-light"
                  color="indigo"
                  disabled={buttonsDisabledSig.value}
                >
                  Indigo
                </Button>
                <Button
                  variant="outline-light"
                  color="violet"
                  disabled={buttonsDisabledSig.value}
                >
                  Violet
                </Button>
                <Button
                  variant="outline-light"
                  color="purple"
                  disabled={buttonsDisabledSig.value}
                >
                  Purple
                </Button>
                <Button
                  variant="outline-light"
                  color="fuchsia"
                  disabled={buttonsDisabledSig.value}
                >
                  Fuchsia
                </Button>
                <Button
                  variant="outline-light"
                  color="pink"
                  disabled={buttonsDisabledSig.value}
                >
                  Pink
                </Button>
                <Button
                  variant="outline-light"
                  color="rose"
                  disabled={buttonsDisabledSig.value}
                >
                  Rose
                </Button>
              </ShowcaseRow>
              <Title size="h3">Outline Medium</Title>
              <ShowcaseRow>
                <Button
                  variant="outline-medium"
                  color="slate"
                  disabled={buttonsDisabledSig.value}
                >
                  Slate
                </Button>
                <Button
                  variant="outline-medium"
                  color="gray"
                  disabled={buttonsDisabledSig.value}
                >
                  Gray
                </Button>
                <Button
                  variant="outline-medium"
                  color="zinc"
                  disabled={buttonsDisabledSig.value}
                >
                  Zinc
                </Button>
                <Button
                  variant="outline-medium"
                  color="neutral"
                  disabled={buttonsDisabledSig.value}
                >
                  Neutral
                </Button>
                <Button
                  variant="outline-medium"
                  color="stone"
                  disabled={buttonsDisabledSig.value}
                >
                  Stone
                </Button>
                <Button
                  variant="outline-medium"
                  color="red"
                  disabled={buttonsDisabledSig.value}
                >
                  Red
                </Button>
                <Button
                  variant="outline-medium"
                  color="orange"
                  disabled={buttonsDisabledSig.value}
                >
                  Orange
                </Button>
                <Button
                  variant="outline-medium"
                  color="amber"
                  disabled={buttonsDisabledSig.value}
                >
                  Amber
                </Button>
                <Button
                  variant="outline-medium"
                  color="yellow"
                  disabled={buttonsDisabledSig.value}
                >
                  Yellow
                </Button>
                <Button
                  variant="outline-medium"
                  color="lime"
                  disabled={buttonsDisabledSig.value}
                >
                  Lime
                </Button>
                <Button
                  variant="outline-medium"
                  color="green"
                  disabled={buttonsDisabledSig.value}
                >
                  Green
                </Button>
                <Button
                  variant="outline-medium"
                  color="emerald"
                  disabled={buttonsDisabledSig.value}
                >
                  Emerald
                </Button>
                <Button
                  variant="outline-medium"
                  color="teal"
                  disabled={buttonsDisabledSig.value}
                >
                  Teal
                </Button>
                <Button
                  variant="outline-medium"
                  color="cyan"
                  disabled={buttonsDisabledSig.value}
                >
                  Cyan
                </Button>
                <Button
                  variant="outline-medium"
                  color="sky"
                  disabled={buttonsDisabledSig.value}
                >
                  Sky
                </Button>
                <Button
                  variant="outline-medium"
                  color="blue"
                  disabled={buttonsDisabledSig.value}
                >
                  Blue
                </Button>
                <Button
                  variant="outline-medium"
                  color="indigo"
                  disabled={buttonsDisabledSig.value}
                >
                  Indigo
                </Button>
                <Button
                  variant="outline-medium"
                  color="violet"
                  disabled={buttonsDisabledSig.value}
                >
                  Violet
                </Button>
                <Button
                  variant="outline-medium"
                  color="purple"
                  disabled={buttonsDisabledSig.value}
                >
                  Purple
                </Button>
                <Button
                  variant="outline-medium"
                  color="fuchsia"
                  disabled={buttonsDisabledSig.value}
                >
                  Fuchsia
                </Button>
                <Button
                  variant="outline-medium"
                  color="pink"
                  disabled={buttonsDisabledSig.value}
                >
                  Pink
                </Button>
                <Button
                  variant="outline-medium"
                  color="rose"
                  disabled={buttonsDisabledSig.value}
                >
                  Rose
                </Button>
              </ShowcaseRow>
              <Title size="h3">Disabled</Title>
              <ShowcaseRow>
                <Button
                  variant="light"
                  color={
                    buttonsDisabledSig.value === undefined
                      ? "blue"
                      : buttonsDisabledSig.value
                      ? "green"
                      : "red"
                  }
                  onClick$={() =>
                    (buttonsDisabledSig.value = !buttonsDisabledSig.value)
                  }
                >
                  {buttonsDisabledSig.value === undefined
                    ? "Click me!"
                    : buttonsDisabledSig.value
                    ? "Enable"
                    : "Disable"}
                </Button>
              </ShowcaseRow>
              <Title size="h3">Different sizes</Title>
              <Col class="gap-2">
                <Row class="gap-2 w-full">
                  <Button
                    variant="light"
                    color="blue"
                    size="xs"
                    disabled={buttonsDisabledSig.value}
                  >
                    Extra Small
                  </Button>
                </Row>
                <Row class="gap-2 w-full">
                  <Button
                    variant="light"
                    color="blue"
                    size="sm"
                    disabled={buttonsDisabledSig.value}
                  >
                    Small
                  </Button>
                </Row>
                <Row class="gap-2 w-full">
                  <Button
                    variant="light"
                    color="blue"
                    size="md"
                    disabled={buttonsDisabledSig.value}
                  >
                    Medium
                  </Button>
                </Row>
                <Row class="gap-2 w-full">
                  <Button
                    variant="light"
                    color="blue"
                    size="lg"
                    disabled={buttonsDisabledSig.value}
                  >
                    Large
                  </Button>
                </Row>
                <Row class="gap-2 w-full">
                  <Button
                    variant="light"
                    color="blue"
                    size="xl"
                    disabled={buttonsDisabledSig.value}
                  >
                    Extra Large
                  </Button>
                </Row>
              </Col>
              <Title size="h3">Interactive</Title>
              <ShowcaseRow>
                <Button
                  variant="light"
                  color="blue"
                  disabled={buttonsDisabledSig.value}
                  onClick$={$(async () => {
                    await new Promise((resolve) => setTimeout(resolve, 1000));
                  })}
                >
                  Click me!
                </Button>
                <Button
                  variant="medium"
                  color="red"
                  disabled={buttonsDisabledSig.value}
                  onClick$={$(async () => {
                    await new Promise((resolve) => setTimeout(resolve, 1000));
                  })}
                  spinnerType="ring-resize"
                >
                  Click me!
                </Button>
                <Button
                  variant="dark"
                  color="green"
                  disabled={buttonsDisabledSig.value}
                  onClick$={$(async () => {
                    await new Promise((resolve) => setTimeout(resolve, 1000));
                  })}
                  spinnerType="ring-180"
                >
                  Click me!
                </Button>
                <Button
                  variant="outline-light"
                  color="purple"
                  disabled={buttonsDisabledSig.value}
                  onClick$={$(async () => {
                    await new Promise((resolve) => setTimeout(resolve, 1000));
                  })}
                  spinnerType="lines"
                >
                  Click me!
                </Button>
                <Button
                  variant="outline-medium"
                  color="yellow"
                  disabled={buttonsDisabledSig.value}
                  onClick$={$(async () => {
                    await new Promise((resolve) => setTimeout(resolve, 1000));
                  })}
                  spinnerType="bars"
                >
                  Click me!
                </Button>
              </ShowcaseRow>
              <Text>
                You can also use custom spinner components with the{" "}
                <code>loadingIndicator</code> prop.
              </Text>
              <ShowcaseRow>
                <Button
                  variant="light"
                  color="green"
                  loadingIndicator={
                    <Spinner color="blue" type="ring-resize" variant="medium" />
                  }
                  disabled={buttonsDisabledSig.value}
                  onClick$={$(async () => {
                    await new Promise((resolve) => setTimeout(resolve, 1000));
                  })}
                >
                  Click me!
                </Button>
                <Button
                  variant="light"
                  color="green"
                  loadingIndicator="Loading..."
                  disabled={buttonsDisabledSig.value}
                  onClick$={$(async () => {
                    await new Promise((resolve) => setTimeout(resolve, 1000));
                  })}
                >
                  Click me!
                </Button>
                <Button
                  variant="light"
                  color="green"
                  loadingIndicator={
                    <img
                      src="https://raw.githubusercontent.com/BuilderIO/qwik/main/.github/assets/qwik-logo.svg"
                      class="h-full w-auto animate-pulse"
                      width="649"
                      height="201"
                      alt="Qwik logo"
                    />
                  }
                  disabled={buttonsDisabledSig.value}
                  onClick$={$(async () => {
                    await new Promise((resolve) => setTimeout(resolve, 1000));
                  })}
                >
                  Click me!
                </Button>
              </ShowcaseRow>
            </ShowcaseSection>
          </NiceSection>
          <NiceSection>
            <Title size="h2" class="font-mono">
              &lt;ButtonGroup&gt;
            </Title>
            <hr class="my-4" />
            <ShowcaseSection>
              <ShowcaseRow>
                <ButtonGroup>
                  <Button variant="light" color="red">
                    One
                  </Button>
                  <Button variant="light" color="green">
                    Two
                  </Button>
                  <Button variant="light" color="blue">
                    Three
                  </Button>
                  <Button variant="light" color="yellow">
                    Four
                  </Button>
                  <Button variant="light" color="purple">
                    Five
                  </Button>
                  <Button variant="light" color="pink">
                    Six
                  </Button>
                </ButtonGroup>
              </ShowcaseRow>
            </ShowcaseSection>
          </NiceSection>
          <NiceSection>
            <Title size="h2">Typography</Title>
            <hr class="my-4" />
            <ShowcaseSection>
              <Title size="h2" class="font-mono">
                &lt;Title&gt;
              </Title>
              {/******************************/}
              <Title size="h6">Heading 6</Title>
              <Title size="h5">Heading 5</Title>
              <Title size="h4">Heading 4</Title>
              <Title size="h3">Heading 3</Title>
              <Title size="h2">Heading 2</Title>
              <Title size="h1">Heading 1</Title>
              {/******************************/}
              <Title size="h2" class="font-mono">
                &lt;Text&gt;
              </Title>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc,
                quis aliquam nisl nunc vel nisl. Donec euismod, nisl eget
                aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl
                nunc vel nisl. Donec euismod, nisl eget aliquam ultricies, nunc
                nisl aliquet nunc, quis aliquam nisl nunc vel nisl.
              </Text>
            </ShowcaseSection>
          </NiceSection>
          <NiceSection>
            <Title size="h2">Layout</Title>
            <hr class="my-4" />
            <ShowcaseSection>
              <Title size="h2" class="font-mono">
                &lt;Row&gt;
              </Title>
              <Row class="gap-2">
                <div class="w-24 h-24 bg-blue-300"></div>
                <div class="w-24 h-24 bg-blue-400"></div>
                <div class="w-24 h-24 bg-blue-500"></div>
                <div class="w-24 h-24 bg-blue-600"></div>
                <div class="w-24 h-24 bg-blue-700"></div>
                <div class="w-24 h-24 bg-blue-800"></div>
              </Row>
            </ShowcaseSection>
            <ShowcaseSection>
              <Title size="h2" class="font-mono m-4">
                &lt;Col&gt;
              </Title>
              <Col class="gap-2">
                <div class="w-24 h-24 bg-blue-300"></div>
                <div class="w-24 h-24 bg-blue-400"></div>
                <div class="w-24 h-24 bg-blue-500"></div>
                <div class="w-24 h-24 bg-blue-600"></div>
                <div class="w-24 h-24 bg-blue-700"></div>
                <div class="w-24 h-24 bg-blue-800"></div>
              </Col>
            </ShowcaseSection>
          </NiceSection>
          <NiceSection>
            <Title size="h2" class="font-mono">
              &lt;Spinner/&gt;
            </Title>
            <hr class="my-4" />
            <ShowcaseSection>
              <Title size="h3">Styles</Title>
              <Col class="gap-2">
                <Row class="gap-2 w-full">
                  <Spinner type="ring-90" /> Ring 90°
                </Row>
                <Row class="gap-2 w-full">
                  <Spinner type="ring-90-with-bg" /> Ring 90° filled
                </Row>
                <Row class="gap-2 w-full">
                  <Spinner type="ring-180" /> Ring 180°
                </Row>
                <Row class="gap-2 w-full">
                  <Spinner type="ring-180-with-bg" /> Ring 180° filled
                </Row>
                <Row class="gap-2 w-full">
                  <Spinner type="ring-270" /> Ring 270°
                </Row>
                <Row class="gap-2 w-full">
                  <Spinner type="ring-270-with-bg" /> Ring 270° filled
                </Row>
                <Row class="gap-2 w-full">
                  <Spinner type="ring-resize" /> Ring resize
                </Row>
                <Row class="gap-2 w-full">
                  <Spinner type="lines" /> Lines
                </Row>
                <Row class="gap-2 w-full">
                  <Spinner type="bars" /> Bars
                </Row>
              </Col>
            </ShowcaseSection>
            <ShowcaseSection>
              <Title size="h3" class="mt-2">
                Different sizes
              </Title>
              <Col class="gap-2">
                <Row class="gap-2 w-full">
                  <Spinner type="ring-270-with-bg" size="xs" /> Extra small
                </Row>
                <Row class="gap-2 w-full">
                  <Spinner type="ring-270-with-bg" size="sm" /> Small
                </Row>
                <Row class="gap-2 w-full">
                  <Spinner type="ring-270-with-bg" size="md" /> Medium
                </Row>
                <Row class="gap-2 w-full">
                  <Spinner type="ring-270-with-bg" size="lg" /> Large
                </Row>
                <Row class="gap-2 w-full">
                  <Spinner type="ring-270-with-bg" size="xl" /> Extra large
                </Row>
              </Col>
            </ShowcaseSection>
            <ShowcaseSection>
              <Title size="h3" class="mt-2">
                Different colors
              </Title>
              <Row class="flex-wrap gap-4 justify-center">
                <Row class="gap-2 bg-neutral-400 text-white rounded-lg px-2 py-1">
                  <Spinner type="ring-270-with-bg" color="white" />
                  White
                </Row>
                <Row class="gap-2">
                  <Spinner type="ring-270-with-bg" color="black" /> Black
                </Row>
                <Row class="gap-2">
                  <Spinner type="ring-270-with-bg" color="slate" /> Slate
                </Row>
                <Row class="gap-2">
                  <Spinner type="ring-270-with-bg" color="gray" /> Gray
                </Row>
                <Row class="gap-2">
                  <Spinner type="ring-270-with-bg" color="zinc" /> Zinc
                </Row>
                <Row class="gap-2">
                  <Spinner type="ring-270-with-bg" color="neutral" /> Neutral
                </Row>
                <Row class="gap-2">
                  <Spinner type="ring-270-with-bg" color="stone" /> Stone
                </Row>
                <Row class="gap-2">
                  <Spinner type="ring-270-with-bg" color="red" /> Red
                </Row>
                <Row class="gap-2">
                  <Spinner type="ring-270-with-bg" color="orange" /> Orange
                </Row>
                <Row class="gap-2">
                  <Spinner type="ring-270-with-bg" color="amber" /> Amber
                </Row>
                <Row class="gap-2">
                  <Spinner type="ring-270-with-bg" color="yellow" /> Yellow
                </Row>
                <Row class="gap-2">
                  <Spinner type="ring-270-with-bg" color="lime" /> Lime
                </Row>
                <Row class="gap-2">
                  <Spinner type="ring-270-with-bg" color="green" /> Green
                </Row>
                <Row class="gap-2">
                  <Spinner type="ring-270-with-bg" color="emerald" /> Emerald
                </Row>
                <Row class="gap-2">
                  <Spinner type="ring-270-with-bg" color="teal" /> Teal
                </Row>
                <Row class="gap-2">
                  <Spinner type="ring-270-with-bg" color="cyan" /> Cyan
                </Row>
                <Row class="gap-2">
                  <Spinner type="ring-270-with-bg" color="sky" /> Sky
                </Row>
                <Row class="gap-2">
                  <Spinner type="ring-270-with-bg" color="blue" /> Blue
                </Row>
                <Row class="gap-2">
                  <Spinner type="ring-270-with-bg" color="indigo" /> Indigo
                </Row>
                <Row class="gap-2">
                  <Spinner type="ring-270-with-bg" color="violet" /> Violet
                </Row>
                <Row class="gap-2">
                  <Spinner type="ring-270-with-bg" color="purple" /> Purple
                </Row>
                <Row class="gap-2">
                  <Spinner type="ring-270-with-bg" color="fuchsia" /> Fuchsia
                </Row>
                <Row class="gap-2">
                  <Spinner type="ring-270-with-bg" color="pink" /> Pink
                </Row>
                <Row class="gap-2">
                  <Spinner type="ring-270-with-bg" color="rose" /> Rose
                </Row>
              </Row>
              <Text>
                You can also add color variants to the colors to get a different
                look.
              </Text>
              <Row class="flex-wrap gap-4 justify-center">
                <Row class="gap-2">
                  <Spinner
                    type="ring-270-with-bg"
                    color="red"
                    variant="light"
                  />{" "}
                  Light
                </Row>
                <Row class="gap-2">
                  <Spinner
                    type="ring-270-with-bg"
                    color="red"
                    variant="medium"
                  />{" "}
                  Medium
                </Row>
                <Row class="gap-2">
                  <Spinner type="ring-270-with-bg" color="red" variant="dark" />{" "}
                  Dark
                </Row>
              </Row>
              <Row class="flex-wrap gap-4 justify-center">
                <Row class="gap-2">
                  <Spinner
                    type="ring-270-with-bg"
                    color="green"
                    variant="light"
                  />{" "}
                  Light
                </Row>
                <Row class="gap-2">
                  <Spinner
                    type="ring-270-with-bg"
                    color="green"
                    variant="medium"
                  />{" "}
                  Medium
                </Row>
                <Row class="gap-2">
                  <Spinner
                    type="ring-270-with-bg"
                    color="green"
                    variant="dark"
                  />{" "}
                  Dark
                </Row>
              </Row>
              <Row class="flex-wrap gap-4 justify-center">
                <Row class="gap-2">
                  <Spinner
                    type="ring-270-with-bg"
                    color="blue"
                    variant="light"
                  />{" "}
                  Light
                </Row>
                <Row class="gap-2">
                  <Spinner
                    type="ring-270-with-bg"
                    color="blue"
                    variant="medium"
                  />{" "}
                  Medium
                </Row>
                <Row class="gap-2">
                  <Spinner
                    type="ring-270-with-bg"
                    color="blue"
                    variant="dark"
                  />{" "}
                  Dark
                </Row>
              </Row>
            </ShowcaseSection>
          </NiceSection>
        </main>
      </body>
    </>
  );
});
