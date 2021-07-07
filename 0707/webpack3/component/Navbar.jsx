import React ,{Component} from 'react'
import '../css/Navbar.css'
import {FaFacebook,FaInstagram,FaBeer,HiMenu,FaBars} from 'react-icons/fa'
import NavToggle from './NavToggle'

/****0707추가내용 */
import { Link } from 'react-router-dom'
// a 태그 대신 쓸거임

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
                url:'/about',
                text:'가고'
            },
            {
                id:3,
                url:'/projects',
                text:'싶으다'
            },],
            showLinks:false,
        flag:true
    }

    //showLinks false >links-container
    //showLinks true links-container on

    onClick=()=>{
        let {flag} =this.state
        this.setState({flag:!flag})
    }

    showContainer = () =>{
        let className = this.state.showLinks ? "links-container on": "links-container"

        // if(this.state.showLinks){
        //     className = "links-container on"
        // } else{
        //     className = "links-container"
        // }
        return className
    }

    handleToggle = () =>{
        this.setState({showLinks:!this.state.showLinks})
    }

    render(){
        return(
            <nav>
                <div className = "nav-center">
                    {/* logo */}
                    <div className = "nav-header">
                        <h1 className = "logo"  >Logo111</h1>
                        <button className ="nav-toggle" >
                            <NavToggle toggle = {this.handleToggle}/>
                        </button>
                    </div>
                    

                    {/* navigation */}
                    {/* <div className = {this.state.showLinks ? "links-container on": "links-container"}> */}
                    <div className = {this.showContainer()}>
                    {/* <div className = {this.state.showLinks ? "links-container on": "links-container"}> */}
                        <ul className = "links">
                            {this.state.menu.map(e=>{
                                const {id, url,text} = e;
                                return(
                                    <li className = {id}>
                                        <Link to={url}>
                                            {text}
                                        </Link>
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