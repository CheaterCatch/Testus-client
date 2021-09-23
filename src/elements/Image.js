import styled from 'styled-components';
import React from "react";

const Image = (props) => {
    const {shape, src, size} = props;

    const styles = {
        src: src,
        size: size,
    }

    if(shape === "circle"){
        return (
            <ImageCircle {...styles}></ImageCircle>
        )
    }

    if(shape === "rectangle"){        
        return (
            <AspectOutter>
                <AspectInner {...styles}></AspectInner>
            </AspectOutter>
        )
    }

    if(shape === "right") {
        return (
            <RightImage>
                <AspectInner {...styles}></AspectInner>
            </RightImage>
        )
    }

    return (
        <React.Fragment>
            
        </React.Fragment>
    )
}

Image.defaultProps = {
  shape: "circle",
  src: "https://pbs.twimg.com/media/DKx22dkUEAESRYx.jpg",
  size: 36,
};

const AspectOutter = styled.div`
    width: 100%;
    min-width: 250px;
`;

const AspectInner = styled.div`
    position: relative;
    padding-top: 35%;
    overflow: hidden;
    background-image: url("${(props) => props.src}");
    background-size: cover;
`;

const ImageCircle = styled.div`
    --size: ${(props) => props.size}px;
    width: var(--size);
    height: var(--size);
    border-radius: var(--size);

    background-image: url("${(props) => props.src}");
    background-size: cover;
    margin: 4px;
`;

const RightImage = styled.div`
    width: 50%;
    min-width: 250px;
`;

export default Image;