import React from "react";
import {Button} from "../../Styles/Button.styled";
import heroImg from "../../images/Recipe 1.png";
import {HereSection} from "../../Styles/Home.styled";
import {Container} from "../../Styles/Common.styled";


export default function Hero() {
    return (
        <Container>
        <HereSection>
            <div>
                <h2>Yummy Recipes</h2>

                    <p>we have a lot of yummy recipes from all aruond the world.</p>

                    <Button>See Recipes</Button>
                    </div >
                    <div>
                        <img src={heroImg} alt="hero img" />

            </div>
        </HereSection>
</Container>
    )
}