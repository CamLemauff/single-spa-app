import React from "react"
import './react.css'

export default class Root extends React.Component {
    render() {
        return (
            <div class="reactIndex">
                <h1>Application faite en React</h1>
                <p>Cette application peut être vue toute seule en cliquant ici: </p>
                <br/>
                <a class="button" href="http://localhost:8081/react">React</a>
            </div>
        )
    }
}
// const App = () => <h1>Hello from React</h1>

// export default App