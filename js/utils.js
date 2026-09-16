// ============================================
// UTILITY ENGINE PORTOFOLIO YUSUF MAULANA
// Helper tools: Toast, Copy Clipboard, WA Formatter, Audio Feedback
// ============================================

const PortfolioUtils = {
  // 1. Toast Notification Manager
  showToast: function(message, type = 'info', duration = 4000) {
    let toast = document.getElementById('toastNotice');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toastNotice';
      toast.className = 'toast-notice';
      toast.setAttribute('role', 'alert');
      toast.setAttribute('aria-live', 'polite');
      document.body.appendChild(toast);
    }

    toast.textContent = message;
    toast.className = 'toast-notice show ' + (type ? `toast-${type}` : '');

    if (window.toastTimer) {
      clearTimeout(window.toastTimer);
    }

    window.toastTimer = setTimeout(() => {
      toast.classList.remove('show');
    }, duration);
  },

  // 2. 1-Click Clipboard Copy with UI Feedback
  copyText: function(text, successMessage) {
    if (navigator.clipboard && window.isSecureContext) {
      return navigator.clipboard.writeText(text).then(() => {
        this.showToast(successMessage || `Berhasil disalin ke papan klip: "${text}" 📋`, 'success');
        return true;
      }).catch(() => {
        return this._fallbackCopy(text, successMessage);
      });
    } else {
      return this._fallbackCopy(text, successMessage);
    }
  },

  _fallbackCopy: function(text, successMessage) {
    try {
      const tempInput = document.createElement('textarea');
      tempInput.value = text;
      tempInput.style.position = 'fixed';
      tempInput.style.left = '-9999px';
      tempInput.style.top = '0';
      document.body.appendChild(tempInput);
      tempInput.focus();
      tempInput.select();
      document.execCommand('copy');
      document.body.removeChild(tempInput);
      this.showToast(successMessage || `Berhasil disalin! 📋`, 'success');
      return Promise.resolve(true);
    } catch (err) {
      this.showToast('Gagal menyalin teks secara otomatis. Silakan salin manual.', 'error');
      return Promise.resolve(false);
    }
  },

  // 3. Dynamic WhatsApp URL Formatter
  createWaUrl: function(phoneNumber, params = {}) {
    const cleanPhone = phoneNumber.replace(/[^0-9]/g, '');
    let text = `Halo Yusuf Maulana,\n\n`;

    if (params.name) text += `Nama: *${params.name}*\n`;
    if (params.email) text += `Email: ${params.email}\n`;
    if (params.category) text += `Keperluan: *${params.category}*\n\n`;
    if (params.message) text += `Pesan:\n${params.message}\n\n`;
    text += `— Dikirim melalui Portofolio Web Yusuf Maulana`;

    return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(text)}`;
  },

  // 4. Subtle Audio Feedback (Web Audio API - Non-intrusive)
  playClickSound: function() {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(540, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(320, ctx.currentTime + 0.05);

      gain.gain.setValueAtTime(0.04, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.05);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + 0.05);
    } catch (e) {
      // Audio context might be restricted before interaction; safely ignore
    }
  }
};
