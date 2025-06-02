export const myApplicationsPromise = (email, accessToken) => {
    return fetch(`https://career-job-server.vercel.app/applications?email=${email}`, {
        credentials: 'include',
        headers: {
            authorization: `Bearer ${accessToken}`
        }
    }).then(res => res.json());
}