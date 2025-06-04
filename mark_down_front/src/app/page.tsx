'use client'
import styled from "@emotion/styled"
import Editer from "@/app/editer";
import Preview from "@/app/preview";
import {useEffect, useRef, useState} from "react";



export default function Home() {
  const [content, setcontent] = useState<string>("")
  // const [title, setTitle] = useState("")
  const contentRef = useRef(content);
  contentRef.current = content;


  useEffect(() => {
    const interval = setInterval(() => {
      if(contentRef.current.trim() !== ""){
        fetch('http://127.0.0.1:8000/save',{
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            content: contentRef.current
          })
        }).then(res => {
          if(!res.ok){
            console.log("자동 저장 실패");
          }else {
            console.log("자동 저장 성공");
          }
        }).catch(err => {
          console.log("에러 발생", err);
        })
      }
    }, 5000)
    return () => clearInterval(interval)
  }, []);

  useEffect(() => {
    fetch("http://localhost:8000/load")
      .then((res) => res.json())
      .then((data) => {
        console.log("불러온 데이터:", data);
        setcontent(data[0]); // 예: 상태에 저장
      });
  }, []);

  return (
    <div>
      <Root>
        <div style={{display: "flex", width: "fit-content", height: "fit-content"}}>
        <EditerContainer>

          <Editer value={content} onChange={setcontent}/>
        </EditerContainer>
        <PreviewContainer>
          <Preview content={content}/>
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