const ad = document.getElementById("ad"),
    vetendas = document.getElementById("vetendas"),
    tarix = document.getElementById("tarix"),
    unvan = document.getElementById("unvan"),
    email = document.getElementById("email"),
    button = document.getElementById("button")
let r = []
button.addEventListener("click", (q)=>{
    q.preventDefault()
    const all = {
        isim: ad.value,
        vetendas: vetendas.value,
        tarix: tarix.value,
        unvan: unvan.value,
        email: email.value
    }
    r.push(all)
    console.log(r)
})