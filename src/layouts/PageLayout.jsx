import Footer from "../components/Footer";
import Header from "../components/Header";

import "./PageLayout.css";

function PageLayout({children}) {
    return (
        <div className="layout fade-in-left">
            <Header />
            {children}
            <Footer />
        </div>
    );
}

export default PageLayout;