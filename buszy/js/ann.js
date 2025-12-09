// ****************************
// :: Train Service Alerts ::
// ****************************

// Fetch train service alerts and update the alert box
async function fetchTrainServiceAlerts(retries = 3) {
    const alertBox = document.getElementById('train-alert');
    const url = 'https://bat-lta-9eb7bbf231a2.herokuapp.com/train-service-alerts';

    for (let attempt = 1; attempt <= retries; attempt++) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Failed to fetch train service alerts: ${response.statusText}`);
            }
            const data = await response.json();

            // Check if there is a valid alert message
            if (data && data.value && data.value.Message && Array.isArray(data.value.Message) && data.value.Message.length > 0) {
                const alerts = data.value.Message.map(msg => msg.Content || 'No content available').join('<br>');
                alertBox.innerHTML = `<i class="fa-solid fa-bullhorn"></i> ${alerts}`;
            } else {
                alertBox.innerHTML = `<i class="fa-solid fa-bullhorn"></i> No active train service alerts.`;
            }
            return; // Exit the function if successful
        } catch (error) {
            if (attempt === retries) {
                alertBox.innerHTML = `<i class="fa-solid fa-bullhorn"></i> Unable to load train service alerts after ${retries} attempts.`;
            } else {
                console.warn(`Attempt ${attempt} failed. Retrying...`);
            }
        }
    }
}

// Call the function to fetch train service alerts
fetchTrainServiceAlerts();