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
        const reposPrefix = createSpan('repos-prefixo', `Link do repositório: `)
        const reposLink = createLink('repos-link', `${element.html_url}`, element.html_url)
        const linkContainer = createDiv(`container-link`)
        const dataReposContainer = createDiv(`data-repos-container`)
        linkContainer.appendChild(reposPrefix)
        linkContainer.appendChild(reposLink)
        dataReposContainer.appendChild(reposName)
        dataReposContainer.appendChild(linkContainer)
        reposContainer.appendChild(dataReposContainer)
        contentContainer.appendChild(reposContainer)
    });
}

createRepos(userInfoRepos)

const createProfile = (json) => {
    const contentContainer = document.querySelector('.content-container')
    const profileContainer = document.querySelector('.profile-container')
    
    let date = new Date(json.created_at)
    let formatedDate = date.toLocaleDateString()

    const userIcon = createImg('user-icon', json.avatar_url)
    const creationDate = createSpan('creation-date', `Data de criação: ${formatedDate}`)
    const followers = createSpan('user-followers', `Seguidores: ${json.followers}`)
    const following = createSpan('user-following', `Seguindo: ${json.following}`)
    const userData = createDiv('user-data')
    
    profileContainer.appendChild(userIcon)
    userData.appendChild(creationDate)
    userData.appendChild(followers)
    userData.appendChild(following)
    if(json.bio != null) {
        const bio = createSpan('user-bio', `Bio: ${json.bio}`)
        userData.appendChild(bio)
    }
    profileContainer.appendChild(userData)

    contentContainer.appendChild(profileContainer)
}

createProfile(userInfo)