import {useEffect, useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function Profile(){
    const navigate = useNavigate();
    const [data,setData] = useState([])
    useEffect(()=>{
        
        async function getData(){
            let email = await localStorage.getItem('email')
            const resp = await axios.get(`http://localhost:8085/profile/${email}`,
                {
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('authToken')}`
                    }
                })//
            // debugger
            setData(resp.data)
        }
        getData();
    },[])
    const onhome = () => {
        // localStorage.clear();
        navigate('/home');
    }
    return <div className={'p-8 bg-cover bg-center w-full h-screen text-white font-mono '}style={{"backgroundImage":"url('https://img.freepik.com/free-photo/wooden-table-with-blurred-background_1134-14.jpg?size=626&ext=jpg&ga=GA1.1.1537763984.1675695008&semt=sph')"}}>
        <div className={'absolute right-0 top-0 h-16 w-16'}>
            <button className={'border p-3 bg-blue-400 rounded-lg'} onClick={onhome}>home</button>
        </div>
        <div className={'mx-auto text-4xl text-center'}> your profile </div>
        <div className={'flex flex-row flex-wrap text-white'}>
        {
            data.map(book => {
                return (

                    <div>
                        <img src={book.Image}/>
                        <div className={'w-[150px]'}>{book.title}</div>
                        <div>{book.author}</div>
                        
                            {/* <div >
                                <button className={'w-[100px] border-2 bg-blue-400 p-2 rounded-xl'} onClick={(event)=>onClick(event, book)} type={'submit'}>like</button>
                            </div> */}
                        
                    </div>
                )
            })
        }
        </div>
        </div>
    

}