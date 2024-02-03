import axios from "axios";
import api from "./url";

export async function requisicoes1() {
    try {
        const resultado = await api.get('/forms');
        return resultado.data
    } catch (error) {
        return error
    }
}

export async function requisicoes2() {
    try {
        const resultado = await axios.get('https://viacep.com.br/ws/01001000/json');
        console.log(resultado);
        return 'sucesso'
    } catch (error) {
        return error
    }
}