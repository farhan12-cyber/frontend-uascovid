// import styled component
import styled, { css } from "styled-components";
// membuat objcet color
const color = {
    green : "#06D6A0",
    secondary : "pink",
    orange : "orange",
}
// membuat component button
const Button = styled.button`
padding: 0.8rem 2rem;
border-radius: 10px;
color: #fff;
background-color: #06D6A0;
cursor : pointer;
border : none;
margin-left: 10px;
text-decoration : none;
background-color : ${ (props) =>{
    // props adalah object
    // PROPS VARIANT jadi props nya itu menampung data variant
    // props ibaratkan parameter
    // jika variant primary, maka warna biru
    // jika variant orange, maka warna orange
    // jika ga ada variant yang di kirim di property button maka warna defult biru
    if (props.variant) {
        return color[props.variant];
    }else{
        return color.green;
    }
}};

${(props) => props.full && css`
display: block;
width: 92%;
`}
`;


// export button
export default Button;