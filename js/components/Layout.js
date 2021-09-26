import Header from "./Header.js"
import Footer from "./Footer.js"

const Layout = {
  render: (main) => {
    return `
           <header> ${Header.render()}</header>
            <main> ${main}</main>
            <footer>${Footer.render()}
        `
  },
}

export default Layout
