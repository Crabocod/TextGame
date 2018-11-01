var lvl = document.getElementById("lvl");
var heal = document.getElementById("heal");
var mheal = document.getElementById("mheal");
var exp = 0;
var move = document.getElementById("move");
var shield = false;
alert("На каждого монстра у вас всего 7 ходов!");

function attack(){
	if (+lvl.innerHTML == 1) {
		var damage = rand(0,3);
		var damage1 = rand(0,2);

		move.innerHTML = +move.innerHTML - 1;

		alert("Вы нанесли монстру " + damage + " урона!");
		mheal.innerHTML = +mheal.innerHTML - damage;

		if (+mheal.innerHTML > 0 && !shield) {
			alert("Монстр бьет в ответ и наносит вам " + damage1 + " урона");
			heal.innerHTML = +heal.innerHTML - damage1;
		}
		if (shield) {
			alert("Щит заблокировал весь урон!");
			shield = false;
		}

		if (+mheal.innerHTML <= 0) {
			move.innerHTML = 7;
			var hwmheal = rand(4,6);
			alert("Монстр убит, поздравляю!");
			exp++
			if (exp == 3) {
				alert("Ваш уровень повышен!");
				lvl.innerHTML = +lvl.innerHTML + 1;
				exp = 0;
				heal.innerHTML = 15;
				console.log(lvl.innerHTML);
			}
			else{
				alert("Получено '1 exp', до нового уровня: " + exp + "/3")
			}
			alert("И вот пред вами новый монстр!");
			mheal.innerHTML = hwmheal;
		}
	}
	else if (+lvl.innerHTML == 2) {
		var damage = rand(1,4);
		var damage1 = rand(1,3);

		

		move.innerHTML = +move.innerHTML - 1;

		alert("Вы нанесли монстру " + damage + " урона!");
		mheal.innerHTML = +mheal.innerHTML - damage;

		if (+mheal.innerHTML > 0 && !shield) {
			alert("Монстр бьет в ответ и наносит вам " + damage1 + " урона");
			heal.innerHTML = +heal.innerHTML - damage1;
		}
		if (shield) {
			alert("Щит заблокировал весь урон!");
			shield = false;
		}

		if (+mheal.innerHTML <= 0) {
			move.innerHTML = 7;
			var hwmheal = rand(7,8);
			alert("Монстр убит, поздравляю!");
			exp++
			if (exp == 4) {
				alert("Ваш уровень повышен!");
				lvl.innerHTML = +lvl.innerHTML + 1;
				exp = 0;
				heal.innerHTML = 20;
				console.log(lvl.innerHTML);
			}
			else{
				alert("Получено '1 exp', до нового уровня: " + exp + "/4")
			}
			alert("И вот пред вами новый монстр!");
			mheal.innerHTML = hwmheal;
	}
}
	else if (+lvl.innerHTML == 3) {
		var damage = rand(3,7);
		var damage1 = rand(2,5);

		

		move.innerHTML = +move.innerHTML - 1;

		alert("Вы нанесли монстру " + damage + " урона!");
		mheal.innerHTML = +mheal.innerHTML - damage;

		if (+mheal.innerHTML > 0 && !shield) {
			alert("Монстр бьет в ответ и наносит вам " + damage1 + " урона");
			heal.innerHTML = +heal.innerHTML - damage1;
		}
		if (shield) {
			alert("Щит заблокировал весь урон!");
			shield = false;
		}

		if (+mheal.innerHTML <= 0) {
			move.innerHTML = 7;
			var hwmheal = rand(8,12);
			alert("Монстр убит, поздравляю!");
			exp++
			if (exp == 5) {
				alert("Ваш уровень повышен!");
				lvl.innerHTML = +lvl.innerHTML + 1;
				exp = 0;
				console.log(lvl.innerHTML);
			}
			else{
				alert("Получено '1 exp', до нового уровня: " + exp + "/5")
			}
			alert("И вот пред вами новый монстр!");
			mheal.innerHTML = hwmheal;
	}
}
	if (+heal.innerHTML <= 0 ) {
		alert("Вы погибли в сражении!");
		var death = confirm("Начать заново за мага?");
		if (death) {
			location.reload()
		}
		else{
			document.location.href = "index.html";
		}
	}
	if (+move.innerHTML == 0) {
		alert("Ходы закнчились!");
		var death = confirm("Начать заново за мага?");
		if (death) {
			location.reload()
		}
		else{
			document.location.href = "index.html";
		}
	}

}

function healing(){
	if (+lvl.innerHTML == 1) {
	var hwheal = rand(1,3);

	move.innerHTML = +move.innerHTML - 1;

	alert("Вы восстановили здоровье на " + hwheal + " единиц!");
	heal.innerHTML = +heal.innerHTML + hwheal;
	if (+heal.innerHTML > 10) {
		heal.innerHTML = 10;
	}
	}
	else if (+lvl.innerHTML == 2) {
	var hwheal = rand(2,4);

	move.innerHTML = +move.innerHTML - 1;

	alert("Вы восстановили здоровье на " + hwheal + " единиц!");
	heal.innerHTML = +heal.innerHTML + hwheal;
	if (+heal.innerHTML > 15) {
		heal.innerHTML = 15;
	}
	}
	else if (+lvl.innerHTML == 3) {
	var hwheal = rand(4,6);

	move.innerHTML = +move.innerHTML - 1;

	alert("Вы восстановили здоровье на " + hwheal + " единиц!");
	heal.innerHTML = +heal.innerHTML + hwheal;
	if (+heal.innerHTML > 20) {
		heal.innerHTML = 20;
	}
	}
	if (+move.innerHTML == 0) {
		alert("Ходы закнчились!");
		var death = confirm("Начать заново за мага?");
		if (death) {
			location.reload()
		}
		else{
			document.location.href = "index.html";
		}
	}
}

function shieldActive(){
	alert("Вы подняли щит!");
	move.innerHTML = +move.innerHTML - 1;
	shield = true;
	if (+move.innerHTML == 0) {
		alert("Ходы закнчились!");
		var death = confirm("Начать заново за воина?");
		if (death) {
			location.reload()
		}
		else{
			document.location.href = "index.html";
		}
	}
}

function rand(min,max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}