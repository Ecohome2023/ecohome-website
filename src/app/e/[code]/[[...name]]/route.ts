import { longLink } from "@/lib/estimator";

// Short estimate links texted by HubSpot (/e/2s0/Sarah): send them to the full estimate page.
export async function GET(request: Request, ctx: RouteContext<"/e/[code]/[[...name]]">) {
  const { code, name } = await ctx.params;
  const target = longLink(code, name?.[0] ?? "", name?.[1]) ?? "/instant-pricing";
  return Response.redirect(new URL(target, request.url), 307);
}
