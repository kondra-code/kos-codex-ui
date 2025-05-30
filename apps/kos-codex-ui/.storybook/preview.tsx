import "reflect-metadata";
import { Global, ThemeProvider } from "@emotion/react";
import { Preview } from "@storybook/react";
import { getStyles } from "@kosdev-code/kos-ddk-styles";
import snippets from "./snippets.json";
import {
  ErrorBoundaryWithFallback,
  KosTranslationProvider,
  LoadingMessage,
} from "@kosdev-code/kos-ui-sdk";
import { withThemeFromJSXProvider } from "@storybook/addon-themes";

import { ElementType, Suspense } from "react";
import { MemoryRouter } from "react-router";
import { KosCoreContextProvider } from "./registration";
import type { ComponentMode } from "@kosdev-code/kos-ddk-components";

export const globalTypes = {
  mode: {
    description: "DDK Render Mode",
    defaultValue: "compact",
    toolbar: {
      title: "Render Mode",
      icon: "circlehollow",
      items: ["standard", "compact"],
      dynamicTitle: true,
    },
  },
  snippets: {
    description: "Snippets",
    defaultValue: snippets,
    toolbar: {
      title: "Snippets",
      icon: "code",
      items: snippets,
    },
  },
};

// extract-code app
export const AppExample = ({ children }: { children: React.ReactNode }) => {
  return (
    <KosCoreContextProvider>
      <KosTranslationProvider appContext={["app/system"]} locale="en">
        {children}
      </KosTranslationProvider>
    </KosCoreContextProvider>
  );
};

export const decorators = [
  withThemeFromJSXProvider({
    Provider: ThemeProvider,
  }),
  (
    Story: ElementType,
    context: { globals: { mode: ComponentMode; snippets: typeof snippets } },
  ) => (
    <MemoryRouter initialEntries={["/"]}>
      <Global
        styles={getStyles(
          context.globals.mode === "compact" ? "compact" : "flex-eu",
        )}
      />
      <ErrorBoundaryWithFallback>
        <Suspense fallback={<LoadingMessage />}>
          <AppExample>
            <Suspense>
              <Story />
            </Suspense>
          </AppExample>
        </Suspense>
      </ErrorBoundaryWithFallback>
    </MemoryRouter>
  ),
];

const preview: Preview = {
  parameters: {
    options: {
      storySort: {
        method: "numerical",
      },
    },
    backgrounds: {
      values: [
        {
          name: "dark",
          value: "var(--ncui-generic-color-grey-70)",
        },
      ],
    },
  },
};

export default preview;
