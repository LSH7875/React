import Styled from 'styled-components'
import Link from 'next/link'

const menu=[
    {   id:'1',category:'대분류메뉴1',url:'/posts/HTML'    },
    {   id:'2',category:'대분류메뉴2',url:'/posts/2'    },
    {   id:'3',category:'대분류메뉴3',url:'/posts/3'    },
    {   id:'4',category:'대분류메뉴4',url:'/posts/4'    },
    {   id:'5',category:'대분류메뉴5',url:'/posts/5'    },
]
const Accordion =({visible,handleToggle})=>{

    const handleClick=()=>{
            handleToggle();
    }
    const category = menu.map((v,k)=>{
        return <li onClick={handleClick} key={v.id}><Link href={v.url}><a>{v.category}</a></Link></li>
    })
    return(
        <AccordionMenu flag = {visible}>
            <ul>
                {category}
            </ul>
        </AccordionMenu>
        )
}

const AccordionMenu = Styled.div`
    position:absolute;
    width:100%;
    left:0px;
    top:10vh;
    z-index:5;
    background:#fff;
    padding:7vh 0;


    display:${props=>(props.flag ? 'block' : 'none')};

    & >ul {
        margin-top:5vh;
        display:flex;
        flex-direction:column;
    }

    & >ul >li{
        margin-top:20px;
        text-align:center;
    }

    

`
export default Accordion