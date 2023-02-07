import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState(false)

    const onSubmit = async (e) => {
        e.preventDefault();
        const { data } = await axios.post('http://localhost:8085/authorize', {
            email,
            password
        })
        if (data?.success) {
            setError(false)
            localStorage.setItem('authToken', data?.token);
            localStorage.setItem('email',email)
            navigate('/home')
        } else {
            setError(true)
        }
    }
    return (
        <div className={'flex'}>
            <div className={'w-1/2 h-screen flex items-center justify-center'}>
                <img className={'h-8/12 w-full'} src={'https://t3.ftcdn.net/jpg/03/39/70/90/360_F_339709048_ZITR4wrVsOXCKdjHncdtabSNWpIhiaR7.jpg'} />
            </div>
            <div className={'w-1/2 h-screen mx-auto p-12 flex flex-col justify-center'}>
                <div className={'text-7xl '}>Login</div>

                <form onSubmit={onSubmit}>

                    <div className={'mt-8 mb-2'}>Email *</div>
                    <input className={'rounded-xl border-2 p-2 text-lg w-1/2'} type={'email'} onChange={(e) => { setEmail(e.target.value) }} value={email} />

                    <div className={'mt-8 mb-2'}>Password *</div>
                    <input className={'rounded-xl border-2 p-2 text-lg w-1/2'} type={'password'} onChange={(e) => { setPassword(e.target.value) }} value={password} />

                    <div className={'text-right w-1/2 mt-4'}>
                        <a href={'/signup'} className={'align-right text-blue-400 underline text-right'}>New User</a>
                    </div>

                    {error && <div className={'text-red-400'}>
                        *Check your user name or password
                    </div>}
                    <div>
                        <button className={'mt-8 p-3 border-2 bg-blue-500 rounded-xl w-1/2'}>Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
