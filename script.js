document.addEventListener("DOMContentLoaded", function () {
    const apiKey = "YOUR_WEATHER_API_KEY"; // Replace with your Weather API key

    async function fetchWeather() {
        const city = document.getElementById("cityInput").value;
        if (!city) {
            alert("Please enter a city name.");
            return;
        }

        const response = await fetch(`/weather?city=${city}`);
        const data = await response.json();

        if (data.error) {
            document.getElementById("weatherResult").innerHTML = `<p>${data.error}</p>`;
            return;
        }

        displayWeather(data);
        updateChart(data.hourly);
    }

    function displayWeather(data) {
        document.getElementById("weatherResult").innerHTML = `
            <h2>${data.city}</h2>
            <p>Temperature: ${data.temperature}°C</p>
            <p>Condition: ${data.condition}</p>
            <p>Humidity: ${data.humidity}%</p>
            <p>Wind Speed: ${data.wind_speed} m/s</p>
        `;
    }

    function updateChart(hourlyData) {
        const ctx = document.getElementById("weatherChart").getContext("2d");

        const labels = hourlyData.map(hour => hour.time);
        const temperatures = hourlyData.map(hour => hour.temp);

        if (window.weatherChart) {
            window.weatherChart.destroy();
        }

        window.weatherChart = new Chart(ctx, {
            type: "bar",
            data: {
                labels: labels,
                datasets: [{
                    label: "Next 24 Hours Temperature (°C)",
                    data: temperatures,
                    backgroundColor: "rgba(255, 165, 0, 0.6)",
                    borderColor: "rgba(255, 140, 0, 1)",
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: {
                        beginAtZero: false
                    }
                }
            }
        });
    }

    window.fetchWeather = fetchWeather;
});
