import React from "react";
import {Grid, Image, Text} from "../elements";

const Main = (props) => {

    return (
        <Grid padding="16px">
            <Grid is_flex>
                <Image shape="rectangle" src={props.src}/>
            </Grid>
            <Grid is_flex>
                {/* <Grid>
                    <Text>부정행위 방지를 위한 문항 랜덤 출제</Text>
                </Grid>
                <Grid>
                    <Text>시험 자동 채점 시스템</Text>
                </Grid>
                <Grid>
                    <Text>결과 분석 시스템</Text>
                </Grid> */}
                <Text>부정행위 방지를 위한 문항 랜덤 출제</Text>
                <Text>시험 자동 채점 시스템</Text>
                <Text>결과 분석 시스템</Text>
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