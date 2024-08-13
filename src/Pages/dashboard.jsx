import { useRef } from "react";
import HeaderLayout from "../components/Layouts/HeaderLayout";
import HeaderFragment from "../components/Fragments/Header";
import Banner from "../components/Elements/Banner";
import NavigationFragment from "../components/Fragments/Navigation";
import UlElement from "../components/Elements/Ul";
import ButtonFunc from "../components/Elements/Button";
import Variants from "../components/Elements/Button/variants";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const headerRef = useRef(null);
  const buttonRef = useRef(null);
  const username = localStorage.getItem("username");

  useEffect(() => {
    const button = buttonRef.current;

    const handleClick = () => {
      localStorage.clear();
      navigate("/login");
    };
    const handleScroll = () => {
      const fixedNav = headerRef.current.offsetTop;

      if (window.scrollY > fixedNav) {
        headerRef.current.classList.add("navbar-fixed");
      } else {
        headerRef.current.classList.remove("navbar-fixed");
      }
    };

    // menambahkan event listener setelah component di mount
    window.addEventListener("scroll", handleScroll);
    button.addEventListener("click", handleClick);

    // menghapus event listener setelah component di un-mount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      button.removeEventListener("click", handleClick);
    };
  }, [navigate]);

  return (
    <>
      <HeaderLayout ref={headerRef}>
        <HeaderFragment>
          <Banner>Fanialfi</Banner>
          <NavigationFragment>
            <UlElement>
              {UlElement.dataList.map((item) => (
                <UlElement.li key={item}>{item}</UlElement.li>
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
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
