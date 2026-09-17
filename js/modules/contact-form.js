/**
 * Contact form module — validation and submission
 */
import { CONFIG } from '../config.js';

export function initContactForm() {
  const form = document.getElementById('contact-form');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!validateForm(form)) return;

    const data = getFormData(form);
    submitForm(data, form);
  });
}

function validateForm(form) {
  let isValid = true;
  clearErrors(form);

  const requiredFields = form.querySelectorAll('[required]');
  requiredFields.forEach((field) => {
    if (field.type === 'checkbox' && !field.checked) {
      showError(field, 'Debes aceptar el aviso de privacidad');
      isValid = false;
      return;
    }

    if (!field.value.trim()) {
      showError(field, 'Este campo es obligatorio');
      isValid = false;
      return;
    }

    if (field.type === 'email' && !isValidEmail(field.value)) {
      showError(field, 'Ingresa un correo válido');
      isValid = false;
    }

    if (field.type === 'tel' && !isValidPhone(field.value)) {
      showError(field, 'Ingresa un teléfono válido');
      isValid = false;
    }
  });

  return isValid;
}

function getFormData(form) {
  return {
    name: form.name.value.trim(),
    phone: form.phone.value.trim(),
    email: form.email.value.trim(),
    ailment: form.ailment.value,
    duration: form.duration.value,
    preferredTime: form['preferred-time'].value,
  };
}

function submitForm(data, form) {
  const message = buildWhatsAppMessage(data);
  const url = `https://wa.me/${CONFIG.whatsapp.number}?text=${encodeURIComponent(message)}`;

  window.open(url, '_blank');

  form.reset();
  showSuccess(form, '¡Gracias! Te redirigimos a WhatsApp para completar tu solicitud.');
}

function buildWhatsAppMessage(data) {
  const ailmentLabels = {
    espalda: 'Dolor de espalda y cuello',
    deportiva: 'Lesión deportiva',
    postoperatoria: 'Rehabilitación postoperatoria',
    articular: 'Dolor articular',
    otro: 'Otro',
  };

  const durationLabels = {
    semana: 'Menos de una semana',
    mes: '1 a 4 semanas',
    meses: '1 a 6 meses',
    anio: 'Más de 6 meses',
  };

  const timeLabels = {
    manana: 'Mañana (8:00 - 12:00)',
    tarde: 'Tarde (12:00 - 18:00)',
    noche: 'Noche (18:00 - 21:00)',
  };

  return [
    'Hola Ezequiel, quiero solicitar una valoración.',
    '',
    `*Nombre:* ${data.name}`,
    `*Teléfono:* ${data.phone}`,
    `*Email:* ${data.email}`,
    `*Padecimiento:* ${ailmentLabels[data.ailment] ?? data.ailment}`,
    `*Desde cuándo:* ${durationLabels[data.duration] ?? data.duration}`,
    `*Horario preferido:* ${timeLabels[data.preferredTime] ?? data.preferredTime}`,
  ].join('\n');
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
  return /^[\d\s\-+()]{8,}$/.test(phone);
}

function showError(field, message) {
  const group = field.closest('.form-group');
  if (!group) return;

  const error = document.createElement('p');
  error.className = 'form-error';
  error.textContent = message;
  error.setAttribute('role', 'alert');
  group.appendChild(error);
  field.setAttribute('aria-invalid', 'true');
}

function clearErrors(form) {
  form.querySelectorAll('.form-error').forEach((el) => el.remove());
  form.querySelectorAll('[aria-invalid]').forEach((el) => el.removeAttribute('aria-invalid'));
  form.querySelectorAll('.form-success').forEach((el) => el.remove());
}

function showSuccess(form, message) {
  const success = document.createElement('p');
  success.className = 'form-success';
  success.style.cssText = 'color:#7dffb8;font-size:0.875rem;margin-bottom:1rem;text-align:center;';
  success.textContent = message;
  success.setAttribute('role', 'status');
  form.insertBefore(success, form.firstChild);
}
