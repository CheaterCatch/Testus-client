import React from "react";
import {Grid, Text, Button} from "../elements";

const Header = (props) => {
    return (
        <React.Fragment>
            <Grid is_flex padding="16px">
                <Text>시험지</Text>
                <Text size="32px" bold>TestUs</Text>
                <Text>마이페이지</Text>
            </Grid>
        </React.Fragment>
    )
}

Header.defaultProps = {}

export default Header;