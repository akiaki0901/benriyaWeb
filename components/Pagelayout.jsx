import Header from "./Header";
import Footer from "./Footer";

export default function Pagelayout({children}){
    return(
        <div>
            <Header/>
            <>{children}</>
            <Footer/>
        </div>
    );
}