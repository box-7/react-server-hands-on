
import { Footer } from "../components/Footer";
import Header from "../components/Header";
import "./global.css";
export default function RootLayout({
  pageName,
  children,
}: React.PropsWithChildren<{
  pageName: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <div className="flex flex-col min-h-screen">
          <Header pageName={pageName} />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}


// import { Footer } from "../components/Footer";
// import Header from "../components/Header";
// import "./global.css";
// export default function RootLayout({ children }: React.PropsWithChildren<{}>) {
//   return (
//     <html lang="ja">
//       <body>
//         <div className="flex flex-col min-h-screen">
//           <Header />
//           <main className="flex-grow">{children}</main>
//           <Footer />
//         </div>
//       </body>
//     </html>
//   );
// }
