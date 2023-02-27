let timer=10;
let time = document.getElementById('display');
    time.style.margin= "auto";
    time.style.textAlign = "center";
    time.style.maxWidth ="400px"
        setTimeout(() => {
            time.innerHTML = timer--;
            setTimeout(() =>{
                time.innerHTML = timer--;
                setTimeout(() =>{
                    time.innerHTML = timer--;
                    setTimeout(() =>{
                        time.innerHTML = timer--;
                        setTimeout(() =>{
                            time.innerHTML = timer--;
                            setTimeout(() =>{
                                time.innerHTML = timer--;
                                setTimeout(() =>{
                                    time.innerHTML = timer--;
                                    setTimeout(() =>{
                                        time.innerHTML = timer--;
                                        setTimeout(() =>{
                                           time.innerHTML = timer--;
                                            setTimeout(() =>{
                                                 time.innerHTML = timer--;
                                                setTimeout(() =>{
                                                    time.style.fontSize = "46px";
                                                    time.style.maxWidth = "310px";
                                                    time.innerHTML = "Happy Independence Day"
                                                    
                                                },1000)
                                            },1000)
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)     
                },1000)
            },1000)
        }, 1000);