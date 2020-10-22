import React from 'react';

import '../styles/pages/orphanage-registered.css';

import { Link } from 'react-router-dom';

function OrphanageRegistered() {

    return (
        <div id="page-orphanage-registered">
            <div className="content-wrapper">                
                <main>
                    <h1>Ebaaa!</h1>
                    <p>O cadastro deu certo e foi enviado ao administrador para ser aprovado. Agora é só esperar :)</p>

                    <Link to="/app" className="back-to-map">
                        Voltar para o mapa
                    </Link>
                </main>
            </div>
        </div>
    );
}


export default OrphanageRegistered;
