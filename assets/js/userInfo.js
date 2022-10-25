'use strict'

const user = localStorage.getItem('user')

// Import das funções
import { getUserInfo, getUserInfoRepos } from "./fetchUserInfo.js"
import { createDiv, createSpan, createImg, createLink } from "./utils/createElements.js"

const userInfoRepos = await getUserInfoRepos(user)
const userInfo = await getUserInfo(user)

const createRepos = (json) => {
    const contentContainer = document.querySelector('.content-container')
    const reposContainer = document.querySelector('.repos-container')

    json.forEach(element => {
        const reposName = createSpan('repos-name', `Repositório: ${element.name}`)
        const reposPrefixo = createSpan('repos-prefixo', `Link do repositório: `)
        const reposLink = createLink('repos-link', `${element.html_url}`, element.html_url)
        const containerLink = createDiv(`container-link`)
        containerLink.appendChild(reposPrefixo)
        containerLink.appendChild(reposLink)
        reposContainer.appendChild(reposName)
        reposContainer.appendChild(containerLink)
        contentContainer.appendChild(reposContainer)
    });
}

createRepos(userInfoRepos)

const createProfile = (json) => {
    
}

// createProfile(userInfo)