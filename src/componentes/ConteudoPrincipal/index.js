import React from "react";
import './estilo.css'

export default function ConteudoPrincipal(){
    return(
        <main>
            <div>
                <img src="assets/banner-barbearia.jpg" alt="banner"/>
            </div>
            <div className="conteudo">
                <h1>Bem-vindo a Barber Shop</h1>
                <p className="paragrafo">Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas.</p>
                <p>Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.</p>

                <p>S. Kelly</p>
            </div>
        </main>
    );
}