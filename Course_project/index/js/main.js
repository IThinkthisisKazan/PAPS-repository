document.querySelector('.button_search').onclick = myClick();

function myClick() {
    alert("main");
    let a = document.querySelector('.depart_town').value;
    let b = document.querySelector('.arrival_town').value;
    let c = document.querySelector('.dates_depart').value;
    let d = document.querySelector('.dates_arrival').value;
    let e = document.querySelector('.number_of_pass').value;
    let f = document.querySelector('.status_value').value
    if(a != null && b != null )
    {
        console.log(a+"\n", b+"\n", c+"\n", d+"\n", e+"\n"+f+"\n");
        myfunction1();
    }
    else
    {
        console.log(departTown, arrivalTown);
        alert("Enter all");
    }
}

function myfunction1() {
    var i;
    var cars = ["Saab", "Volvo", "BMW"];
    for (i = 0; i < cars.length; i = i + 1) {
      var y = cars[i];
      var mycar = cars[i];
      var li = document.createElement('li');
      var a = document.createElement('a');
      a.innerHTML = y;
      a.onclick = function() {
        showcar(mycar);
      }
      li.appendChild(a);
      document.getElementById("allcars").appendChild(li);
    }
  }
  
  function showcar(car) {
    document.getElementById("demo").innerHTML = car;
  }