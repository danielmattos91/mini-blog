import styles from "./Register.module.css";

import { useState, useEffect } from "react";


const Register = () => {
    const [displayName, setDisplayName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassord] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        setError("")

        const user = {
            displayName,
            email,
            password
        }

        if(password !== confirmPassword) {
            setError("As senhas precisam ser iguais!")
            return;
        }
    }
    
    return (
        
        <div className={styles.register}>
            <h1>Cadastre-se para postar.</h1>
            <p>Crie seu usuário e compratilhe suas histórias</p>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Nome:</span>
                    <input 
                        type="text" 
                        name="displayName" 
                        required placeholder="Nome do usuário" 
                        value={displayName} 
                        onChange={(e) => setDisplayName(e.target.value)} 
                    />
                </label>
                <label>
                    <span>E-mail:</span>
                    <input 
                        type="email" 
                        name="email" 
                        required placeholder="E-mail do usuário"
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}  
                    />
                </label>
                <label>
                    <span>Senha:</span>
                    <input 
                        type="password" 
                        name="password" 
                        required placeholder="Insira sua senha"
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}  
                    />
                </label>
                <label>
                    <span>Confime sua senha:</span>
                    <input 
                        type="password" 
                        name="confirmPassword" 
                        required placeholder="Isira sua senha novamente" 
                        value={confirmPassword} 
                        onChange={(e) => setConfirmPassord(e.target.value)} 
                    />
                </label>
                <button className="btn">Cadastrar</button>
                {error && <p className="error">{error}</p>}
            </form>
        </div>
    )
}

export default Register;