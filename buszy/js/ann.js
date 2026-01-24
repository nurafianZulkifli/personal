// ****************************
// :: Train Service Alerts ::
// ****************************

// Fetch train service alerts and update the alert box
async function fetchTrainServiceAlerts(retries = 7) {
    const alertBox = document.getElementById('train-alert');
    const url = 'https://bat-lta-9eb7bbf231a2.herokuapp.com/train-service-alerts';

    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Failed to Alerts: ${response.statusText}`);
            }
            const data = await response.json();

            // Check if there is a valid alert message
            if (data && data.value && data.value.Message && Array.isArray(data.value.Message) && data.value.Message.length > 0) {
                // Helper: convert URLs in text to clickable links
                function linkify(text) {
                    const urlRegex = /(https?:\/\/[\w\-._~:/?#[\]@!$&'()*+,;=%]+)|(www\.[\w\-._~:/?#[\]@!$&'()*+,;=%]+)/gi;
                    return text.replace(urlRegex, function(url) {
                        let href = url;
                        if (!href.match(/^https?:\/\//i)) href = 'http://' + href;
                        return `<a href="${href}" target="_blank" rel="noopener noreferrer">${url}</a>`;
                    });
                }
                const alerts = data.value.Message.map(msg => linkify(msg.Content || 'No content available')).join('<br>');
                alertBox.innerHTML = `<p><i class="fa-solid fa-bullhorn"></i> ${alerts}</p>`;
            } else {
                alertBox.innerHTML = `<p><i class="fa-solid fa-bullhorn"></i> No Active Alerts.</p>`;
            }
            return; // Exit the function if successful
        } catch (error) {
            if (attempt === retries) {
                alertBox.innerHTML = `<p><i class="fa-solid fa-bullhorn"></i> Unable to load Alerts after ${retries} attempts.</p>`;
            } else {
                console.warn(`Attempt ${attempt} failed. Retrying...`);
            }
        }
    }
}

// Call the function to fetch train service alerts
fetchTrainServiceAlerts(7);
