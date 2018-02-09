---
title: "Navigationsmenu"
date: 2018-02-09T10:18:28+01:00
draft: false
om: "Menu der bliver brugt til at navigere på sitet"
---
Dette tema gør brug af to forskellige navigationsmenuer. En burgermenu, der folder sig ud fra siden, på mindre og håndholdte enheder, samt en større der fungerer på laptop og desktop.

For at ændre menuen, skal du gå ind i "config.toml", og tilføje:

```[[menu.main]]```

```name               	= "-"```

```weight             	= 1```

```url                	= "/"```

Under "name" skriver du navnet du vil have i menuen.

Under "weight" vælger du rækkefølgen, jo lavere tal, jo længere nede i rækkefølgen er punktet.

Under "url" skriver du navnet på den side der skal refereres til. Har du fx en mappe med navnet "dokumentation", skal der stå "/dokumentation/" for at referere til den side.

Eksempel kan også ses på siden, i venstre øvre hjørne på mindre skærme (burgermenu), eller navigationsbaren på størreskærme.
