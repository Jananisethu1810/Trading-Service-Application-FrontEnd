import React, { Component } from 'react';
class FooterComponent extends Component {
    render() {
        return (
            <footer className = "footer" style={{textAlign:"center"}}> 
               
                    <span className="text-muted" ><i>
                    &copy;{new Date().getFullYear()} Trading Service App - All Rights Reserved
                    </i></span>
                   
                </footer>
        )
    }
}

export default FooterComponent;
