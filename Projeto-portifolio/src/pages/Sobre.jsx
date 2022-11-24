import { Header } from "../components/Header";
import sobreImg from '../assets/sobreImg.png'

export function Sobre() {
    return (
        <>
            <Header title="Minha trajetória" image={sobreImg} />
            <div className="divsobre">
                <div>
                    <h2 className="foto03">Olá! Muito prazer, eu sou a Marta!</h2>
                    <img className="foto03" src="https://avatars.githubusercontent.com/u/109400186?v=4" alt="" />
                </div>
                <div className="item">
                    <p>Me aprensentando um pouquinho, tenho 25 anos atualmente, sou aluna de Front  end na Reprograma e está sendo uma experiência incrível na minha vida.
                        O projeto tem mudado a minha vida de formas inimanigináveis.
                        Antes de entrar aqui na Reprograma , não sabia nem como ligar um computador direito, tenho apredido tantas coisas que nunca imaginei, tem sido uma surpresa linda na minha vida poder trilhar este caminho!</p>
                </div>
            </div>
        </>
    )
}