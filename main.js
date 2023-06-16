// forEx//////
let ps = document.querySelectorAll('p');
ps.forEach((item) => {
  item.addEventListener('click', function (e) {
    console.log(e.currentTarget);
    e.currentTarget.classList.toggle('par');
  });
});
function dynamic() {
  let dv = document.createElement('div');
  dv.classList.add('par');
  let heading = document.createElement('h1');
  heading.textContent = 'This is a heading';
  dv.appendChild(heading);
  document.body.appendChild(dv);
}
let btn = document.querySelector('.btn');
btn.addEventListener('click', dynamic);
