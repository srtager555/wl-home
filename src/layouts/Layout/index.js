import React from "react";
import { Navbar } from "@components/Navbar";
import Footer from "@components/Footer";

export default function Layout({ children }) {
    
    return (
        <>
            <Navbar
                path={inPath}
                scrollPosition={scrollPosition}
                sideNavRef={sideNavRef}
            />
            {children}
            <Footer />
        </>
    )
}