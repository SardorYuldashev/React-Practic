import { Route, Routes } from "react-router-dom"
import Contacts from "./Pages/Contacts"
import Layout from "./Pages/Layout"
import Login from "./Pages/Login"
import Products from "./Pages/Products"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/products" element={<Products />} />
          <Route path="/contacts" element={<Contacts />} />
        </Route>
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
