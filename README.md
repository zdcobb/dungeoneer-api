# Dungeoneer API

Dungeoneer API is a data serving API for Dungeoneer and potentially other services. This project is built using Express.js and is designed to be easily deployable on Google Cloud via Cloud Run.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [License](#license)

## Installation

To get started with the Dungeoneer API, clone the repository and install the dependencies:

```bash
git clone https://github.com/zdcobb/dungeoneer-api.git
cd dungeoneer-api
npm install
```

## Usage

To run the application locally, use the following command:

```bash
npm start
```

The server will start on `http://localhost:8000`.

## API Endpoints

- **GET /**: Returns a welcome message.
- **POST /data**: Accepts data to be processed (example endpoint).

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.
