import React from "react";
import './estilo.css';

export default function Topo(){
    return(
        <header>
            <div className="logo">
                <img src="assets/barbearia-logo.png" alt="logomarca"/>
            </div>
            <div className="botao">
                <button><img src="assets/moon.png" alt="imagem da lua"/>
                   <span>Escuro</span></button>
            </div>
        </header>
    );
}