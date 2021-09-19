import React from "react";
import {Grid, Text, Button} from "../elements";

const Header = (props) => {
    return (
        <React.Fragment>
            <Grid is_flex padding="4px 16px">
                <Grid is_flex>
                    <Button text="로그인"></Button>
                </Grid>
            </Grid>
            <Grid is_flex padding="4px 16px">
                <Grid is_flex>
                    <Button text="회원가입"></Button>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

Header.defaultProps = {}

export default Header;