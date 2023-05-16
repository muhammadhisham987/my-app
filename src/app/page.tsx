import Image from 'next/image'
import Cart from "../../component/cart"
import Nav from "../../component/nav"

export default function Home() {
  return (
    <div>
    <h1>Hello World</h1>
    <Cart/>
    <Nav/>
    </div>
  )
}
