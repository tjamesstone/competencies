import React, {Component} from 'react'
import {Link} from 'react-router-dom'

class Otherpage extends Component {
    constructor(){
        super()
        this.state={

        }
    }

    render(){
        return(
            <div className="otherpage">
                The other page
                <Link to='/'>
                <button>
                    Go Home
                </button>
                </Link>
            </div>
        )
    }
}

export default Otherpage