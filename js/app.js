import Layout from "./components/Layout.js"
import Home from "./pages/Home.js"
import About from "./pages/About.js"
import Error404 from "./pages/Error404.js"
import { parseRequestUrl } from "./utils.js"

const routes = {
  "/": Home,
  "/about": About,
}

const router = () => {
  const req = parseRequestUrl()
  const parseUrl =
    (req.resource ? `/${req.resource}` : "/") +
    (req.id ? "/:id" : "") +
    (req.verb ? `/${req.verb}` : "")
  const page = routes[parseUrl] ? routes[parseUrl] : Error404

  const app = document.getElementById("root")
  app.innerHTML = Layout.render(page.render())
}

window.addEventListener("load", router)
window.addEventListener("hashchange", router)
