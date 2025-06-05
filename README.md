# REMWaste - Skip Hire Application

A modern React application for skip hire services with a focus on user experience and responsive design.

## Live Demo
[View Live Demo](https://codesandbox.io/p/github/Eng-HazemMansour/REMWaste)
## Features

- 📱 Responsive design that works on all devices
- 🎨 Modern Material UI design system
- 🔄 Real-time skip availability checking
- 📍 Postcode-based service area validation
- 🚛 Multiple skip size options with detailed information
- 💳 Streamlined booking process
- 🎯 Step-by-step user journey with progress tracking

## Technical Approach

### Architecture
- Built with React + Vite for optimal development experience and build performance
- Utilized Material UI (MUI) for consistent design system
- Implemented React Query for efficient data fetching and caching
- Component-based architecture for maintainability and reusability

### Key Components
1. **Header Component**
   - Responsive navigation with progress stepper
   - Visual feedback for completed steps
   - Adaptive layout for mobile/desktop views

2. **SkipCard Component**
   - Interactive skip selection cards
   - Clear pricing display
   - Waste type compatibility indicators
   - Road permit availability status

3. **Footer Component**
   - Persistent navigation controls
   - Selected skip summary
   - Action buttons for workflow progression

### Data Flow
- API integration with skip availability endpoint
- Real-time validation of postcodes
- State management for user selections
- Loading and error states handling

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation
1. Clone the repository:
\`\`\`
git clone https://github.com/Eng-HazemMansour/REMWaste.git
\`\`\`

2. Install dependencies:
\`\`\`
cd REMWaste
yarn install
\`\`\`

3. Start the development server:
\`\`\`
yarn dev
\`\`\`

## Development Process

1. **Initial Setup**
   - Created React application using Vite
   - Integrated Material UI components
   - Set up project structure

2. **Component Development**
   - Implemented responsive layout
   - Created reusable components
   - Added interactive features

3. **API Integration**
   - Connected to skip availability API
   - Implemented data fetching with React Query
   - Added loading and error states

4. **UI/UX Improvements**
   - Enhanced visual feedback
   - Optimized mobile experience
   - Added transitions and animations

## Future Enhancements

- [ ] Add user authentication
- [ ] Implement payment gateway integration
- [ ] Add booking history
- [ ] Enhance skip visualization
- [ ] Add real-time availability updates

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.