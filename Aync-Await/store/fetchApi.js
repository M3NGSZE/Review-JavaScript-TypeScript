
const BASE_URL = "http://localhost:5501/Aync-Await/data/"

export async function getData(endPoint){
    try{
        const res = await fetch(BASE_URL + endPoint + ".json", {
            method: "GET",
            headers: {
                "Authorization": "baisc authorization",
                "Content-Type": "Application/json"
            },
        })
        const data = await res.json()
        return data
    }catch(error){
        console.log(error)
    }
    
}