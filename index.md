---
layout: default
hero_content:
  include: components/global/horizontal-logo/default.html
bla:
  text: |
    first line

    **second line**
  text_keep_paragraphs: true
---

<div class="c-tile c-tile-padding u-color-pair--brand-darkest-blue">hmm</div>

{% include components/global/hero/default.html 
  title="A**Document Manager.** <br>Vaše digitální kancelář." 
  text="Všechny papírové i elektronické dokumenty bezpečně uložené a zálohované na jednom místě, přístupné odkudkoliv na světě jen z internetového prohlížeče.
  
  bla
  
  ble"
  title_style='gamma'
  content=page.hero_content
  pass_classes="u-color-pair--brand-pale-blue-1" %}

<div class="c-tile c-tile-padding u-color-pair--brand-darkest-blue">hmm</div>


{% include components/global/hero/default.html 
  title="B**Document Manager.** <br>Vaše digitální kancelář." 
  text="Všechny papírové i elektronické dokumenty bezpečně uložené a zálohované na jednom místě, přístupné odkudkoliv na světě jen z internetového prohlížeče.
  
  bla
  
  ble"
  content=''
  pass_classes="u-color-pair--brand-pale-blue-1" %}
<div class="c-tile c-tile-padding u-color-pair--brand-darkest-blue">hmm</div>


{% include components/global/hero/default.html 
  title="C**Document Manager.** <br>Vaše digitální kancelář." 
  content=page.hero_content
  pass_classes="u-color-pair--brand-pale-blue-1" %}
<div class="c-tile c-tile-padding u-color-pair--brand-darkest-blue">hmm</div>


{% include components/global/hero/default.html 
  title="C**Document Manager.** <br>Vaše digitální kancelář." 
  text=false
  content=page.bla
  pass_classes="u-color-pair--brand-pale-blue-1" %}