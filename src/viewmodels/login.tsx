import { useState } from "react";

export function useLoginModel(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    function handleEmailChange(e: {target: { value: React.SetStateAction<string> }}) {
        setEmail(e.target.value)
    }

    function handlePasswordChange(e: {target: { value: React.SetStateAction<string> }}) {
        setPassword(e.target.value)
    }

    function handleSubmit(e: { preventDefault: () => void }) {
        e.preventDefault();
        console.log(`Email: ${email}, Senha: ${password}`)
    }

    return {
        email,
        password,
        handleEmailChange,
        handlePasswordChange,
        handleSubmit
    }
}