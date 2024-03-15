function sleep(time) {
    return new Promise(resolve => setTimeout(resolve, time));
}

let jobs = ["Web Developer", "Full-stack developer"]

async function x(){
    while (true){
        for (let job of jobs){
            for (let i=0; i<=job.length; i++){
                document.getElementById('jobs').innerText = job.slice(0, i)
                await sleep(200)
            }
            for (let i=job.length; i>=0; i--){
                document.getElementById('jobs').innerText = job.slice(0, i)
                await sleep(200)
            }
        }
    }
}
x()