# API Services

API calls and external service integrations.

## Structure
```
services/
├── api/
│   ├── axiosConfig.js    # Axios instance configuration
│   ├── authService.js    # Authentication API calls
│   ├── userService.js    # User-related API calls
│   └── ...
└── README.md
```

## Guidelines
- Group related API calls together
- Use consistent naming (e.g., getUsers, createUser, updateUser)
- Handle errors appropriately
- Use environment variables for base URLs
