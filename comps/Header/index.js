//use the same component to change the fontsize
//change the color of the header 
//change the mouseover

import React from 'react';
import './header.css';


const Header = ({fontSize, color, onMouseOver}) => <div style={{color:color, fontSize:fontSize}}
className="custom_header"
onMouseOver={onMouseOver}>

    <h1 >
    Header
    </h1>
</div>



Header.defaultProps = {
    fontSize:12,
    Color:"#000",
    onMouseOver:MouseOver
}

function MouseOver(){
    alert("mouse is over");

}

export default Header;
