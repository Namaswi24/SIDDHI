import torch
import torch.nn as nn
import xarray as xr
import os
import glob

# 1. ARCHITECTURE: Must match the model your teammate trained
class PM25Model(nn.Module):
    def __init__(self):
        super(PM25Model, self).__init__()
        self.fc = nn.Sequential(
            nn.Linear(6, 128), # 6 Inputs: Lat, Lon, T2M, WS, PBLH, TP
            nn.ReLU(),
            nn.Linear(128, 64),
            nn.ReLU(),
            nn.Linear(64, 1)    # 1 Output: Downscaled PM2.5
        )
    def forward(self, x):
        return self.fc(x)

# 2. LOAD WEIGHTS: Load the .pth file
model = PM25Model()
model.load_state_dict(torch.load("./model.pth", map_location=torch.device('cpu')))
model.eval()

# 3. LOAD DATASETS: Load your 32 NetCDF files
DATA_PATH = "./data"
folders = ["Temp", "Precipitation", "Windspeed", "PBLH"]

def load_master_dataset():
    datasets = []
    for f in folders:
        files = glob.glob(os.path.join(DATA_PATH, f, "*.nc"))
        datasets.append(xr.open_mfdataset(files))
    return xr.merge(datasets)

master_ds = load_master_dataset()

# 4. THE INFERENCE ENGINE
def run_reconstruction(lat, lon):
    # Slice the NetCDF cube to get atmospheric data at these coords
    point = master_ds.sel(lat=lat, lon=lon, method="nearest").load()
    
    # Extract the 4 implicit variables
    temp = float(point['t2m'].values)
    wind = float(point['ws'].values)
    pblh = float(point['pblh'].values)
    precip = float(point['tp'].values)
    
    # Combine into the 6-feature tensor the model expects
    input_data = torch.tensor([[lat, lon, temp, wind, pblh, precip]], dtype=torch.float32)
    
    with torch.no_grad():
        prediction = model(input_data)
        
    return float(prediction.item()), {"temp": temp, "wind": wind, "pblh": pblh, "precip": precip}