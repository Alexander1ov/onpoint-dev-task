import React, { useState } from "react";

import Header from "./Components/Header/Header";
import Slides from "./Components/Slides/Slides";
import Footer from "./Components/Footer/Footer";

function App() {
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <div className="app">
      <Header setCurrentPage={setCurrentPage} />
      <Slides currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <Footer />
    </div>
  );
}

export default App;
