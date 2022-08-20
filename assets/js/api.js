export class Api {
    static async cep(cep) {
        const url = `https://viacep.com.br/ws/${cep}/json`
        const options = {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        }
        const dataSearch = await fetch(url, options)
            .then(resp => resp.json())
            .then(resp => resp)
            .catch(error => error)
        return dataSearch
    }
}