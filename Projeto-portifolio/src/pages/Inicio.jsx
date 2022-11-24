import { Header } from "../components/Header";
import homeImg from '../assets/homeImg.png'
export function Inicio() {
    return (
        <>
            <Header title="Programação na minha vida" image={homeImg} />
            <div className="item1">
                <h2 className="teste">Apreandizado</h2>
                <p className="paragrafo01">
                    A progamação para mim tem sido um mundo novo que estou amando conhecer, tem sido um desafio que estou a cada dia mais gostando de trilhar!</p>
                    <img className="foto01" src="https://ouch-cdn2.icons8.com/64wWYa2HIvnbwkYVZTuWjpP29qBgvNw5k-M3fbkndQk/rs:fit:256:191/czM6Ly9pY29uczgu/b3VjaC1wcm9kLmFz/c2V0cy9wbmcvNzY5/L2U4OTIzYmE5LThj/YzUtNGIyZC1hNTA4/LTM4ZWIwNDJkNzcx/MS5wbmc.png" alt="desenho de um " />
            </div>
        </>
        
    )
}