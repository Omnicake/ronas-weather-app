import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import weatherAPI from "../api/weather";

interface WindInfo {
    speed: number,
    deg: number
}

export interface WeatherState {
    info: {
        temp?: number // In kalvin
        description?: string,
        wind?: WindInfo,
        pressure?: number, // In hPa
        humidity?: number, // In percentage
        rainChance?: number,
        icon?: string
    },
    status: "idle" | "loading" | "succeed" | "rejected",
    error?: string
}

export const fetchWeatherData = createAsyncThunk('weatherInfo/fetchWeatherData', async (city: string, {rejectWithValue}) => {
    try {
        return await weatherAPI.getWeatherInfo(city)
    } catch (err) {
        return rejectWithValue('Loading Error');
    }
});


const initialState: WeatherState = {
    info: {
        temp: undefined,
        description: undefined,
        wind: undefined,
        pressure: undefined,
        humidity: undefined,
        rainChance: undefined,
        icon: undefined
    },
    status: "idle"
};

export const weatherSlice = createSlice({
    name: 'weatherInfo',
    initialState,
    reducers: {
        setError: (state, action: PayloadAction<string>) => {
          state.error = action.payload;
        }
    },
    extraReducers: builder => {
        builder.addCase(fetchWeatherData.pending, (state) => {
            state.status = "loading";
            state.error = undefined;
        }).addCase(fetchWeatherData.fulfilled, (state, action) => {
            const {main, weather, wind, clouds} = action.payload;
            const currentWeather = weather[0];
            const {description, icon} = currentWeather;
            const {temp, pressure, humidity} = main;

            state.info.temp = temp;
            state.info.description = description;
            state.info.wind = wind;
            state.info.pressure = pressure;
            state.info.humidity = humidity;
            state.info.rainChance = clouds.all;
            state.info.icon = icon;

            state.status = "idle"
        }).addCase(fetchWeatherData.rejected, (state) => {
            state.status = "rejected";
            state.error = "Ошибка загрузки";

            state.info.temp = undefined;
            state.info.description = undefined;
            state.info.wind = undefined;
            state.info.pressure = undefined;
            state.info.humidity = undefined;
            state.info.rainChance = undefined;
            state.info.icon = undefined;
        });
    }
});

export const {setError} = weatherSlice.actions;

export default weatherSlice.reducer;
