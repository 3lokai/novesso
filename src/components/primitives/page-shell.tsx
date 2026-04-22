export function PageShell({ children }: { children: React.ReactNode }) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {children}
    </main>
  );
}
