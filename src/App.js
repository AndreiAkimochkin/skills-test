import { HashRouter, Route, Routes} from "react-router-dom";
import Step1 from "./components/Step1";
import Step2 from "./components/Step2";
import Step3 from "./components/Step3";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Result from "./components/Result";

function App() {
    return (
        <>
            <Header/>
            <HashRouter>
                <Routes>
                    <Route path="/" element={<Step1/>}/>
                    <Route path="step2" element={<Step2/>}/>
                    <Route path="step3" element={<Step3/>}/>
                    <Route path="result" element={<Result/>}/>
                </Routes>
            </HashRouter>
            <Footer/>
        </>
    );
}

export default App;
