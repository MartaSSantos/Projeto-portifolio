import { Header } from "../components/Header";
import portfolioImg from '../assets/portfolioImg.png'

export function Portfolio() {
    return (
        <>
            <Header title="Meus projetos" image={portfolioImg} />
            <h2 className="subititulo2">Meus projetos favoritos</h2>
            <div className="divportfolio">
                <div className="item">
                    <h3>Lugar de Mulher</h3>
                    <p>Projeto sobre mulheres na tecnologia</p>
                    <p>Gradys Weste foi a expiração</p>
                    <a className="direciona" href="https://amazing-pithivier-2a8d40.netlify.app/" target="_blank">Ir para pagina</a>
                </div>
                <div className="item">
                    <h3>To-Do list</h3>
                    <p>Para marcar afazeres</p>
                    <a className="direciona" href="https://tubular-kitten-16d9e6.netlify.app/" target="_blank" >Ir para pagina</a>
                </div>
                <div className="item">
                    <h3>Meus conteúdos favoritos</h3>
                    <p>Meu primeiro projeto React</p>
                    <a className="direciona" href="https://jovial-granita-ccb680.netlify.app/" target="_blank">Ir para pagina</a>
                </div>
                <div className="item">
                    <h3>Meu github search</h3>
                    <p>Meu segundo projeto React</p>
                    <p>Esse é um dos que mais gosto!</p>
                    <a className="direciona" href="https://segundo-projeto-react.vercel.app/" target="_blank" >Ir Para pagian</a>
                </div>
            </div>
        </>
    )
}