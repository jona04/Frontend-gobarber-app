import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo.svg';

export default function SignUp() {
    return (
        <>
            <img src={logo} alt="GoBarber" />

            <form action="">
                <input type="text" placeholder="Seu nome" />
                <input type="email" placeholder="Seu email" />
                <input type="password" placeholder="Sua senha" />

                <button type="submit">Criar Conta</button>
                <Link to="/">Já tenho login</Link>
            </form>
        </>
    );
}
