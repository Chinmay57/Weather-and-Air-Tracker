# Weather and Air Tracker Web Application

## About the Application
The **Weather and Air Tracker** is a web-based application that provides real-time weather data for any city. It fetches weather information using the **WeatherAPI** and presents it in a user-friendly dashboard. The application displays:

- Current temperature, weather conditions, humidity, and wind speed

## Key Features
- Fetches real-time weather data for any city.
- Displays detailed weather conditions including temperature, humidity, and wind speed.
- User-friendly interface design.
- Built using **Flask, HTML, CSS, and JavaScript**

## Setup Instructions
Follow these steps to set up and run the Weather and Air Tracker application on your system.

### 1. **Get the API Key**
1. Go to [WeatherAPI](https://www.weatherapi.com/) and sign up.
2. Generate a **free API key**.
3. Copy the API key and **replace it** in the `air.py` file:
   ```python
   WEATHER_API_KEY = "YOUR_WEATHER_API_KEY"
   ```

### 2. **Create the Project Structure**
Ensure your project structure looks like this:
```
Weather-Air-Tracker/
│-- air.py
│-- /templates/
│   └── index.html
│-- /static/
│   ├── style.css
│   └── script.js
```

### 3. **Set Up a Virtual Environment**
It is recommended to use a virtual environment to manage dependencies.

1. Open a terminal in the project folder and run:
   ```sh
   python -m venv venv
   ```
2. Activate the virtual environment:
   - **Windows:**
     ```sh
     venv\Scripts\activate
     ```
   - **Mac/Linux:**
     ```sh
     source venv/bin/activate
     ```

### 4. **Install Dependencies**
Manually install Flask and requests:
```sh
pip install Flask requests
```

### 5. **Run the Application**
Start the Flask server:
```sh
python air.py
```
The application will start running at `http://127.0.0.1:5000/`. Open it in your browser.

## Troubleshooting
- If you get an **API error**, ensure that:
  - You have **entered a valid API key** in `air.py`
  - Your API key is **active and not expired**
- If the styles are missing, check that `style.css` is placed inside the `/static/` folder.

## License
This project is for educational purposes and open-source use.

---
Enjoy tracking the weather!

