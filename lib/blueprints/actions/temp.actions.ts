{% for action in actions %}export const {{action | upperCase}} = '{{action | upperCase}}';
{% endfor %}
