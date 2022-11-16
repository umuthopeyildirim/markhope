
const createImage = (githubURL) => {
    fetch("https://us-central1-portfolio-umut-yildirim.cloudfunctions.net/screenshot", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer `+process.env.GOOGLE_FUNCTIONS_TOKEN
        },
        body: JSON.stringify({
            name: githubURL,
            url: "https://sites.markhope.ml/"+githubURL,
        })
    })
}

export { createImage }