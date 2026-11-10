# Simple Cookie Clicker

A lightweight, modern web page featuring a centered interactive cookie and a click counter.

## Features

- **Centered Interactive Cookie**: Beautiful custom SVG chocolate chip cookie located in the middle of the screen.
- **Click Counter**: Dynamically tracks and displays how many times the cookie has been clicked.
- **Interactive Feedback**:
  - Smooth bounce and click animations on the cookie.
  - Floating `+1` particle effects on each click.
  - Number bump animation on the counter display.
- **Persistent State**: Automatically saves your click count in the browser's `localStorage` so your progress persists across page reloads.
- **Reset Option**: Convenient reset button allowing you to start over at any time.
- **Responsive & Accessible**: Works across all screen sizes and devices with keyboard and screen reader accessibility support.
- **Zero Dependencies**: Pure HTML, CSS, and vanilla JavaScript in a single, self-contained file.

## Getting Started

### Prerequisites

No special dependencies or build steps are required. All you need is a modern web browser (such as Chrome, Firefox, Safari, or Edge).

### Running the Web Page

1. **Directly open in a browser**:
   Double-click `index.html` or open it with your favorite browser:
   ```bash
   # On macOS
   open index.html

   # On Linux
   xdg-open index.html

   # On Windows
   start index.html
   ```

2. **Using a local web server (optional)**:
   You can serve the file using Python's built-in HTTP server:
   ```bash
   python3 -m http.server 8000
   ```
   Then open `http://localhost:8000` in your web browser.

## File Structure

- `index.html` - The complete web application containing HTML layout, CSS styling, SVG graphics, and JavaScript logic.
- `readme.md` - Documentation and instructions for running the project.
