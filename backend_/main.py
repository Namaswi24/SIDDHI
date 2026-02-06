from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from model_logic import run_reconstruction

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/analyze")
async def analyze(lat: float, lon: float):
    # User only sent lat/lon, but run_reconstruction finds the rest!
    pm25, weather = run_reconstruction(lat, lon)
    
    return {
        "pm25": round(pm25, 2),
        "weather": weather,
        "location": {"lat": lat, "lon": lon}
    }