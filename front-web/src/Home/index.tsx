import './styles.css';
import { ReactComponent as MainImage } from './main.svg';
import Footer from '../Footer';
import { Link } from 'react-router-dom';
// (https://www.figma.com/file/LAIvIzyaJsSl2A9NMrnR7W/DSDeliver01?node-id=1%3A2)


function Home() {
    return (
        <>
            <div className="home-container">
                <div className="home-content">
                    <div className="home-actions">
                        <h1 className="home-title">
                            Faça seu pedido <br /> que entregamos <br /> pra você!!!
                    </h1>
                        <h3 className="home-subtitle">
                            Escolha o seu pedido e em poucos minutos <br />
                        levaremos na sua porta
                    </h3>
                        <Link to="/orders" href="orders" className="home-btn-order">
                            FAZER PEDIDO
                        </Link>
                    </div>
                    <div className="home-image">
                        <MainImage />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home;