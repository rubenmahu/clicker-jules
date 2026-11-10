# Simple Cookie Clicker

A lightweight, modern web page featuring a centered interactive cookie and a click counter.

## Features

- **Centered Interactive Cookie**: Custom SVG chocolate chip cookie located in the middle of the screen.
- **Click Counter**: Dynamically tracks and displays how many times the cookie has been clicked.
- **Interactive Feedback**:
  - Smooth bounce and click animations on the cookie.
  - Floating `+1` particle effects on each click.
  - Number bump animation on the counter display.
- **Persistent State**: The click count is persisted using a browser cookie (`cookieClicks`) with localStorage fallback, ensuring your progress is retained across visits.
- **Reset Option**: Convenient reset button allowing you to start over at any time.
- **Responsive & Accessible**: Works across all screen sizes and devices with keyboard and screen reader accessibility support.
- **Clean Separation**: Structured into clean HTML markup, styling, and JavaScript logic (`script.js`).

## Getting Started

### Prerequisites

No special build tools or external packages are needed. You only need a modern web browser.

### Running the Web Page

To support standard browser cookie persistence, it is recommended to run a lightweight local web server:

```bash
# Using Python's built-in HTTP server
python3 -m http.server 8000
```

Then navigate to `http://localhost:8000` in your web browser.

Alternatively, you can open `index.html` directly in your browser:
```bash
# On macOS
open index.html

# On Linux
xdg-open index.html

# On Windows
start index.html
```

## File Structure

- `index.html` - HTML document layout and CSS styling with the centered cookie and counter display.
- `script.js` - Client-side JavaScript handling interactions, particle effects, and cookie persistence.
- `readme.md` - Documentation and instructions for running the project.
