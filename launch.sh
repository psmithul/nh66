#!/bin/bash

echo "🚀 Starting Nexus Capital Website..."
echo "📁 Server will run on: http://localhost:8000"
echo "📱 Mobile testing: http://[your-ip]:8000"
echo ""
echo "Press Ctrl+C to stop the server"
echo ""

# Try different Python versions
if command -v python3 &> /dev/null; then
    python3 -m http.server 8000
elif command -v python &> /dev/null; then
    python -m http.server 8000
else
    echo "❌ Python not found. Please install Python or use another method:"
    echo "   - npx http-server (requires Node.js)"
    echo "   - php -S localhost:8000 (requires PHP)"
    echo "   - Open index.html directly in browser"
fi 