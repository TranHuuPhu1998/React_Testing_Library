import { convert } from "./currency";
import "whatwg-fetch";
import { rest } from "msw";
import { setupServer } from "msw/node";

const server = setupServer(
  rest.get("https://api.exchangeratesapi.io/latest", (_req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ rates: { CAD: 1.42 } }));
  }),

  rest.get("*", (req, res, ctx) => {
    console.error(`Please add request handler for ${req.url.toString()}`);
    return res(
      ctx.status(500),
      ctx.json({ error: "You must add request handler." })
    );
  })
);

beforeAll(() => server.listen());
afterAll(() => server.close());
afterEach(() => server.resetHandlers());

it("converts correctly", async () => {
  const rate = await convert("USD", "CAD");
  expect(rate).toEqual(1.42);
});

it("handles failure", async () => {
  server.use(
    rest.get("https://api.exchangeratesapi.io/latest", (_req, res, ctx) => {
      return res(ctx.status(404));
    })
  );

  await expect(convert("FAIL", "CAD")).rejects.toThrow("404");
});