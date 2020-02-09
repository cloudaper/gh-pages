---
---

{% for script in layout.data.scripts %}
  {% include {{ script }} %}
{% endfor %}

{% for script in site.scripts %}
  {% include {{ script }} %}
{% endfor %}
