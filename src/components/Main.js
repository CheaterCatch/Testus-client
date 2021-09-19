import React from "react";
import {Grid, Image, Text} from "../elements";

const Main = (props) => {

    return (
        <Grid padding="16px">
            <Grid is_flex>
                <Image shape="rectangle" src={props.src}/>
            </Grid>
            <Grid is_flex>
                <Text>부정행위 방지</Text>
                <Text>자동채점</Text>
                <Text>결과분석</Text>
            </Grid>
        </Grid>
      
    );
}

Main.defaultProps = {
    user_info: {
      user_name: "mean0",
      user_profile: "https://pbs.twimg.com/media/DKx22dkUEAESRYx.jpg",
    },
    image_url: "https://pbs.twimg.com/media/DKx22dkUEAESRYx.jpg",
    contents: "고양이네요!",
    comment_cnt: 10,
    insert_dt: "2021-02-27 10:00:00",
  };

export default Main;