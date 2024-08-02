import { useEffect, useRef } from "react";
import CardProduct from "../components/Fragments/CardProducts";
import ProductsLayout from "../components/Layouts/ProductsLayout";
import dataDumy from "/src/assets/data.json";
import HeaderLayout from "../components/Layouts/HeaderLayout";
import HeaderFragment from "../components/Fragments/Header";
import Banner from "../components/Elements/Banner";
import NavigationFragment from "../components/Fragments/Navigation";
import UlElement from "../components/Elements/Ul";
import ButtonFunc from "../components/Elements/Button";
import Variants from "../components/Elements/Button/variants";

const dataList = ["home", "products", "about", "project", "contact"];

export default function ProductsPage() {
  const headerRef = useRef(null);
  const buttonRef = useRef(null);
  const username = localStorage.getItem("username");

  useEffect(() => {
    const button = buttonRef.current;
    const handleScroll = () => {
      const fixedNav = headerRef.current.offsetTop;

      if (window.scrollY > fixedNav) {
        headerRef.current.classList.add("navbar-fixed");
      } else {
        headerRef.current.classList.remove("navbar-fixed");
      }
    };
    const handleClick = () => {
      localStorage.clear();
      window.location.href = "/login";
    };

    // menambahkan event listener setelah component di mount
    window.addEventListener("scroll", handleScroll);
    button.addEventListener("click", handleClick);

    // menghapus event listener setelah component di umount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      button.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <div>
      <HeaderLayout ref={headerRef}>
        <HeaderFragment>
          <Banner>Fanialfi</Banner>
          <NavigationFragment>
            <UlElement>
              {dataList.map((elm) => (
                <UlElement.li key={elm}>{elm}</UlElement.li>
              ))}
            </UlElement>
          </NavigationFragment>
          <Banner>
            <>
              {username}
              <ButtonFunc type={Variants.danger} ref={buttonRef}>
                Logout
              </ButtonFunc>
            </>
          </Banner>
        </HeaderFragment>
      </HeaderLayout>
      <ProductsLayout>
        {dataDumy.map((data) => (
          <CardProduct key={data?.id}>
            <CardProduct.Header imageSrc={data?.image} />
            <CardProduct.Body title={data?.title} />
            <CardProduct.Footer price={data?.price} />
          </CardProduct>
        ))}
      </ProductsLayout>
    </div>
  );
}
