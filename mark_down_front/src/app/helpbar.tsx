import styled from "@emotion/styled";


function Helpbar(){
  return (
    <Bar>
      <Styledp>H1</Styledp>
      <Styledp>H2</Styledp>
      <Styledp>H3</Styledp>
      <Styledp>H4</Styledp>
      <img src="/Line 4.svg" alt="l" />
      <Styledp isBold>B</Styledp>
      <Styledp isItalic isBold>L</Styledp>
    </Bar>
  )
}



const Bar = styled.div`
display: flex;
    width: 50vw;
    height: 5vh;
    align-items: center;
    padding: 5px;
`



const Styledp = styled.p<{ isBold?: boolean, isItalic?:boolean}>`
font-size: 12px;
    padding: 5px;
    font-style: ${({ isItalic }) => (isItalic ? "italic" : "normal")};
    font-weight: ${({ isBold }) => (isBold ? "bold" : "normal")};
`


export default Helpbar;