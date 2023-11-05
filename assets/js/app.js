const cl = console.log;

const getli = [...document.querySelectorAll('.tabbar li')];
const tabpanel = [...document.querySelectorAll('.tabpanel')];

const onClickli = eve => {
    getli.forEach(ele => ele.classList.remove('active'));
    eve.target.classList.add('active');
    let getid = eve.target.getAttribute('data-id');
    const alldiv = document.getElementById(getid);
    tabpanel.forEach(eve => eve.classList.remove('active'))
    alldiv.classList.add('active');
}


getli.forEach(eve => eve.addEventListener('click', onClickli))