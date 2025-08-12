import Carousel from "@/componets/Carousel"
import Products from "@/componets/Products"
import GoldCollection from "@/componets/GoldCollection"
import GoldCards from "@/componets/GoldCards"
import ShopCategory from "@/componets/ShopCategory"
import Trending from "@/componets/Trending"
import ShopByGender from "@/componets/ShopByGender"
export default function Home() {
  return <>
    <div className="">

      <Carousel />
      <GoldCollection />
      <ShopCategory />
      <Trending />
      <ShopByGender />
      {/* <GoldCards /> */}
      <Products />
    </div>
  </>
}
