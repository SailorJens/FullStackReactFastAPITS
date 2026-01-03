# backend/app/main.py
from fastapi import FastAPI

app = FastAPI(title="MyApp API")

@app.get("/health")
def health():
    return {"status": "ok"}

@app.get("/hello")
def hello():
    return {"message": "Hello from FastAPI"}
