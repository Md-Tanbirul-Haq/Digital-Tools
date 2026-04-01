
import { Suspense } from 'react'
import './App.css'
import Banner from './Banner/banner'
import Footer from './footer/footer'
import Get_started from './get_started/get_started'
import Navbar from './navbar/navbar'
import Product_price from './product_price/product_price'
import Products_ from './products_/products_'

const products_data = async () => {
  let Data = await fetch('/data.json')
  Data = await Data.json()
  return Data
}
console.log(products_data())
function App() {


  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>

      <Suspense fallback={<span className="loading loading-spinner loading-xl"></span>}>
        <Products_ products_data={products_data()}></Products_>

      </Suspense>
      <Get_started></Get_started>
      <Product_price></Product_price>
      <Footer></Footer>



    </>
  )
}

export default App
