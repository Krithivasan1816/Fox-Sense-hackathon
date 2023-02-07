import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Signup() {

    const navigate = useNavigate();

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            setError(false)
            const resp = await axios.post('http://localhost:8085/register',
                {
                    name,
                    password,
                    email
                })
            if (resp?.data?.success) {
                localStorage.setItem('authToken', resp?.data?.token)
                localStorage.setItem('email',email)
                navigate('/home')
            }
        } else setError(true)

    }
    return (
        <div className={'flex'}>
            <div className={'w-1/2 h-screen flex items-center justify-center'}>
                <img className={'h-8/12 w-full'} src={'https://img.freepik.com/free-vector/mobile-login-concept-illustration_114360-83.jpg'} />
            </div>
            <div className={'w-1/2 h-screen mx-auto p-12 flex flex-col justify-center'}>
                <div className={'text-7xl '}>Sign Up</div>

                <form onSubmit={onSubmit}>

                    <div className={'mt-8 mb-2'}>Name *</div>
                    <input className={'rounded-xl border-2 p-2 text-lg w-1/2'} type={'text'} onChange={(e) => { setName(e.target.value) }} value={name} />

                    <div className={'mt-8 mb-2'}>Email *</div>
                    <input className={'rounded-xl border-2 p-2 text-lg w-1/2'} type={'email'} onChange={(e) => { setEmail(e.target.value) }} value={email} />

                    <div className={'mt-8 mb-2'}>Password *</div>
                    <input className={'rounded-xl border-2 p-2 text-lg w-1/2'} type={'password'} onChange={(e) => { setPassword(e.target.value) }} value={password} />

                    <div className={'mt-8 mb-2'}>Confirm Password *</div>
                    <input className={'rounded-xl border-2 p-2 text-lg w-1/2'} type={'password'} onChange={(e) => { setConfirmPassword(e.target.value) }} value={confirmPassword} />

                    {error && <div className={'text-red-400 my-2'}>
                        *Password and confirm password doesn't match
                    </div>}

                    <div>
                        <button className={'mt-8 p-3 border-2 bg-blue-500 rounded-xl w-1/2'}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
