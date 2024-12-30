import { Outlet } from "react-router-dom"
import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"

export const MainLayout = () => {
  return (
    <>
      <header className="bg-[#F8FAFC] border-b border-[#BCCCDC] shadow-sm">
        <Navbar></Navbar>
      </header>

      <main className="min-h-[calc(100vh-420px)] bg-[#F8FAFC]">
        <Outlet></Outlet>
      </main>

      <footer >
        
        <Footer></Footer>
      </footer>
    </>
  )
}
