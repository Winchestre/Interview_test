import { Lato } from 'next/font/google'
import Footer from './components/Footer'
import Header from './components/Header/page'
import './globals.css'

const lato = Lato({ subsets: ['latin'], weight: ["100", "300", "700"] })

export const metadata = {
  title: 'Resonator',
  description: 'Developed By Solomon Bassey',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={lato.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
