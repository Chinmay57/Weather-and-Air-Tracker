from flask import Flask, render_template, request, jsonify
import requests
import os

app = Flask(__name__)

# Load API key from environment variables
WEATHER_API_KEY = os.getenv("WEATHER_API_KEY", "Your_API_KEY")

@app.route('/')
def index():
    return render_template('index.html', title="Weather Dashboard")

@app.route('/weather', methods=['GET'])
def get_weather():
    city = request.args.get('city')
    if not city:
        return jsonify({'error': 'City parameter is required'}), 400
    
    weather_url = f"http://api.weatherapi.com/v1/forecast.json?key=Your_Key_Here&q={city}&days=1&aqi=no&alerts=no"
    
    weather_response = requests.get(weather_url).json()
    
    if "error" in weather_response:
        return jsonify({'error': 'Could not retrieve weather data'}), 500
    
    next_24_hours = [
        {
            "time": hour['time'],
            "temperature": hour['temp_c']
        } for hour in weather_response['forecast']['forecastday'][0]['hour']
    ]
    
    return jsonify({
        'city': weather_response['location']['name'],
        'temperature': weather_response['current']['temp_c'],
        'description': weather_response['current']['condition']['text'],
        'humidity': weather_response['current']['humidity'],
        'wind_speed': weather_response['current']['wind_kph'],
        'next_24_hours': next_24_hours
    })

if __name__ == '__main__':
    app.run(debug=True)
