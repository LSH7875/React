import React ,{Component} from 'react'
import '../css/Navbar.css'
import {FaFacebook,FaInstagram,FaBeer,HiMenu,FaBars} from 'react-icons/fa'

class Navbar extends Component{

    state={
        social:[{
            id:1,
            url:'http://www.twitter.com',
            icon:<FaFacebook />
        },{
            id:2,
            url:'http://www.facebook.com',
            icon:<FaFacebook />
        },{
            id:3,
            url:'http://www.instagram.com',
            icon:<FaInstagram />
        },
        ],
        menu:[{
                id:1,
                url:'/',
                text:'집에'
            },
            {
                id:2,
                url:'/',
                text:'가고'
            },
            {
                id:3,
                url:'/',
                text:'싶으다'
            },]
    }
    render(){
        return(
            <nav>
                <div className = "nav-center">
                    {/* logo */}
                    <div className = "nav-header">
                        <h1 className = "logo">Logo</h1>
                        <button className ="nav-toggle">
                            <FaBars/>
                        </button>
                    </div>
                    

                    {/* navigation */}
                    <div className = "links-container">
                        <ul className = "links">
                            {this.state.menu.map(e=>{
                                const {id, url,text} = e;
                                return(
                                    <li className = {id}>
                                        <a href={url}>
                                            {text}
                                        </a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                <ul className="social-icons">
                {/* 리액트에서는 for문이 안되서 map이 쓰임 배열.map*/}
                {
                    this.state.social.map(item=>{
                        const { id, url, icon } =item
                        return (
                            <li key={id}>
                                <a herf={url}>
                                    {icon}
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
                </div>
            </nav>
            
        )
    }
}

export default Navbar