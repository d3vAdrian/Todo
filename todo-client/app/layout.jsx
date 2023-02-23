"use client"
import Navbar from '../components/navbar'
import Sidebar from '../components/sidebar'
import Footer from '../components/footer'
import './globals.css'
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../pages/theme';


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.js. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
      <body>
      <ThemeProvider theme={theme} className ="bg-slate-50">
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <div className ="bg-slate-50">
          <Navbar/>
          <div className="flex gap-4 w-4/5 mx-auto">
            <Sidebar/>
            {children}            
          </div>
          <Footer/>
        </div>
        
      </ThemeProvider>
      </body>
    </html>
  )
}
