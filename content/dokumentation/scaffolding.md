---
title: "Scaffolding"
date: 2018-02-01T10:49:53+01:00
draft: true
om: "En metode at organisere indholdet på sitet"
---
I dette tema bliver der gjort brug af ["Flexbox Grid"](http://flexboxgrid.com).

For at gøre brug af denne side, skal der kaldes på den relevante CSS-fil.

For at gøre dette, skal du øverst i din _header.html_ (under <html>-tagget) skrive følgende:

```<link rel="stylesheet" href="{{.Site.BaseURL}}css/flexboxgrid.css">```

Dette skal være det andet stylesheet du kalder på. Herefter, kan du gå ind på [Flexbox Grid](http://flexboxgrid.com), og gøre brug af de forskellige flexbox templates.

I dette tema, er der gjort meget brug af ```.center-```
