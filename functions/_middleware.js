export async function onRequest(context) {
    let url = new URL(context.request.url);

    if (url.pathname === "/free-coloring-pages") {
        return context.env.ASSETS.fetch("coloring-pages.html");
    }

    if (url.pathname === "/unicorn-coloring-pages") {
        return context.env.ASSETS.fetch("unicorn.html");
    }

    if (url.pathname === "/mermaid-coloring-pages") {
        return context.env.ASSETS.fetch("mermaid.html");
    }

    if (url.pathname === "/butterfly-coloring-pages") {
        return context.env.ASSETS.fetch("butterfly.html");
    }

    return context.next();
}