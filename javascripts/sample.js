function clickBtn() {
    const button = document.getElementById("btn");
    const parent = document.getElementById("parent");
    button.onclick = function() {
      console.log("buttonがクリックされました")
    };
    parent.onclick = function() {
      alert("parentがクリックされました")
      console.log("parentがクリックされました")
    };
  }
  window.onload = clickBtn;