import { ReactNode } from "react";

export default function RootContent({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation would go here */}
      <main className="flex-grow">{children}</main>
      {/* Footer would go here */}
    </div>
  );
}
