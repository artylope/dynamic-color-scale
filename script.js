let saturation = [
  0, 2, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 90,
  95, 98, 100,
];

let brightness = [
  0, 2, 0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85,
  90, 95, 98, 100,
];

let display = document.getElementById('display');
let hValue = 240;
saturation.forEach((sValue) => {
  let row = document.createElement('div');
  row.classList.add('row');
  display.appendChild(row);

  brightness.forEach((bValue) => {
    let box = document.createElement('div');
    box.classList.add(`s${sValue}-b${bValue}`);
    box.innerHTML = `<span>h${hValue}</span><span>s${sValue}</span><span>b${bValue}</span>`;
    row.appendChild(box);
  });
});
