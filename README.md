## Challenges
We are trying to host multiple domains using one instance of NextJS.

We have a headless cms that we request properties from per domain for styling, configuration, etc.. shown in the index.js

The rewrites seem to do the trick which allows use to use SSG / ISR per domain. NextJS will generate the
contents per host/[host]. We get the domain sepecific properties from the headless CMS in the getStatiProps
which allows us to pre generate the index page per domain.

1 - The first challenge, what if we will need to change the structure of the index file per domain.

2 - The second challenge, one of the domains can contain a link to custom designed page. So for example: domain1 contains a
link to custom-page, and custom-page is accessible only by domain1.

So my idea for Challenge 2 is to somehow come up with a directory inside src/pages and contain the domain specified page?  But so for this issue, how would the rewrites work with SSG / ISR ? I have included an example in the src/pages/hosts folder for domain2.com. The thing is how to reach it.

## Configure
In /etc/hosts add these two domains that point to your localhost
domain1.com 127.0.0.1
domain2.com 127.0.0.1

## Multiple domain hosting on [next.js](https://nextjs.org)
Using rewrites to support multiple hosts with caching, fallbacks and static rendering.

(https://next-multi-host.vercel.app)
(https://next-multi-host-acorcutt.vercel.app)