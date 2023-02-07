import {useState} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function Home(){
    const navigate = useNavigate();
    
    const [books, setBooks] = useState([])
    const [search, setSearch] = useState('')
    const [fav, setName] = useState('')
    const [color,setColor]=useState('red');
    const [textColor,setTextColor]=useState('white');
    // const [author, setSearch] = useState('')
    const onSubmit = async (e) => {
        e.preventDefault();
        const {data} = await axios.post('http://localhost:8085/search-books',
            {
                searchData: search
            }, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('authToken')}`
            }})
        // const {datas} = await axios.post('http://localhost:8085/search-books-auth',
        //     {
                
        //         searchDataAuth: author
        //     }, {
        //     headers: {
        //         authorization: `Bearer ${localStorage.getItem('authToken')}`
        //     }})
        console.log(data)
        setBooks([...data]);
    }
    const onClick = async (e, book) => {
        console.log(book)
        e.preventDefault();
        book.userEmail = localStorage.getItem('email')
            
            const resp = await axios.post('http://localhost:8085/fav-books',
            {
                book
            }, {
            headers: {
                authorization: `Bearer ${localStorage.getItem('authToken')}`
            }})
            
        }
        const onClick2 = async (e, book) => {
            console.log(book)
            e.preventDefault();
            book.userEmail = localStorage.getItem('email')
                
                const resp = await axios.post('http://localhost:8085/fav-books',
                {
                    book
                }, {
                headers: {
                    authorization: `Bearer ${localStorage.getItem('authToken')}`
                }})
                
            }  

    
    const onLogOut = () => {
        localStorage.clear();
        navigate('/');
    }
    const onprofile = () => {
        // localStorage.clear();
        navigate('/profile');
    }
    return <div className={'w-full bg-cover font-mono h-screen '}style={{"backgroundImage":"url('https://img.freepik.com/free-photo/view-books-arrangement_23-2148882757.jpg?w=1380&t=st=1675764619~exp=1675765219~hmac=1e1080094a2b6354bf9ec674da0f8381035ef98e9b5e4aabbc0db11a0ca28342')"}}>
        
        
        <div className={'flex justify-end'}>
            <button className={'border p-3 bg-blue-400 rounded-lg'} onClick={onLogOut}>Logout</button>
        </div>
        <div className={'absolute left-0 top-0 h-16 w-16'}>
            <button className={'border p-3 bg-blue-400 rounded-lg'} onClick={onprofile}>profile</button>
        </div>
        <div className={'mx-auto text-4xl text-center text-white font-serif-bold'}> Search for books </div>
        
        <div>
            <form onSubmit={onSubmit}>
                <div className={'flex justify-center mt-10 mb-4 '}>
                    <input className={'p-3 rounded-2xl w-1/2 border-2 '} placeholder={'Search'} value={search} onChange={(e)=>{setSearch(e.target.value)}}/>
                </div>
                {/* <div className={'flex justify-center mt-10 mb-4'}>
                    <input className={'p-3 rounded-2xl w-1/2 border-2 '} placeholder={'Author'} value={author} onChange={(e)=>{setSearchAuth(e.target.value)}}/>
                </div> */}
                <div className={'flex justify-center w-full'}>
                    <button className={'w-[100px] border-2 bg-blue-400 p-3 rounded-xl'} type={'submit'}>Search</button>
                </div>
            </form>
        </div>
    
        <div className={'flex flex-row flex-wrap text-white'}>
        {
            books.map(book => {
                return (
                    <div key={book.name} className={'m-6'}>
                        <img src={book.image}/>
                        <div className={'w-[150px]'}>{book.name}</div>
                        <div>{book.author}</div>
                        
                            <div >
                                <button className={'bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300 ..."grid-rows-{n} w-[100px] border-2 p-2 rounded-xl'} onClick={(event)=>onClick(event, book,setColor("black"))} type={'submit'}>like</button>
                            </div>
                        
                    </div>
                )
            })
        }
        </div>
        {/* <div class="bg-auto bg-no-repeat bg-center ..." img  src={'https://img.freepik.com/free-photo/book-library-with-open-textbook_1150-5924.jpg?w=1060&t=st=1675758185~exp=1675758785~hmac=c4bacf9dbcf44ba57018941cc2f3c1c9b6f932ae38251a74e8561283eef521c7'} /> */}
    
        
        
        {/* <div className={'flex items-center justify-center'}>
                <img src={'https://img.freepik.com/free-photo/book-library-with-open-textbook_1150-5924.jpg?w=1060&t=st=1675756770~exp=1675757370~hmac=2e31f67a2aafb9eab90faa89f7332e4a541499d0a2317eb70a4c8d642bb2fa95'} />
            </div> */}
     
            
    </div>
    
    
}
