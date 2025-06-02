from fastapi import FastAPI, Request
from pydantic import BaseModel
import pymysql
from datetime import datetime

app = FastAPI()

# DB 연결 정보
connection = pymysql.connect(
    host='localhost',         # 외부에서 접근할 때는 localhost
    port=3310,                # 변경된 외부 포트
    user='root',              # MySQL 사용자 이름
    password='karina',        # 사용자 비밀번호
    db='markdown',            # 사용할 데이터베이스 이름
    charset='utf8mb4',        # 문자 인코딩
    autocommit=True           # 자동 커밋
)

class Content(BaseModel):
    content: str

@app.post("/save")
async def save_content(data: Content):
    with connection.cursor() as cursor:
        sql = "INSERT INTO documents (content, saved_at) VALUES (%s, %s)"
        cursor.execute(sql, (data.content, datetime.now()))
    return {"message": "저장 완료!"}
