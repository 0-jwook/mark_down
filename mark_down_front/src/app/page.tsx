'use client'
import styled from "@emotion/styled"

export default function Home() {
  return (
    <div>
      <Root>
        <Container>
          <Markdown></Markdown>
          <Markdown></Markdown>
        </Container>
      </Root>
    </div>
  );
}

const Root = styled.div`
display: flex;
    justify-content: center;
    align-items: center;
`

const Markdown = styled.textarea`
  width: 500px;
    height: 600px;
    background-color: gray; 
    border: none;
    resize: none;
    outline: none;;
`

const Container = styled.div`
padding: 10px;
    display: flex;
    gap: 10px;
`