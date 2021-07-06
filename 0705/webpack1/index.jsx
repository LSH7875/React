// const React = require('react');
// const ReactDOM = require('react-dom');
// const LoginBox = require('./loginbox.jsx')
//  const 

//위의 코드 밑의 코드 같지만 밑의 것은 한번 더 바벨ㅇ릐 처리를 거친다.
//webpack안에서 babel이 활성화되는 것임.
import React,{Component} from 'react' //변수를 두가지 동시 설정 가능
import ReactDOM from 'react-dom'
import LoginBox from './loginbox.jsx'
//d\왜 webpack은 확장자를 써야하냐? 설정을 해주면 가능함.

// import <<javascript 버전업
// require <<nodejs에서 쓰는 형식임.


class App extends Component{
    render(){
        return(
            <>
            <div>hello,babel</div>
            <LoginBox/>
            </>
        )
    }
}


ReactDOM.render(
    <App />,
    document.querySelector('#root')
)


