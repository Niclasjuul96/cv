# Portfolio Recreation Instruction Plan

## **Phase 1: Project Setup**

1. **Initialize React App**
   - Run `npx create-react-app cv` to scaffold a new React project
   - Navigate into the project directory

2. **Install Dependencies**
   - Install SASS: `npm install sass`
   - Install icon library: `npm install lucide-react`
   - Verify dependencies in package.json match your versions (React 18.3.1, sass 1.81.0, lucide-react 0.542.0)

## **Phase 2: Project Structure**

Create the following file structure in `src/`:

- `App.js` - Main application component
- `CV.js` - CV/portfolio display component
- `Profile.js` - User data and content
- `CV.scss` - Component styling
- `index.js` - React entry point
- `index.css` - Global styles
- `reportWebVitals.js` - Performance monitoring

## **Phase 3: Core Content Setup**

1. **Create Profile.js** with user data object containing:
   - Personal info (name, phone, email, links)
   - Title and professional bio
   - Quote/tagline (bilingual: en/da)
   - Overall professional info (bilingual)
   - Skills overview (bilingual)
   - Soft skills array
   - License information
   - Social links (LinkedIn, GitHub, webpage)

2. **Structure data with bilingual support**
   - Use `{ en: "...", da: "..." }` pattern for text that needs translation
   - Keep all content centralized in Profile.js

## **Phase 4: Component Development**

1. **Build CV.js component with:**
   - Language toggle (English/Danish)
   - Header section with quote
   - Contact icons section (Phone, Mail, Globe, LinkedIn) using lucide-react
   - Work experience section
   - Education section
   - Soft skills section
   - Languages section
   - Spare time/hobbies section
   - Other experience section
   - Helper function `renderDate()` to handle date ranges as strings or arrays

2. **Implement language switching**
   - Use useState to manage `lang` state
   - Change document.title based on selected language
   - Conditionally render content based on language selection

## **Phase 5: Styling**

1. **Create CV.scss with:**
   - `.lang-toggle` styling for language buttons
   - `.no-print` class for hiding elements during printing
   - `.cv-container` and `.single-column` layout styles
   - `.cv-header` and `.quote` styling
   - `.contact-icons` section styling
   - Icon and text styling with flexbox
   - Responsive design considerations
   - Print-friendly CSS (hiding toggle, optimizing layout)

2. **Global styles in index.css**
   - Base typography
   - Color scheme
   - Spacing defaults

## **Phase 6: Assembly**

1. **Configure App.js**
   - Import CV component
   - Wrap in main div
   - Set page title

2. **Configure index.js**
   - Import React DOM
   - Mount App component to root element

3. **Update public/index.html**
   - Set title to "Niclas CV"
   - Ensure root div exists

## **Phase 7: Testing & Refinement**

1. Run `npm start` to launch development server
2. Test language toggle functionality
3. Verify all links work (phone tel:, email mailto:, external links)
4. Test print functionality (Ctrl+P / Cmd+P)
5. Check responsive design across devices
6. Verify all sections render correctly with data

## **Phase 8: Build & Deploy**

1. Run `npm run build` to create production build
2. Deploy to your hosting platform (currently living at niclasjuul.dk)
