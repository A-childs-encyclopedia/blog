import blog, { ga, redirects } from "https://deno.land/x/blog@0.3.3/blog.tsx";

blog({
  title: "Encyclopedia",
  author: "Encyclopedia",
  avatar: "./cc.png",
  avatarClass: "full",
  links: [
    { title: "Email", url: "mailto:abdhllah005@gmail.com" },
    { title: "GitHub", url: "https://github.com/A-childs-encyclopedia" },
  ],
  background: "#ffde59",
  middlewares: [
    ga("UA-91675022-1"),
    redirects({
      "iocp-links.html": "iocp_links",
      "rant.html": "rant",
    }),
  ],
});
