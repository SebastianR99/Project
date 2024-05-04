onload = () => {
    document.body.classList.remove("container");
    //setTimeout(document.body.classList.remove("container"), 5000);
};

setTimeout(function () {
    document.body.classList.add('container');
    // Local
    //location.href = '/home.html'
    // Production
    location.href = './home.html'
}, 10000);