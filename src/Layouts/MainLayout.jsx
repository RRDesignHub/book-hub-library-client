import { Outlet } from "react-router-dom"
import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"

export const MainLayout = () => {
  return (
    <>
      <header className="bg-[#F8FAFC] border-b border-[#BCCCDC] shadow-sm">
        <Navbar></Navbar>
      </header>

      <main className="min-h-[calc(100vh-420px)] bg-gradient-to-br from-[#F8FAFC] to-[#D9EAFD]">
        <Outlet></Outlet>
      </main>

      <footer>
        <Footer></Footer>
      </footer>
    </>
  )
}
