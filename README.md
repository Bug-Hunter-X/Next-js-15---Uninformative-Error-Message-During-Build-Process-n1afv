# Next.js 15 - Uninformative Error Message During Build Process

This repository demonstrates a bug in Next.js 15 where throwing an error within a page component results in an unhelpful error message during the build process.  The error message lacks details making debugging challenging.

## Steps to Reproduce

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Uncomment the `throw new Error('Intentional error');` line in `pages/about.js`
4. Run `npm run build`.

You'll observe an uninformative error message during the build process.

## Expected Behavior

A more descriptive error message should be provided, including the location and cause of the error.

## Actual Behavior

An unhelpful error message is displayed, making it difficult to diagnose the issue.

## Solution

The solution involves providing more context in error handling within the page component and potentially improving Next.js's error reporting during the build process.