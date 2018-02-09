---
title: "Formularer"
date: 2018-02-05T09:07:23+01:00
draft: true
om: "Eksempel på en formular"
---
<div class="container">
  <div class="row">
      <div class="col-xs-6">
        <div class="kontakt_h1">
          <h2>Eksempel</h2>
        </div>
      </div>
  </div>
<div class="kontakt_p">
  <section class="row"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
</section>
</div>
  <section class="row">

    <div class="container">
        <div id="formfeedback" class="hidden">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</div>
          <form action="" method="post" id="kontaktmig">

              <label for="Navn">Navn</label>
              <input type="text" id="navn" name="navn" placeholder="Dit navn">

              <label for="email">E-mail</label>
              <input type="email" id="email" name="email" placeholder="Din e-mail">

              <label for="henvendelse">Jeg henvender mig vedr.:</label>
              <select id="henvendelse" name="henvendelse">
                <option value="support">Support</option>
                <option value="tilbud">Ris og ros</option>
                <option value="prepurchase">Spørgsmål om hvor lang tid en flæskesteg skal have i ovnen, for at være saftig inden i, men sprød uden på</option>
              </select>

              <label for="besked">Besked</label>
              <textarea id="besked" name="besked" placeholder="Din besked..."></textarea>

              <input type="submit" name="submit" value="Send">

              <div id="formfailure" class="hidden"></div>
          </form>

      </div>
