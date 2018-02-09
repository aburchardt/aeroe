---
title: "Mikroanimation"
date: 2018-02-05T09:07:53+01:00
draft: false
om: "Eksempel på mikroanimation"
---
På denne side ses et eksempel på en pre-loader, som bliver brugt på forsiden. I dette eksempel, er baggrunden fjernet, samt forsvinder pre-loaderen ikke efter nogen timer. Dette kan dog ændres vha. JavasScript.

<div id="loader"></div>

<script>function preloader() {
  document.getElementById("preloader").style.display = "none";
}

setTimeout(function() { preloader(); }, 3000);</script>
