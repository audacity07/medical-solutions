import { Navbar } from "../components/navbar";
import { HeroSection } from "../components/heroSection";
import { WhyVaccinate } from "../components/whyVaccinate";
import { Reasons } from "../components/reasons";
import { Preparation } from "../components/preparation";
import { Emergency } from "../components/emergency";
import { Footer } from "../components/footer";
import { useContext, useEffect } from "react";
import { AuthContext } from "../contexts/authContext";
import { Admin } from "../components/admin";

export default function LandingPage() {
  const { isAuth, userInfo, setUserInfo, setIsAuth } = useContext(AuthContext);
  // let uData = JSON.parse(localStorage.getItem("userData")) || {};
  // let aData = JSON.parse(localStorage.getItem("adminData")) || {};
  // console.log(uData, aData);

  // useEffect(() => {
  //   if (isAuth === false && aData) {
  //     setIsAuth(true);
  //     setUserInfo({
  //       ...userInfo,
  //       ...aData,
  //     });
  //   } else if (isAuth === false && uData) {
  //     setIsAuth(true);
  //     setUserInfo({
  //       ...userInfo,
  //       ...uData,
  //     });
  //   }
  // }, []);

  return (
    <>
      {isAuth !== false && userInfo.name === "admin" && (
        <>
          {/* <Navbar /> */}
          <Admin />
        </>
      )}

      {isAuth !== false && userInfo.name !== "admin" && (
        <>
          <Navbar />
          <HeroSection />
          {/* logo section - yet to implement*/}
          <WhyVaccinate />
          <Reasons />
          <Preparation />
          <Emergency />
          <Footer />
        </>
      )}

      {isAuth === false && (
        <>
          <Navbar />
          <HeroSection />
          {/* logo section - yet to implement*/}
          <WhyVaccinate />
          <Reasons />
          <Preparation />
          <Emergency />
          <Footer />
        </>
      )}
    </>
  );
}
