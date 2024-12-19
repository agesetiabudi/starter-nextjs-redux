import ClientProvider from "@/components/ClientProvider";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ClientProvider>
            {children}
        </ClientProvider>
      </body>
    </html>
  );
}
