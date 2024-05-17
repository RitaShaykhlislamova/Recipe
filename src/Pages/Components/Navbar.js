import React from 'react';
import {Navigation} from "../../Styles/Navbar.styled";
import {Container} from "../../Styles/Common.styled";




export default function Navbar() {
    return (
        <Container>
        <Navigation>
            <div>
                <h1>Recipe</h1>
            </div>
            <ul>
                <li>HOME</li>
                <li>LIST</li>
                <li>SEARCH</li>
            </ul>


            </Navigation>
            </Container>

    )
}



