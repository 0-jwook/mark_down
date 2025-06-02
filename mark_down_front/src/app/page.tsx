'use client'
import styled from "@emotion/styled"
import Editer from "@/app/editer";
import Preview from "@/app/preview";
import {useState} from "react";



export default function Home() {
  const [context, setcontext] = useState<string>("")
  // const [title, setTitle] = useState("")

  return (
    <div>
      <Root>
        <div style={{display: "flex", width: "fit-content", height: "fit-content"}}>
        <EditerContainer>

          <Editer value={context} onChange={setcontext}/>
        </EditerContainer>
        <PreviewContainer>
          <Preview content={context}/>
        </PreviewContainer></div>
      </Root>
    </div>
  );
}

const Root = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width: 100vw;
    
    
`


const EditerContainer = styled.div`

`

const PreviewContainer = styled.div`

`