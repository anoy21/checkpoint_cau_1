let menu = ["rau xào", "thịt luộc", "gà rán"];
localStorage.setItem("menu", JSON.stringify(menu));
  
  function displayMenu() {
    const menu = JSON.parse(localStorage.getItem("menu"));
  
    if (menu.length > 0) {
      const menuList = menu.join("\n");
      alert(`Danh sách món ăn:\n${menuList}`);
    } else {
      alert("Danh sách món ăn trống.");
    }
  }
  
  function processAction() {
    const actionInput = prompt("Chon Hanh Dong (C, R, U, D)");
    const action = actionInput ? actionInput.toUpperCase() : '';
  
    if (action === "C") {
      const newFood = prompt("Nhap Mon An Moi");
      if (newFood) {
        const menu = JSON.parse(localStorage.getItem("menu"));
        menu.push(newFood);
        localStorage.setItem("menu", JSON.stringify(menu));
      }
    } else if (action === "R") {
      displayMenu();
    } else if (action === "U") {
        const updateFood = prompt("Nhap Mon An Muon Update")
        const menu = JSON.parse(localStorage.getItem("menu"));
        const index = menu.indexOf(updateFood);
        if (index !== -1) {
            const updatedFood = prompt("Nhap ten mon an moi");
        menu[index] = updatedFood;
        localStorage.setItem("menu", JSON.stringify(menu));
        displayMenu();
        } else {
            alert("mon an nay ko ton tai")
        }
    } else if (action === "D") {
        const foodToDelete = prompt("Mời người dùng nhập món ăn muốn xóa khỏi menu");
        if (foodToDelete) {
          const menu = JSON.parse(localStorage.getItem("menu"));
          const index = menu.indexOf(foodToDelete);
          if (index !== -1) {
            menu.splice(index, 1);
            localStorage.setItem("menu", JSON.stringify(menu));
            displayMenu();
          } else {
            alert("mon an nay ko ton tai");
          }
        }
      } else {
        alert("error");
      }
    }
    

