import { createAsyncThunk } from "@reduxjs/toolkit";
import { ReservationType } from "../../types";
// import { ClientTypeType } from "../../types";
import axios from "axios";
import { apiUrls } from "../../utils/api";

export const getAllReservations = createAsyncThunk('Reservation/getall', async () => {
    let datas: ReservationType[] = []
    console.log('Fetching all reservations...');
    

    
    await axios.get(apiUrls('/reservation'))
        .then(response => {
            datas = response.data
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des données:', error);
        });
    return datas
});