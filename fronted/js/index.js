const handleAmount=async(amount)=>{
    console.log(amount)
    let res = await fetch(`http://localhost:8090/product/payment`,{
        method:"POST",
        headers: {"content-type": "application/json"},
        body: JSON.stringify({amount: amount})
        })
    let order = await res.json();
    console.log(order)
    let option={
        key: "rzp_test_aseYwd9Lw0lp7m",
        amount:amount
    }
    let razorplay = new Razorpay(option);
    razorplay.open();
}

const display=(data)=>{
    document.getElementById("box").innerHTML="";
    data.map((ele)=>{
        img = document.createElement("img");
        img.src=ele.image;

        title=document.createElement("h2");
        title.innerHTML=`Title : ${ele.title}`;

        size = document.createElement("h5");
        size.innerHTML=`Size : ${ele.size}`;

        price = document.createElement("h3");
        price.innerHTML=`Ruppes ₹ ${ele.price}`;

        btn = document.createElement("button");
        btn.innerHTML="Buy Now"
        btn.addEventListener("click",()=>handleAmount(ele.price))

        div =document.createElement("div");
        div.append(img,title,size,price,btn);
        document.getElementById("box").append(div)
    })
}

const get=()=>{
    fetch(`http://localhost:8090/product/products`)
    .then((res)=>res.json())
    .then((data)=>{
        console.log(data)
        display(data)
    })
    .catch((err)=>console.log(err))
}
get();