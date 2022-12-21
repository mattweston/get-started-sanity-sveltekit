import sanityClient from '@sanity/client'

const client = sanityClient({
    projectId: 'xthx8esg',
    dataset: 'production',
    apiVersion: '2022-12-21',
    useCdn: false
});
/*
export async function load({ params }) {
    const data = await client.fetch(`*[_type == "pet"]`);

    if (data) {
        return {
            pets: data
        };
    }
    return {
        status: 500,
        body: new Error("Internal Server Error")
    };
}*/