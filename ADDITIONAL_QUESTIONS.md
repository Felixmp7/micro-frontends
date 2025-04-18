# Additional Questions & Answers

---

## 1. What is accessibility? How do you achieve it?

**Accessibility** is the practice of ensuring that all users, including those with disabilities, can use a website or application.

**How to achieve it:**
- Use semantic HTML.
- Ensure compatibility with assistive technologies (screen readers, etc.).
- Provide sufficient color contrast.
- Support keyboard navigation.
- Add descriptive labels and alt text.

---

## 2. What is the difference between session storage, local storage, and cookies?

**Session Storage** and **Local Storage** are types of storage that are available in the browser, but they have different lifetimes. Session storage is only available for the duration of the page session, while local storage persists even after the browser is closed. Cookies are also a type of storage that is available in the browser, but they are sent to the server with each request and can be used to store user information.


| Storage Type      | Lifetime               | Sent to Server | Use Case                          |
|------------------|------------------------|----------------|-----------------------------------|
| Session Storage  | Until tab is closed    | No             | Temporary data for a session      |
| Local Storage    | Until manually cleared | No             | Persistent client-side data       |
| Cookies          | Configurable           | Yes            | Authentication, server-side needs |

- **Session storage**: Available for the duration of the page session.
- **Local storage**: Persists after browser is closed.
- **Cookies**: Sent to the server with each request; can store user info.

---

## 3. Explain the JavaScript event loop (and Promises/async-await)

The **event loop** allows JavaScript to handle asynchronous operations by processing events and callbacks as they become available.

**Analogy:**
> Imagine a restaurant: customers (events) wait in a queue, and the chef (event loop) processes orders (callbacks) as they come in.

- **Promises** represent a value that may not be available yet.
- **Async/await** is syntax sugar for working with promises, making asynchronous code easier to read and write.

---

## 4. If you are getting too many API calls from your hooks, what can you do to prevent this?

**Ways to prevent excessive API calls:**
- Use memoization or caching to reuse results.
- Apply debouncing or throttling to limit calls per time frame.
- Abort or ignore duplicate requests if a previous one is pending.

---

## 5. How do you manage the global state? And why that way?

- Use a state management library (e.g., Redux, Zustand), or
- Use a global context provider (React Context API).

> _In this project, a global context provider is used to share the current language between components, which is sufficient for the challenge scope._

---

## 6. What is progressive rendering?

**Progressive rendering** is a technique that allows a web application to render and display content incrementally, improving perceived performance and user experience.

- Users see content as it becomes available, instead of waiting for the entire page to load.
- You can use code splitting and lazy loading to progressively load parts of the app only when needed.