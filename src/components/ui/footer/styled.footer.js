import styled from "styled-components";
// membuat component Li

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
  
  h2 {
    font-size: 1.9rem;
    margin-bottom: auto;
    margin-top: auto;
    margin-left: 40px;
  }
  
  ul {
    display: flex;
    flex-direction: column;
    list-style: none;
  }
  
  li {
    margin-bottom: 1rem;
  }
    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
  
    ul {
      flex-direction: row;
    }

    a{
      text-decoration: none;
      color: white;
    }
    li {
      margin: 0 1rem;
    }
    }
`;
export default StyledFooter;