import styled from 'styled-components';

const StyleButton = styled.button`
    background-color: ${(props) => props.blue ? "blue" : "gray"};
`;

const Button = ({children, blue}) =>{
    return <StyleButton blue={blue}>{children}</StyleButton>
}

export default Button;