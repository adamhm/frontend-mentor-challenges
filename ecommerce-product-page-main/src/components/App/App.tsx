import { Header, MainContainer } from "@components";
import { CartContextProvider } from "@contexts";

function App() {
    return (
        <CartContextProvider>
            <Header />
            <MainContainer />
        </CartContextProvider>
    );
}

export default App;
