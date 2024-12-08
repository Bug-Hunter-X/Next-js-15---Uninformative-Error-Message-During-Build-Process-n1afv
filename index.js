```javascript
//pages/about.js

export default function About() {
  try {
    // Code that might throw an error
    //throw new Error('Intentional error');
  } catch (error) {
    // Handle the error gracefully
    console.error('Error in About page:', error);
    // Optionally display a user-friendly error message
    return (
      <div>
        <h1>Error loading About Page. Please try again later.</h1>
      </div>
    );
  }
  return (
    <div>
      <h1>About Page</h1>
    </div>
  );
}
```