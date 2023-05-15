function query(selector: string) {
    return document.querySelector(selector) as HTMLElement
}

export function populateUI(profile: any) {
    query('#displayName').innerText = profile.display_name

    if(profile.images[0]){
        const profileImage = new Image(200,200)
        profileImage.src = profile.images[0].url
        query('#avatar').appendChild(profileImage)
    }

    query('#id').innerText = profile.id
    query('#email').innerText = profile.email
    query('#uri').innerText = profile.uri
    query('#uri').setAttribute('href',profile.external_urls.spotify)
    query('#url').innerText = profile.href
    query('#url').setAttribute('href', profile.href)
    query('#imgUrl').innerText = profile.images[0]?.url ?? '(sem imagem de perfil)'
}