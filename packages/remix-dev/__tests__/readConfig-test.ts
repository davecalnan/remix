import path from "path";

import type { RemixConfig } from "../config";
import { readConfig } from "../config";

const remixRoot = path.resolve(__dirname, "../../../fixtures/gists-app");

describe("readConfig", () => {
  let config: RemixConfig;
  beforeEach(async () => {
    config = await readConfig(remixRoot);
  });

  it("generates a config", async () => {
    expect(config).toMatchInlineSnapshot(
      {
        rootDirectory: expect.any(String),
        appDirectory: expect.any(String),
        cacheDirectory: expect.any(String),
        serverBuildDirectory: expect.any(String),
        assetsBuildDirectory: expect.any(String)
      },
      `
      Object {
        "appDirectory": Any<String>,
        "assetsBuildDirectory": Any<String>,
        "cacheDirectory": Any<String>,
        "devServerBroadcastDelay": 0,
        "devServerPort": 8002,
        "entryClientFile": "entry.client.jsx",
        "entryServerFile": "entry.server.jsx",
        "mdx": [Function],
        "publicPath": "/build/",
        "rootDirectory": Any<String>,
        "routes": Object {
          "pages/child": Object {
            "caseSensitive": undefined,
            "file": "pages/child.jsx",
            "id": "pages/child",
            "index": undefined,
            "parentId": "pages/test",
            "path": ":messageId",
          },
          "pages/four": Object {
            "caseSensitive": undefined,
            "file": "pages/four.jsx",
            "id": "pages/four",
            "index": undefined,
            "parentId": "root",
            "path": "/page/four",
          },
          "pages/test": Object {
            "caseSensitive": undefined,
            "file": "pages/test.jsx",
            "id": "pages/test",
            "index": undefined,
            "parentId": "root",
            "path": "programatic",
          },
          "pages/three": Object {
            "caseSensitive": undefined,
            "file": "pages/three.jsx",
            "id": "pages/three",
            "index": undefined,
            "parentId": "root",
            "path": "/page/three",
          },
          "root": Object {
            "file": "root.jsx",
            "id": "root",
            "path": "",
          },
          "routes/__layout": Object {
            "caseSensitive": undefined,
            "file": "routes/__layout.tsx",
            "id": "routes/__layout",
            "index": undefined,
            "parentId": "root",
            "path": undefined,
          },
          "routes/__layout/with-layout": Object {
            "caseSensitive": undefined,
            "file": "routes/__layout/with-layout.tsx",
            "id": "routes/__layout/with-layout",
            "index": undefined,
            "parentId": "routes/__layout",
            "path": "with-layout",
          },
          "routes/action-catches": Object {
            "caseSensitive": undefined,
            "file": "routes/action-catches.jsx",
            "id": "routes/action-catches",
            "index": undefined,
            "parentId": "root",
            "path": "action-catches",
          },
          "routes/action-catches-from-loader": Object {
            "caseSensitive": undefined,
            "file": "routes/action-catches-from-loader.jsx",
            "id": "routes/action-catches-from-loader",
            "index": undefined,
            "parentId": "root",
            "path": "action-catches-from-loader",
          },
          "routes/action-catches-from-loader-self-boundary": Object {
            "caseSensitive": undefined,
            "file": "routes/action-catches-from-loader-self-boundary.jsx",
            "id": "routes/action-catches-from-loader-self-boundary",
            "index": undefined,
            "parentId": "root",
            "path": "action-catches-from-loader-self-boundary",
          },
          "routes/action-catches-self-boundary": Object {
            "caseSensitive": undefined,
            "file": "routes/action-catches-self-boundary.jsx",
            "id": "routes/action-catches-self-boundary",
            "index": undefined,
            "parentId": "root",
            "path": "action-catches-self-boundary",
          },
          "routes/action-errors": Object {
            "caseSensitive": undefined,
            "file": "routes/action-errors.jsx",
            "id": "routes/action-errors",
            "index": undefined,
            "parentId": "root",
            "path": "action-errors",
          },
          "routes/action-errors-self-boundary": Object {
            "caseSensitive": undefined,
            "file": "routes/action-errors-self-boundary.jsx",
            "id": "routes/action-errors-self-boundary",
            "index": undefined,
            "parentId": "root",
            "path": "action-errors-self-boundary",
          },
          "routes/actions": Object {
            "caseSensitive": undefined,
            "file": "routes/actions.tsx",
            "id": "routes/actions",
            "index": undefined,
            "parentId": "root",
            "path": "actions",
          },
          "routes/blog": Object {
            "caseSensitive": undefined,
            "file": "routes/blog.tsx",
            "id": "routes/blog",
            "index": undefined,
            "parentId": "root",
            "path": "blog",
          },
          "routes/blog/hello-world": Object {
            "caseSensitive": undefined,
            "file": "routes/blog/hello-world.mdx",
            "id": "routes/blog/hello-world",
            "index": undefined,
            "parentId": "routes/blog",
            "path": "hello-world",
          },
          "routes/blog/index": Object {
            "caseSensitive": undefined,
            "file": "routes/blog/index.tsx",
            "id": "routes/blog/index",
            "index": true,
            "parentId": "routes/blog",
            "path": undefined,
          },
          "routes/blog/second": Object {
            "caseSensitive": undefined,
            "file": "routes/blog/second.md",
            "id": "routes/blog/second",
            "index": undefined,
            "parentId": "routes/blog",
            "path": "second",
          },
          "routes/blog/third": Object {
            "caseSensitive": undefined,
            "file": "routes/blog/third.md",
            "id": "routes/blog/third",
            "index": undefined,
            "parentId": "routes/blog",
            "path": "third",
          },
          "routes/catchall-nested": Object {
            "caseSensitive": undefined,
            "file": "routes/catchall-nested.jsx",
            "id": "routes/catchall-nested",
            "index": undefined,
            "parentId": "root",
            "path": "catchall-nested",
          },
          "routes/catchall-nested-no-layout/$": Object {
            "caseSensitive": undefined,
            "file": "routes/catchall-nested-no-layout/$.jsx",
            "id": "routes/catchall-nested-no-layout/$",
            "index": undefined,
            "parentId": "root",
            "path": "catchall-nested-no-layout/*",
          },
          "routes/catchall-nested/$": Object {
            "caseSensitive": undefined,
            "file": "routes/catchall-nested/$.jsx",
            "id": "routes/catchall-nested/$",
            "index": undefined,
            "parentId": "routes/catchall-nested",
            "path": "*",
          },
          "routes/catchall-nested/index": Object {
            "caseSensitive": undefined,
            "file": "routes/catchall-nested/index.jsx",
            "id": "routes/catchall-nested/index",
            "index": true,
            "parentId": "routes/catchall-nested",
            "path": undefined,
          },
          "routes/catchall.flat.$": Object {
            "caseSensitive": undefined,
            "file": "routes/catchall.flat.$.jsx",
            "id": "routes/catchall.flat.$",
            "index": undefined,
            "parentId": "root",
            "path": "catchall/flat/*",
          },
          "routes/empty": Object {
            "caseSensitive": undefined,
            "file": "routes/empty.jsx",
            "id": "routes/empty",
            "index": undefined,
            "parentId": "root",
            "path": "empty",
          },
          "routes/fetchers": Object {
            "caseSensitive": undefined,
            "file": "routes/fetchers.tsx",
            "id": "routes/fetchers",
            "index": undefined,
            "parentId": "root",
            "path": "fetchers",
          },
          "routes/gists": Object {
            "caseSensitive": undefined,
            "file": "routes/gists.jsx",
            "id": "routes/gists",
            "index": undefined,
            "parentId": "root",
            "path": "gists",
          },
          "routes/gists.mine": Object {
            "caseSensitive": undefined,
            "file": "routes/gists.mine.jsx",
            "id": "routes/gists.mine",
            "index": undefined,
            "parentId": "root",
            "path": "gists/mine",
          },
          "routes/gists/$username": Object {
            "caseSensitive": undefined,
            "file": "routes/gists/$username.jsx",
            "id": "routes/gists/$username",
            "index": undefined,
            "parentId": "routes/gists",
            "path": ":username",
          },
          "routes/gists/index": Object {
            "caseSensitive": undefined,
            "file": "routes/gists/index.jsx",
            "id": "routes/gists/index",
            "index": true,
            "parentId": "routes/gists",
            "path": undefined,
          },
          "routes/index": Object {
            "caseSensitive": undefined,
            "file": "routes/index.jsx",
            "id": "routes/index",
            "index": true,
            "parentId": "root",
            "path": undefined,
          },
          "routes/links": Object {
            "caseSensitive": undefined,
            "file": "routes/links.tsx",
            "id": "routes/links",
            "index": undefined,
            "parentId": "root",
            "path": "links",
          },
          "routes/loader-errors": Object {
            "caseSensitive": undefined,
            "file": "routes/loader-errors.jsx",
            "id": "routes/loader-errors",
            "index": undefined,
            "parentId": "root",
            "path": "loader-errors",
          },
          "routes/loader-errors/nested": Object {
            "caseSensitive": undefined,
            "file": "routes/loader-errors/nested.jsx",
            "id": "routes/loader-errors/nested",
            "index": undefined,
            "parentId": "routes/loader-errors",
            "path": "nested",
          },
          "routes/loader-errors/nested-catch": Object {
            "caseSensitive": undefined,
            "file": "routes/loader-errors/nested-catch.jsx",
            "id": "routes/loader-errors/nested-catch",
            "index": undefined,
            "parentId": "routes/loader-errors",
            "path": "nested-catch",
          },
          "routes/methods": Object {
            "caseSensitive": undefined,
            "file": "routes/methods.tsx",
            "id": "routes/methods",
            "index": undefined,
            "parentId": "root",
            "path": "methods",
          },
          "routes/multiple-set-cookies": Object {
            "caseSensitive": undefined,
            "file": "routes/multiple-set-cookies.tsx",
            "id": "routes/multiple-set-cookies",
            "index": undefined,
            "parentId": "root",
            "path": "multiple-set-cookies",
          },
          "routes/nested-forms": Object {
            "caseSensitive": undefined,
            "file": "routes/nested-forms.tsx",
            "id": "routes/nested-forms",
            "index": undefined,
            "parentId": "root",
            "path": "nested-forms",
          },
          "routes/nested-forms/nested": Object {
            "caseSensitive": undefined,
            "file": "routes/nested-forms/nested.tsx",
            "id": "routes/nested-forms/nested",
            "index": undefined,
            "parentId": "routes/nested-forms",
            "path": "nested",
          },
          "routes/nested-forms/nested/index": Object {
            "caseSensitive": undefined,
            "file": "routes/nested-forms/nested/index.tsx",
            "id": "routes/nested-forms/nested/index",
            "index": true,
            "parentId": "routes/nested-forms/nested",
            "path": undefined,
          },
          "routes/one": Object {
            "caseSensitive": undefined,
            "file": "routes/one.mdx",
            "id": "routes/one",
            "index": undefined,
            "parentId": "root",
            "path": "one",
          },
          "routes/prefs": Object {
            "caseSensitive": undefined,
            "file": "routes/prefs.tsx",
            "id": "routes/prefs",
            "index": undefined,
            "parentId": "root",
            "path": "prefs",
          },
          "routes/render-errors": Object {
            "caseSensitive": undefined,
            "file": "routes/render-errors.jsx",
            "id": "routes/render-errors",
            "index": undefined,
            "parentId": "root",
            "path": "render-errors",
          },
          "routes/render-errors/nested": Object {
            "caseSensitive": undefined,
            "file": "routes/render-errors/nested.jsx",
            "id": "routes/render-errors/nested",
            "index": undefined,
            "parentId": "routes/render-errors",
            "path": "nested",
          },
          "routes/two": Object {
            "caseSensitive": undefined,
            "file": "routes/two.md",
            "id": "routes/two",
            "index": undefined,
            "parentId": "root",
            "path": "two",
          },
        },
        "serverBuildDirectory": Any<String>,
        "serverMode": "production",
        "tsconfig": Object {
          "compilerOptions": Object {
            "allowJs": true,
            "baseUrl": ".",
            "esModuleInterop": true,
            "jsx": "react-jsx",
            "module": "ES2020",
            "moduleResolution": "node",
            "noEmit": true,
            "paths": Object {
              "#/*": Array [
                "app/routes/gists/*",
                "app/routes/blog/*",
              ],
              "@/*": Array [
                "app/components/*",
              ],
              "~/*": Array [
                "app/*",
              ],
            },
            "strict": true,
            "target": "ES2020",
          },
          "include": Array [
            "remix.env.d.ts",
            "**/*.ts",
            "**/*.tsx",
          ],
        },
      }
    `
    );
  });
});
