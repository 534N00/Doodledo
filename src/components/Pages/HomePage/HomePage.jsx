import Header from '../../Spans/Header/Header';
import Footer from '../../Spans/Footer/Footer';
import './HomePage.css';

const HomePage = () => {
    return (
        <div className="container">
            <Header />
            <div className="pageContent">
                <h1>Home Page</h1>
            </div>
            <Footer />
        </div>
    );
}

export default HomePage;