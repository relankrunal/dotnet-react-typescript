# TrainingToolPlatform

## Overview
TrainingToolPlatform is a web application built using .NET Core for the backend and React with TypeScript for the frontend. This project aims to provide a comprehensive platform for training tools, featuring a user-friendly interface and robust API support.

## Project Structure
```
TrainingToolPlatform
├── ClientApp
│   ├── src
│   │   ├── components
│   │   ├── hooks
│   │   ├── pages
│   │   ├── types
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── vite-env.d.ts
│   ├── index.html
│   ├── package.json
│   ├── tsconfig.json
│   └── vite.config.ts
├── Server
│   ├── Controllers
│   ├── Models
│   ├── Program.cs
│   ├── appsettings.json
│   └── appsettings.Development.json
├── TrainingToolPlatform.sln
└── README.md
```

## Features
- **Frontend**: Built with React and TypeScript, utilizing Vite for fast development and build processes.
- **Backend**: Developed using .NET Core, providing a RESTful API for data handling.
- **CORS Support**: Configured to allow cross-origin requests for seamless integration between frontend and backend.
- **XSRF Protection**: Implemented to secure API calls against cross-site request forgery attacks.

## Getting Started
1. Clone the repository.
2. Navigate to the `ClientApp` directory and run `npm install` to install frontend dependencies.
3. Navigate to the `Server` directory and run the application using `dotnet run`.
4. Access the application in your browser at `http://localhost:3000`.

## Contributing
Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.