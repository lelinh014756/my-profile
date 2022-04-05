import React, { useEffect, useState } from "react";
import Header from "./component/Header/Header";
import Content from "./component/Content/Content";
import Footer from "./component/Footer/Footer";
import GoToTop from "./common/GoToTop/GoToTop";

function App() {

  const [goToTop, setGoToTop] = useState(false);

  window.addEventListener('scroll' ,() => {
    const scrolled = window.scrollY;
    if(scrolled >= 200) {
      setGoToTop(true)
    } else {
      setGoToTop(false);
    }
  })

  return (
    <React.Fragment>
      <Header />
      <Content />
      <Footer />
      {goToTop && <GoToTop />}
    </React.Fragment>
  );
}

export default App;
