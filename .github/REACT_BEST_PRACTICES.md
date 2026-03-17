# React.js Best Practices Instruction Guide

## **1. Component Architecture**

### Functional Components

- Use functional components with hooks instead of class components
- Keep components small and focused on a single responsibility
- Export named exports for easier testing and debugging

```javascript
// ✅ Good
export const UserCard = ({ user }) => {
  return <div>{user.name}</div>;
};

// ❌ Avoid
export default class UserCard extends React.Component {
  render() {
    return <div>{this.props.user.name}</div>;
  }
}
```

### Naming Conventions

- Component files use PascalCase (e.g., `UserCard.js`, `ProfileHeader.js`)
- Utility files use camelCase (e.g., `formatDate.js`, `apiClient.js`)
- React components should start with a capital letter
- Use descriptive names that clearly indicate purpose

---

## **2. State Management**

### useState Hook

- Initialize state with appropriate values
- Group related state or use separate hooks for unrelated state
- Lift state up when multiple components need to share data

```javascript
// ✅ Good - related state together
const [formData, setFormData] = useState({ name: "", email: "" });

// ✅ Good - separate unrelated state
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(null);
```

### useEffect Hook

- Include dependency arrays to prevent unnecessary renders
- Clean up side effects (event listeners, timers, subscriptions)
- Use multiple `useEffect` calls for different concerns

```javascript
// ✅ Good - cleanup function
useEffect(() => {
  const handleResize = () => setWidth(window.innerWidth);
  window.addEventListener("resize", handleResize);

  return () => window.removeEventListener("resize", handleResize);
}, []);

// ✅ Good - separate effects
useEffect(() => {
  fetchUser();
}, [userId]);

useEffect(() => {
  document.title = `Page: ${title}`;
}, [title]);
```

### useReducer for Complex State

- Use for complex state logic with multiple sub-values
- Easier to test and reason about state transitions

```javascript
// ✅ Good for complex state
const [state, dispatch] = useReducer(reducer, initialState);

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, isLoading: true };
    case "SET_DATA":
      return { ...state, data: action.payload, isLoading: false };
    case "SET_ERROR":
      return { ...state, error: action.payload, isLoading: false };
    default:
      return state;
  }
};
```

---

## **3. Props & Prop Drilling**

### Prop Passing

- Pass only necessary props to child components
- Use destructuring for cleaner code
- Provide default values where appropriate

```javascript
// ✅ Good - destructuring
export const UserCard = ({ name, email, role = "user" }) => {
  return (
    <div>
      {name} ({role})
    </div>
  );
};

// ❌ Avoid - prop drilling through many levels
<Component1 user={user}>
  <Component2 user={user}>
    <Component3 user={user} />
  </Component2>
</Component1>;
```

### Use Context API to Avoid Prop Drilling

- Create context for shared global state
- useContext hook for consuming context

```javascript
// ✅ Good - context for shared state
const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Consume in components
const { user, setUser } = useContext(UserContext);
```

---

## **4. Performance Optimization**

### useMemo Hook

- Memoize expensive computations
- Prevent unnecessary recalculations on every render

```javascript
// ✅ Good - memoize filtered list
const filteredUsers = useMemo(() => users.filter((u) => u.active), [users]);
```

### useCallback Hook

- Memoize callback functions passed to child components
- Prevent unnecessary child re-renders

```javascript
// ✅ Good - stable callback reference
const handleClick = useCallback(() => {
  setCount((c) => c + 1);
}, []);
```

### React.memo for Components

- Prevent re-renders when props haven't changed
- Beneficial for expensive component trees

```javascript
// ✅ Good - skip re-render if props same
export const UserCard = React.memo(({ user }) => {
  return <div>{user.name}</div>;
});
```

### Code Splitting

- Use React.lazy for component-level code splitting
- Wrap with Suspense for loading states

```javascript
// ✅ Good
const HeavyComponent = React.lazy(() => import("./HeavyComponent"));

export const App = () => (
  <Suspense fallback={<Loading />}>
    <HeavyComponent />
  </Suspense>
);
```

---

## **5. File Organization**

### Folder Structure

```
src/
├── components/          # Reusable UI components
│   ├── Button/
│   │   ├── Button.js
│   │   ├── Button.scss
│   │   └── Button.test.js
│   └── UserCard/
│       ├── UserCard.js
│       └── UserCard.scss
├── pages/              # Page-level components (routes)
│   ├── Home.js
│   └── Profile.js
├── hooks/              # Custom hooks
│   ├── useFetch.js
│   └── useForm.js
├── context/            # Context providers
│   └── UserContext.js
├── utils/              # Utility functions
│   ├── formatDate.js
│   └── validation.js
├── services/           # API calls and external services
│   ├── apiClient.js
│   └── authService.js
├── styles/             # Global styles
│   └── index.css
└── App.js
```

---

## **6. Styling Best Practices**

### CSS Modules or SCSS

- Scope styles to components to avoid naming conflicts
- Use of SCSS for variables, mixins, and nesting

```javascript
// ✅ Good - CSS module
import styles from "./Button.module.scss";

export const Button = ({ text }) => (
  <button className={styles.button}>{text}</button>
);
```

### Conditional Classes

- Use helper functions or libraries for conditional classes
- Keep styling logic clean and readable

```javascript
// ✅ Good
const buttonClass = `${styles.button} ${isActive ? styles.active : ""}`;

// Or use className libraries
import clsx from "clsx";
const buttonClass = clsx(styles.button, { [styles.active]: isActive });
```

---

## **7. Error Handling**

### Error Boundaries

- Catch errors in component tree
- Prevent entire app from crashing

```javascript
// ✅ Good
class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}
```

### Try-Catch in Async Operations

- Handle API errors gracefully
- Show user-friendly error messages

```javascript
// ✅ Good
useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    } catch (error) {
      setError("Failed to load data");
      console.error(error);
    }
  };
  fetchData();
}, [url]);
```

---

## **8. Testing**

### Unit Testing

- Test component logic, not implementation details
- Use React Testing Library (RTL) instead of Enzyme
- Focus on user behavior

```javascript
// ✅ Good - test user interaction
import { render, screen } from "@testing-library/react";

test("displays user name", () => {
  render(<UserCard user={{ name: "John" }} />);
  expect(screen.getByText("John")).toBeInTheDocument();
});
```

### Avoid Testing Implementation

```javascript
// ❌ Avoid - testing internal state
expect(component.state.count).toBe(1);

// ✅ Good - test what user sees
expect(screen.getByText("1")).toBeInTheDocument();
```

---

## **9. Accessibility (A11y)**

### Semantic HTML

- Use appropriate HTML elements
- Improves both accessibility and SEO

```javascript
// ✅ Good
<button onClick={handleClick}>Click me</button>
<nav>Navigation</nav>
<section>Content</section>

// ❌ Avoid
<div onClick={handleClick}>Click me</div>
```

### ARIA Attributes

- Use aria labels for screen readers
- Add appropriate roles when semantic HTML isn't sufficient

```javascript
// ✅ Good
<button aria-label="Close modal" onClick={closeModal}>×</button>
<div role="alert">{errorMessage}</div>
```

---

## **10. Common Hooks**

### Custom Hooks

- Extract component logic into reusable hooks
- Naming convention: `useXXX`

```javascript
// ✅ Good custom hook
export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err);
        setLoading(false);
      });
  }, [url]);

  return { data, loading, error };
};
```

### Hook Rules

- Only call hooks at top level (not inside loops/conditionals)
- Only call hooks from React function components or custom hooks

---

## **11. Type Safety (PropTypes or TypeScript)**

### PropTypes (Runtime Validation)

- Document expected props and catch type errors
- Helpful for debugging during development

```javascript
// ✅ Good
import PropTypes from "prop-types";

export const UserCard = ({ user, onClick }) => {
  return <div onClick={onClick}>{user.name}</div>;
};

UserCard.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func,
};

UserCard.defaultProps = {
  onClick: () => {},
};
```

### TypeScript

- Prevent errors at compile time
- Better IDE support and developer experience

```typescript
// ✅ Good
interface User {
  id: number;
  name: string;
  email: string;
}

interface UserCardProps {
  user: User;
  onClick?: () => void;
}

export const UserCard: React.FC<UserCardProps> = ({ user, onClick }) => {
  return <div onClick={onClick}>{user.name}</div>;
};
```

---

## **12. Development Best Practices**

### Environment Variables

- Store sensitive data and config in `.env` files
- Use `process.env.REACT_APP_*` for Create React App

```javascript
// ✅ Good
const API_URL = process.env.REACT_APP_API_URL || "http://localhost:3000";
```

### Avoid Anti-patterns

- Don't mutate state directly
- Don't use index as key in lists (unless list is static)
- Don't put objects/arrays as default props

```javascript
// ❌ Avoid - mutating state
state.user.name = "John"; // Wrong!

// ✅ Good
setState({ ...state, user: { ...state.user, name: "John" } });

// ❌ Avoid - index as key
{
  items.map((item, i) => <Item key={i} />);
}

// ✅ Good - use unique ID
{
  items.map((item) => <Item key={item.id} />);
}

// ❌ Avoid - object as default prop
const MyComponent = ({ config = {} }) => {};

// ✅ Good
const defaultConfig = {};
const MyComponent = ({ config = defaultConfig }) => {};
```

---

## **13. Performance Tips**

- Use production build for final deployment
- Monitor bundle size with tools like `source-map-explorer`
- Lazy load images with intersection observer
- Implement pagination/infinite scroll for large lists
- Profile with React DevTools Profiler tab
- Throttle/debounce expensive operations

---

## **14. Debugging**

### React DevTools

- Install React DevTools browser extension
- Inspect component tree and props
- Highlight component updates
- Use Profiler to identify performance bottlenecks

### Console Best Practices

- Use console for debugging during development
- Remove console.logs before production
- Use structured logging packages for production

```javascript
// ✅ Good - temporary debug
console.log("User:", user);

// ✅ Good - production logging
import logger from "./logger";
logger.error("API call failed", error);
```

---

## **15. Deployment Considerations**

- Build optimization: `npm run build`
- Set correct environment variables
- Use HTTPS in production
- Implement error tracking (Sentry, LogRocket)
- Monitor performance (Google Analytics, Web Vitals)
- Cache-bust assets with hashing
- Use CDN for static assets
