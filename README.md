# Email Client Pro

A modern email client application built with Next.js, TypeScript, and Zustand, offering a sleek and responsive user interface similar to popular email clients like Outlook.


![demo](https://github.com/user-attachments/assets/24658511-2f36-400c-8d98-5bd572c15380)

## Features

- **Split View Interface**: Master-slave layout with email list and body views
- **Real-time Email Loading**: Dynamic email body loading on selection
- **Email Management**:
  - Mark emails as favorite
  - Track read/unread status
  - Filter emails by favorites, read, and unread status
- **Smart Pagination**: Efficient handling of large email lists
- **Persistent Storage**: Maintains user preferences and email states across sessions
- **Responsive Design**: Seamless experience across all device sizes

## Tech Stack

- **Frontend Framework**: Next.js 15
- **Language**: TypeScript
- **State Management**: Zustand
- **Data Fetching**: TanStack Query (React Query)
- **Package Manager**: Bun/npm
- **Styling**: Tailwind css , shadcn ui with semantic HTML

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/sharmashiv24251/Outlook_rock8.git)
```

2. Install dependencies:
```bash
# Using Bun
bun install

# Using npm
npm install
```

3. Start the development server:
```bash
# Using Bun
bun run dev

# Using npm
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## API Integration

The application integrates with the following endpoints:

- **Email List**: `GET https://flipkart-email-mock.now.sh/`
  - Supports pagination: `?page={pageNumber}`
- **Email Details**: `GET https://flipkart-email-mock.now.sh/?id={emailId}`


---
Built with ❤️ using modern web technologies
