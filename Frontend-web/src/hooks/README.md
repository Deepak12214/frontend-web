# Custom Hooks

Custom React hooks for reusable logic.

## TanStack Query Hooks

We use **TanStack Query** (React Query) for server state management. Query hooks are organized by feature:

### Examples
- `useUserQueries.js` - User data fetching and mutations
- `useAuthQueries.js` - Authentication queries and mutations
- `useForm.js` - Form state management (client-side)

## Custom Hooks (Non-Query)
- `useForm` - Form management with validation
- `useLocalStorage` - localStorage wrapper
- `useDebounce` - Debounce values
- `useMediaQuery` - Responsive design helper

## Guidelines
- Prefix all hooks with 'use'
- Use TanStack Query for **server state** (API data)
- Use custom hooks for **client state** (UI state, form state)
- Document parameters and return values
- Keep hooks focused on single responsibility

## TanStack Query Best Practices
- Use `useQuery` for GET requests
- Use `useMutation` for POST/PUT/DELETE
- Invalidate queries after mutations
- Use query keys consistently: `['resource', id]`

