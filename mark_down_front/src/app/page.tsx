'use client'
import styled from "@emotion/styled"
import Editer from "@/app/editer";
import Preview from "@/app/preview";
import {useEffect, useRef, useState} from "react";
import Helpbar from "@/app/helpbar";



export default function Home() {
  const [content, setcontent] = useState<string>("")
  // const [title, setTitle] = useState("")
  const [title, settitle] = useState<string>("")
  const contentRef = useRef(content);
  const saveTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  contentRef.current = content;


  const autoSave = () => {
    if (contentRef.current.trim() !== "") {
      fetch("http://127.0.0.1:8000/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          content: contentRef.current,
        }),
      })
        .then((res) => {
          if (!res.ok) {
            console.log("자동 저장 실패");
          } else {
            console.log("자동 저장 성공");
          }
        })
        .catch((err) => {
          console.log("에러 발생", err);
        });
    }
  };

  // content가 바뀔 때마다 타이머 재설정
  useEffect(() => {
    // 이전 타이머 제거
    if (saveTimeoutRef.current) {
      clearTimeout(saveTimeoutRef.current);
    }

    // 3초 후 저장 예약
    saveTimeoutRef.current = setTimeout(() => {
      autoSave();
    }, 3000);

    // 컴포넌트 언마운트 시 타이머 정리
    return () => {
      if (saveTimeoutRef.current) {
        clearTimeout(saveTimeoutRef.current);
      }
    };
  }, [content]);

  useEffect(() => {
    fetch("http://localhost:8000/load")
      .then((res) => res.json())
      .then((data) => {
        console.log("불러온 데이터:", data);
        setcontent(data[0].content); // 예: 상태에 저장
      });
  }, []);

  const handleFormat = (label: string) => {
    if (label === "h1") {
      setcontent((prev) => prev + "\n# "); // 원하는 Markdown 태그 추가
    }
  };

  return (
    <div>
      <Root>
        {/*<div style={{display: "flex", width: "fit-content", height: "fit-content"}}>*/}
        <EditerContainer>
          <Editer title={true} value={title} onChange={settitle} />
          <Helpbar onFormat={handleFormat} />
          <Editer value={content} onChange={setcontent}/>
        </EditerContainer>
        <PreviewContainer>
          <Preview title={true} content={title}/>
          <Preview content={content}/>
        </PreviewContainer>
        {/*</div>*/}
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