import sanityClient from  '@sanity/client'

export const client = sanityClient({
    projectId: '19jwum7c',
    dataset: 'production',
    apiVersion: '2021-03-25',
    token: 'skt8w0em3dvbz1jWReyzbHW2DQbGVzojgvrDC9Zg9bASlGGuwEcUWnItbGncHFosJvGzJkf37jhp1hMcL8god5iP3IJuMVuCjkPA00cAtkYcWSmyhWfntAf3JvoGuV61DBTbcjwkweWQLShIIb1sEhVr9RhQA4QO5C3oTP2EvHXbK2nXPiYB',
    useCdn: false,
})