import { createAsyncThunk } from "@reduxjs/toolkit";
import { PaiementType } from "../../types";
import api, { apiUrls } from "../../utils/api";

export const getAllPaiements = createAsyncThunk('Paiement/getall', async () => {
    let datas: PaiementType[] = []
    
    await api.get(apiUrls('api/paiement'))
        .then(response => {
            datas = response.data
        })
        .catch(error => {
            console.error('Erreur lors de la récupération des données:', error);
        });
    return datas
});