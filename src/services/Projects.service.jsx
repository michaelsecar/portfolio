
export const getProjects = async () => {
    const response = await fetch('/projects.json')
    return await response.json()
}