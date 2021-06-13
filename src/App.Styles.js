import styled from "styled-components";

export const MainContainer=styled("main")`
    max-width: 1920px;
    width: 100%;
    height: auto;
    background-image: none;
    color: #111111;
    background-color: #f2f2f2;
    display: flex;
	justify-content: center;
`
export const ContentWrapper=styled("contentwrapper")`
    margin-top: 40px;
    display: flex;
    flex: 0 1 auto;
    flex-flow: row wrap;
    justify-content: center;
`
export const Element=styled("element")`
    width: 500px;
    height: 400px;
    margin:0 40px 40px;
    background: #444;
`
export const List = styled ("li")`
    display: flex;
    flex-direction: column;
    flex: 0 1 auto;
    flex-direction: column;
    justify-content: space-around;
    text-align: flex-end;
    width: 300px;
    height: 400px;
}
`
export const RightSide = styled("RightSide")`
    display: flex;
    flex-direction: column;
    flex: 0 1 auto;
    flex-direction: column;
    justify-content: space-around;
    text-align: flex-end;
    width: 200px;
    height: 300px;
`
export const List=styled("p")`
//reusable style
    font-size:${props=>props.fontSize}px;
    color: ${props=>props.color};
`
export const Button=styled("button")`
     margin-top: 20px;
     width: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgb(23, 21, 134);
    color: #fff;
    height:25px;
    border:none;
    border-radius: 21px;
    cursor: pointer;
    background: ${props=>{
        return props.isPurble?
        "linear-gradient(189.77deg,#7135d8 14.69%, #5423" : "#FFF"
    }};
`