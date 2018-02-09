---
title: "Browser Reset"
date: 2018-02-01T10:49:47+01:00
draft: true
om: "Nulstilling af browserens standard CSS-regler"
---
Et browser reset, er at man kalder på en CSS-fil, som nulstiller browserens standard CSS-regler.

For at gøre dette, skal du øverst i din _header.html_ (under <html>-tagget) skrive følgende:

```<link rel="stylesheet" href="{{.Site.BaseURL}}css/normalize.css">```

Det skal være det første stylesheet du kalder på, så den ikke overruler dine egne CSS-regler.
