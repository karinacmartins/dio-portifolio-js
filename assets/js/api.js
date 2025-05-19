async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/karinacmartins/dio-portifolio-js/refs/heads/initial/assets/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}