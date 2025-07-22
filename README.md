# Unit Converter

A full-stack web application for converting between different units of measurement including length, weight, and temperature.

A project Solution at [roadmap.sh](https://roadmap.sh/projects/unit-converter)

## Features

- **Length Conversion**: Convert between millimeter, centimeter, meter, kilometer, inch, foot, yard, and mile
- **Weight Conversion**: Convert between milligram, gram, kilogram, ounce, and pound
- **Temperature Conversion**: Convert between Celsius, Fahrenheit, and Kelvin
- **User-friendly Interface**: Clean and intuitive web interface
- **Real-time Results**: Instant conversion results displayed on a separate page

## Project Structure

```
unit-converter/
├── client/                # Frontend files
│   ├── pages/             # HTML pages
│   │   ├── lengthConverter.html
│   │   ├── weightConverter.html
│   │   ├── temperatureConverter.html
│   │   └── result.html
│   ├── script.js          # Main client-side JavaScript
│   └── displayResult.js   # Result page JavaScript
├── server/                # Backend files
│   ├── routes/
│   │   └── convert.js     # API routes
│   ├── utils/
│   │   └── converter.js   # Conversion logic
│   └── server.js          # Express server
└── README.md
```

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd unit-converter
```

2. Install server dependencies:

```bash
cd server
npm install express cors
```

3. Start the backend server:

```bash
node server.js
```

The server will run on `http://localhost:3000`

4. Open the frontend:
   Navigate to the `client/pages/` directory and open any of the converter HTML files in your browser:

- `lengthConverter.html`
- `weightConverter.html`
- `temperatureConverter.html`

## Usage

1. **Select a Category**: Choose from Length, Weight, or Temperature conversion
2. **Enter Value**: Input the numeric value you want to convert
3. **Specify Units**: Enter the source unit (from) and target unit (to)
4. **Convert**: Click the "Convert" button to see results
5. **View Results**: Results are displayed on a separate page
6. **Reset**: Use the reset button to go back and perform another conversion

## API Endpoints

### GET /api/convert

Converts a value from one unit to another.

**Query Parameters:**

- `category` (string): Type of conversion - "length", "weight", or "temperature"
- `from` (string): Source unit
- `to` (string): Target unit
- `value` (number): Value to convert

**Example Request:**

```
GET /api/convert?category=length&from=meter&to=kilometer&value=1000
```

**Example Response:**

```json
{
  "result": 1
}
```

**Error Response:**

```json
{
  "error": "Invalid length unit"
}
```

## Supported Units

### Length

- millimeter, centimeter, meter, kilometer
- inch, foot, yard, mile

### Weight

- milligram, gram, kilogram
- ounce, pound

### Temperature

- celsius, fahrenheit, kelvin

## Technologies Used

### Frontend

- HTML5
- CSS3
- Vanilla JavaScript
- ES6 Modules
- LocalStorage for data persistence

### Backend

- Node.js
- Express.js
- CORS middleware

## Development

### File Structure Details

- **client/script.js**: Handles form inputs, category detection, and navigation to results page
- **client/displayResult.js**: Fetches conversion results from API and displays them
- **server/server.js**: Express server setup with CORS and routing
- **server/routes/convert.js**: API route handlers with input validation
- **server/utils/converter.js**: Core conversion logic and unit factors

## License

This project is open source and available under the [MIT License](LICENSE).
