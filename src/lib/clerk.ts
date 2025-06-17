import { ClerkProvider } from '@clerk/tanstack-react-start';

export const clerkConfig = {
  publishableKey: process.env.VITE_CLERK_PUBLISHABLE_KEY,
};

export function ClerkApp({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider {...clerkConfig}>
      {children}
    </ClerkProvider>
  );
} 