---
img_path: /images/get-in-touch.webp
form_id: contactForm
form_action: /contact/contact-success
form_fields:
  - type: form_field
    input_type: text
    name: name
    label: Name
    default_value: Your name
    is_required: true
  - type: form_field
    input_type: email
    name: email
    label: Email
    default_value: Your email address
    is_required: true
  - type: form_field
    input_type: text
    name: subject
    label: Subject
    options:
      - Error on the site
      - Sponsorship
      - Other
    default_value: Your message subject
  - type: form_field
    input_type: textarea
    name: message
    label: Message
    default_value: Your message
  - type: form_field
    input_type: checkbox
    name: consent
    label: >-
      I understand that this form is storing my submitted information so I can
      be contacted.
submit_label: Send Message
seo:
  type: stackbit_page_meta
  title: Get in Touch
  description: Fennex Agency Blog Contact Form.
  extra:
    - name: 'og:type'
      value: website
      keyName: property
    - name: 'og:title'
      value: Get in Touch
      keyName: property
    - name: 'og:description'
      value: This is the contact page
      keyName: property
    - name: 'twitter:card'
      value: summary
    - name: 'twitter:title'
      value: Get in Touch
    - name: 'twitter:description'
      value: This is the contact page
template: contact
img_alt: Get In Touch Image
---

