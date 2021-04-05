//datayı browser de tablo halinde göstermek

function Table(event) {
    let newArray=null;
    event.map(eleman =>{
        return newArray = Object.keys(eleman)
    })
    document.querySelector("#thead").innerHTML += `<tr>
        ${newArray.map((item) =>{
            return `<th scope="col">${item}</th>`
        }).join("")}
        </tr>`

        event.map(eleman =>{
            return document.querySelector("#products").innerHTML += `
            <tr>
            ${newArray.map((item, i) =>{
                return `<td>${eleman[newArray[i]]}</td>`
            }).join("")}
            </tr>
            `
         })
        //yeni bir data yüklemek için sayfanın yenilenmesine ihtiyaç var. Geri dön button una tıklandığında sayfa yenileniyor.
      
        document.querySelector(".input").innerHTML = 
        `<button type="button">Yeni Excel Yüklemek için Geri Dön</button>`
       
        document.querySelector('button').addEventListener("click",
        
        function refreshPage(){ 
        window.location.reload();
    })
}

export default Table;


/* bu kodu çalışmadı sebebini öğrenmek için silmiyorum

function refreshPage(){ 
    window.location.reload(); 
    console.log("tıklandım")
}

document.querySelector(".input").innerHTML = 
`<button type="button" onClick=${refreshPage}>Yeni Excel Yüklemek için Geri Dön</button>`
*/