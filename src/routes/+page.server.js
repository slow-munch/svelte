/** @type {import('./$types').PageServerLoad} */

export async function load({ fetch, cookies }) {
    const jwtToken = cookies.get("token");
    const res = await fetch('http://localhost:8080/users/me', {
        method: 'GET',
        headers: {
            Authorization: `Bearer ${jwtToken}`,
            'Content-Type': 'application/json',
        },
    });

    const data = await res.json();
    return {
        props: {
            data: data
        }
    };
}