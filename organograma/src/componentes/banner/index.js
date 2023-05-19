import './Banner.css'

const Banner = () => {
    return (
        //JSX parece html mas não é, react interpreta e aplica no DOM
        <header className="banner">
            <img src="/imagens/banner.png" alt="O banner principal da página do Organo)" />
        </header>
    );
}

export default Banner;