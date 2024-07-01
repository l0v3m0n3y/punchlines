class punchlines{
    constructor(){
        this.api = "https://punchlines.ai/api"
        this.headers={"user-agent": "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Ubuntu Chromium/73.0.3683.86 Chrome/73.0.3683.86 Safari/537.36","Host":"punchlines.ai","Origin":"https://punchlines.ai","Referer":"https://punchlines.ai/","Content-Type":"application/json","cookie":""}
    }
    async get_punchline(prompt){
        let req=await fetch(`${this.api}/generate-punchlines`,{method:"POST",headers: this.headers,body:JSON.stringify({"prompt":`${prompt}`})});
        return req.json();
    }
}
module.exports = {punchlines};