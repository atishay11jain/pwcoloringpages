export async function onRequest(context) {
    let url = new URL(context.request.url);

    // If user visits "/free-coloring-pages", serve "coloring.html"
    if (url.pathname === "/free-coloring-pages") {
        return new Response(
            await (await fetch(context.env.ASSETS.fetch("coloring-pages.html"))).text(), 
            { headers: { "Content-Type": "text/html" } }
        );
    }

    if (url.pathname === "/unicorn-coloring-pages") {
        return new Response(
            await (await fetch(context.env.ASSETS.fetch("unicorn.html"))).text(), 
            { headers: { "Content-Type": "text/html" } }
        );
    }

    if (url.pathname === "/mermaid-coloring-pages") {
        return new Response(
            await (await fetch(context.env.ASSETS.fetch("mermaid.html"))).text(), 
            { headers: { "Content-Type": "text/html" } }
        );
    }

    if (url.pathname === "/butterfly-coloring-pages") {
        return new Response(
            await (await fetch(context.env.ASSETS.fetch("butterfly.html"))).text(), 
            { headers: { "Content-Type": "text/html" } }
        );
    }

    // Continue serving other pages normally
    return context.next();
}
