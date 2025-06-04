from fastapi import FastAPI, Request
from pydantic import BaseModel
import pymysql
from datetime import datetime
from typing import List

app = FastAPI()

from fastapi.middleware.cors import CORSMiddleware

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # 개발 중에는 * 허용, 배포 시엔 도메인 지정
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)




# DB 연결 정보
def get_db_connection():
    return pymysql.connect(
        host='127.0.0.1',
        port=3310,
        user='root',
        password='karina',
        db='markdown',
        charset='utf8mb4',
        cursorclass=pymysql.cursors.DictCursor,
        autocommit=True
    )



class Content(BaseModel):
    content: str

@app.post("/save")
async def save_content(data: Content):
    conn = get_db_connection()
    with conn.cursor() as cursor:
        sql = "UPDATE documents set content=%s, created_at=%s, updated_at=created_at where id =1"
        cursor.execute(sql, (data.content, datetime.now()))
    return {"message": "저장 완료!"}


@app.get("/load")
def load_content():
    conn = get_db_connection()
    try:
        with conn.cursor() as cursor:
            sql = "SELECT content FROM documents where id = 1"
            cursor.execute(sql)
            results = cursor.fetchall()
        return results
    finally:
        conn.close()