window.onload = func;
function func() {
  var btn = document.getElementById("next");
  var btn_back = document.getElementById("back");
  var li_near = document.getElementById("near_btn");
  var x = 1;
  btn.onclick = func_next;
  btn_back.onclick = func_back;

  for (let i = 0; i < document.getElementsByTagName('p').length; i++) {
    let p = document.getElementsByTagName('p')[i];
    if (i == 2 || i == 3 || i == 0 || i == 4 || i == 1) {
      continue;
    }
    else {
      p.style.display = "none";
    }

  }

  function func_next() {

    for (let i = 0; i < document.getElementsByTagName('p').length; i++) {
      let p = document.getElementsByTagName('p')[i];
      p.style.display = "none";
    }

    let k = 0, m = 0, n = 5;
    x = x + 1;
    k = n * x;
    m = k - 5;

    let pp = document.getElementsByTagName('p').length;

    console.log(`всего - ${pp}, конец - ${k}`);
    if (pp < k) {
      btn.style.display = 'none';
      li_near.style.display = 'none';
    }
    else {
      btn.style.display = 'inline';
      li_near.style.display = 'inline';
    }


    for (i = m; i < k; i++) {
      let p = document.getElementsByTagName('p')[i];

      if (p != null) {
        p.style.display = "block";
        continue;
      }
      else {
        continue;
      }
    }
  }



  function func_back() {

    for (let i = 0; i < document.getElementsByTagName('p').length; i++) {
      let p = document.getElementsByTagName('p')[i];
      p.style.display = "none";
    }

    let k = 0, m = 0, n = 5;
    x = x - 1;
    if (x <= 1) {
      x = 1;
    }
    k = n * x;
    m = k - 5;
    console.log(`начало - ${m}, конец - ${k}`);


    for (i = k - 1; i >= m; i--) {
      console.log(i);
      let p = document.getElementsByTagName('p')[i];
      if (p == null) {
        console.log("Fuck!");
        continue;
      }
      if (p != null) {
        p.style.display = "block";
        console.log('Ok it is will be block');
        btn.style.display = 'inline';
        li_near.style.display = 'inline';
        li_near.style.width = '15em';
      }
      else p.style.display = "none";



    }

  }

}