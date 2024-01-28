# MediaBook

MediaBook is a social media project that allows users to post images, videos, and listen to music with friends through remote sync.

## Table of Contents
- [Features](#features)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)

## Features

- Post & Watch Images, Videos, Audios and Texts
- Play Songs with Friends Collaboratively (In Sync)
- Chat With Friends
- Write Your Personal Diary
- Create Channals and Groups 

## Getting Started

### Prerequisites

Before you begin, ensure you have the following tools installed:

- [Docker](https://www.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/MediaBook.git
   ```

2. Navigate to the project directory:
    ```bash
    cd MediaBook
    ```

3. Build and run the Docker containers:
    ```
    bashdocker-compose up --build
    ```
    This will start the Django backend, React frontend, and Nginx web server.

4. Open your web browser and navigate to http://localhost to access MediaBook.

## Technologies

- **Backend:**
  - [Django](https://www.djangoproject.com/)

- **Frontend:**
  - [React](https://reactjs.org/)

- **Web Server:**
  - [Nginx](https://www.nginx.com/)
  
- **Containerization:**
  - [Docker](https://www.docker.com/)

## Contributing

We welcome contributions from the community! If you would like to contribute to MediaBook, please follow these guidelines:

1. **Reporting Issues:**
   - Before submitting a new issue, check if a similar one already exists.
   - Clearly describe the issue, including steps to reproduce it.

2. **Proposing Features:**
   - Feel free to propose new features or improvements.
   - Provide a detailed description of the proposed feature and its benefits.

3. **Submitting Pull Requests:**
   - Fork the repository and create a new branch for your feature or bug fix.
   - Ensure that your code follows the project's coding style.
   - Write clear and concise commit messages.
   - Test your changes thoroughly before submitting the pull request.

4. **Code of Conduct:**
   - Follow our [Code of Conduct](CODE_OF_CONDUCT.md) in all interactions.

Please note that all contributions are subject to review, and maintainers have the right to accept or reject any pull request.

Thank you for contributing to MediaBook!

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
