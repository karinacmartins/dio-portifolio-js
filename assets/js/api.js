async function fetchProfileData() {
    const url = '/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}