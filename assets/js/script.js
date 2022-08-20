import {Api} from "./api.js"
const searchResults = document.querySelector(".search__results")
const searchError = document.querySelector(".search__results--container")
const inputSearch = document.querySelector(".search__header--form")
const resultCep = document.getElementById("search__results--cep")
const resultLog = document.getElementById("search__results--logradouro")
const resultBairro = document.getElementById("search__results--bairro")
const resultCidade = document.getElementById("search__results--localidade")
const resultEstado = document.getElementById("search__results--uf")

inputSearch.addEventListener("submit", async (event) => {
    event.preventDefault()
    const inputUser = event.target[0].value
    const inputFilter = inputUser.replace('-', '').trim()
    const searchInApi = await Api.cep(inputFilter)
    if (inputFilter.length !== 8 || searchInApi.erro) {
        searchResults.style.display = "none"
        searchError.style.display = "flex"
    } else {
        searchResults.style.display = "flex"
        searchError.style.display = "none"
        let {cep,logradouro,bairro,localidade,uf} = searchInApi
        resultCep.innerText = cep
        resultLog.innerText = logradouro
        resultBairro.innerText = bairro
        resultCidade.innerText = localidade
        resultEstado.innerText = uf
    }
})