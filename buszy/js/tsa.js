  // Helper: convert URLs in text to clickable links and newlines to <br>
  function linkify(text) {
    const urlRegex = /(https?:\/\/[\w\-._~:/?#[\]@!$&'()*+,;=%]+)|(www\.[\w\-._~:/?#[\]@!$&'()*+,;=%]+)|(go\.gov\.sg\/[\w\-._~:/?#[\]@!$&'()*+,;=%]+)/gi;
    let linked = text.replace(urlRegex, function(url) {
      let href = url;
      if (url.match(/^go\.gov\.sg\//i)) {
        href = 'https://' + url;
      } else if (!href.match(/^https?:\/\//i)) {
        href = 'http://' + href;
      }
      return `<a href="${href}" target="_blank" rel="noopener noreferrer">${url}</a>`;
    });
    return linked.replace(/\n/g, '<br>');
  }

// Ensure DOM is loaded before running script
document.addEventListener('DOMContentLoaded', function() {
  fetch('https://bat-lta-9eb7bbf231a2.herokuapp.com/train-service-alerts')
    .then(response => response.json())
    .then(data => {
      if (!data || !data.value) return;
      // Map line names to codes used in your HTML
      const lineMap = {
        'North-South Line': 'NSL',
        'East-West Line': 'EWL',
        'Circle Line': 'CCL',
        'Downtown Line': 'DTL',
        'Thomson-East Coast Line': 'TEL',
        'North East Line': 'NEL',
        'Bukit Panjang LRT': 'BP',
        'Sengkang LRT': 'SK',
        'Punggol LRT': 'PG'
      };
      // Support both array and object for value
      let alerts = [];
      if (Array.isArray(data.value)) {
        alerts = data.value;
      } else if (typeof data.value === 'object') {
        alerts = [data.value];
      }
      // Show current date/time for 'Last updated' line
      const now = new Date();
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      let hours = now.getHours();
      const ampm = hours >= 12 ? 'PM' : 'AM';
      hours = hours % 12;
      hours = hours ? hours : 12;
      const mins = now.getMinutes().toString().padStart(2, '0');
      const formatted = `Last updated: ${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()} ${hours}:${mins} ${ampm}`;
      const updatedDiv = document.querySelector('.tsu .alert-last-updated');
      if (updatedDiv) updatedDiv.textContent = formatted;
      alerts.forEach(alert => {
        if (alert.Status === 1 || alert.Status === 2) {
          let foundLine = null;
          let foundMsg = '';
          if (alert.Message && Array.isArray(alert.Message) && alert.Message.length > 0) {
            const msg = alert.Message[0].Content || '';
            foundMsg = linkify(msg);
            for (const [lineName, code] of Object.entries(lineMap)) {
              if (msg.includes(lineName) || msg.includes(code)) {
                foundLine = code;
                break;
              }
            }
          }
          if (foundLine) {
            const items = document.querySelectorAll('.custom-list-item');
            items.forEach(item => {
              const label = item.querySelector('.line-label');
              if (label && label.textContent.trim() === foundLine) {
                const icon = item.querySelector('.status-icon');
                if (icon) {
                  if (alert.Status === 1) {
                    icon.style.background = '#ffb300'; // amber
                    icon.innerHTML = '<i class="fa-solid fa-triangle-exclamation"></i>'; // warning sign
                    icon.style.color = '#000';
                  } else if (alert.Status === 2) {
                    icon.style.background = '#e53935'; // red
                    icon.innerHTML = '<i class="fa-solid fa-diamond-exclamation"></i>'; // critical sign
                    icon.style.color = '#fff';
                  }
                }
                // Show alert message below the item if not already present
                if (foundMsg && !item.nextElementSibling?.classList.contains('alert-message-box')) {
                  const msgBox = document.createElement('div');
                  msgBox.className = 'alert-message-box';
                  msgBox.innerHTML = `<span class=\"alert-message-content\">${foundMsg}</span>`;
                  item.parentNode.insertBefore(msgBox, item.nextSibling);
                }
              }
            });
          }
        }
      });
    // Add styles for alert message box
    const style = document.createElement('style');
    style.innerHTML = `
    .alert-message-box {
      background: #f8f8f8;
      border-radius: 40px;
      margin: 0 0 32px 0;
      padding: 24px 28px;
      font-size: 1.08em;
      color: #222;
      box-shadow: 0 2px 8px 0 rgba(0,0,0,0.04);
      max-width: 90vw;
      word-break: break-word;
    }
    .alert-message-content {
      display: block;
      white-space: pre-line;
    }

    body.dark-mode .alert-message-box {
    background-color: #383838;
    color: #fff !important;
    border: 1px solid #2b2b2b33;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.233), 0 4px 12px rgba(0, 0, 0, 0.1);
    }
    `;
    document.head.appendChild(style);
    })
    .catch(err => {});
});
