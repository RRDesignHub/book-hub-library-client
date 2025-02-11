import { Outlet } from "react-router-dom"
import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"

export const MainLayout = () => {
  return (
    <>
      <header className="bg-[#D9EAFD] fixed z-40 w-full shadow-sm ">
        <Navbar></Navbar>
      </header>

      <main className="pt-[68px] min-h-[calc(100vh-420px)] bg-[#F8FAFC]">
        <Outlet></Outlet>
      </main>

      <footer >
        
        <Footer></Footer>
      </footer>
    </>
  )
}
