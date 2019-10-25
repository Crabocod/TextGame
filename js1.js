var race = decodeURIComponent(location.search.substr(1)).split('&');
race.splice(0, 1);
var result = race[0];
if (result == "mage" || result == "war") {
	var race = result;
}
var baff;
var hmstan;
var lvl = document.getElementById("lvl");
var heal = document.getElementById("heal");
var mheal = document.getElementById("mheal");
var exp = 0;
var move = document.getElementById("move");
var shield = false;
var pic1 = document.getElementById("pic1");
alert("На каждого монстра у вас всего 7 ходов!");
var pic = document.getElementById("pic");
var pic2 = document.getElementById("pic2");
var opp = document.getElementById("opp");

var ninfo = decodeURIComponent(location.search.substr(1)).split('&');
ninfo.splice(0, 1);
var a = ninfo[0];
var lvl1 = ninfo[1];
var ninfo = ninfo[2];
if (ninfo != undefined) {
	var race = ninfo;
}
console.log(a+lvl1+ninfo);
lvl.innerHTML = (ninfo == undefined) ? +lvl.innerHTML : lvl1;
if(+lvl.innerHTML == 2){
	heal.innerHTML = 15;
}
else if(+lvl.innerHTML == 3){
	heal.innerHTML = +heal.innerHTML + 5;
}
if (+lvl.innerHTML == 1) {
	mheal.innerHTML = rand(4,6)
}
else if(+lvl.innerHTML == 2){
	mheal.innerHTML = rand(9,12);
}
else if(+lvl.innerHTML == 3){
	mheal.innerHTML = rand(10,14);
}

if (race == "mage" && a == 1) {
	opp.insertAdjacentHTML('beforeEnd','<input type="button" value="Заморозить" class="do" onclick="froze()"><br>');
}
else if(race == "mage" && a == 2){
	heal.innerHTML = +heal.innerHTML + 5;
}
else if(race == "mage" && a == 3){
	baff = 5;
}
else if(race == "war" && a == 1){
	opp.insertAdjacentHTML('beforeEnd','<input type="button" value="Удар щитом" class="do" onclick="shieldAttack()"><br>');
}
else if(race == "war" && a == 2){
	heal.innerHTML = +heal.innerHTML + 7;
}
else if(race == "war" && a == 3){
	baff = 4;
}

if (pic2) {
	pic2.style.background = "url(img/war.jpg) no-repeat top center / cover";
}
else{
	pic1.style.background = "url(img/mage.jpg) no-repeat top center / cover";
}
pic.style.background = "url(img/" + rand(1,12) + ".jpg) no-repeat top center / cover";

function healing(){
	if (+lvl.innerHTML == 1) {
	var hwheal = rand(0,3);

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
	var hwheal = rand(3,5);

	move.innerHTML = +move.innerHTML - 1;

	alert("Вы восстановили здоровье на " + hwheal + " единиц!");
	heal.innerHTML = +heal.innerHTML + hwheal;
	if (+heal.innerHTML > 20) {
		heal.innerHTML = 20;
	}
	}
	if (+move.innerHTML == 0) {
		alert("Ходы закнчились!");

	document.location.href = "index.html";

	}
}

function shieldActive(){
	alert("Вы подняли щит!");
	move.innerHTML = +move.innerHTML - 1;
	shield = true;
	if (+move.innerHTML == 0) {
		alert("Ходы закнчились!");

			document.location.href = "index.html";

	}
}

function rand(min,max){
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function froze() {
	hmstan = rand(1,2);
	if (hmstan == 1) {
	alert("Вы заморозили монстра на 1 ход");
	}
	else{
		alert("Вы заморозили монстра на 2 хода");
	}
	move.innerHTML = +move.innerHTML - 1;
	if (+move.innerHTML == 0) {
		alert("Ходы закнчились!");

			document.location.href = "index.html";
	}
}
function shieldAttack() {
	hmstan = 2;
	alert("Вы оглушили монстра на 2 хода");
	move.innerHTML = +move.innerHTML - 1;
	if (+move.innerHTML == 0) {
		alert("Ходы закнчились!");

			document.location.href = "index.html";

	}
}



function attack(){
	if (+lvl.innerHTML == 1) {
		var damage = rand(0,3);
		var damage1 = rand(0,2);
	}
	else if(+lvl.innerHTML == 2){
		if (baff) {
			var damage = rand(1,4+baff);
			var damage1 = rand(2,4);
		}
		else{
		var damage = rand(1,4);
		var damage1 = rand(2,3);
		}
	}
	else if(+lvl.innerHTML == 3){
		var damage = rand(2,6);
		var damage1 = rand(2,5);
	}

		move.innerHTML = +move.innerHTML - 1;

		alert("Вы нанесли монстру " + damage + " урона!");
		mheal.innerHTML = +mheal.innerHTML - damage;

		if (+mheal.innerHTML > 0 && !shield && !hmstan) {
			alert("Монстр бьет в ответ и наносит вам " + damage1 + " урона");
			heal.innerHTML = +heal.innerHTML - damage1;
		}
		if (hmstan) {
			alert("Монстр оглушен и не наносит вам урона");
			hmstan--;
		}
		else if (shield) {
			alert("Щит заблокировал весь урон!");
			shield = false;
		}


		if (+mheal.innerHTML <= 0) {
			move.innerHTML = 7;

			if (+lvl.innerHTML == 1) {
				var hwmheal = rand(4,6);
			}
			else if(+lvl.innerHTML == 2){
				var hwmheal = rand(9,12);
			}
			else if(+lvl.innerHTML == 3){
				var hwmheal = rand(10,14);
			}

			alert("Монстр убит, поздравляю!");
			pic.style.background = "url(img/" + rand(1,9) + ".jpg) no-repeat top center / cover";
			exp++;
			if (+lvl.innerHTML == 1 && exp == 3 || +lvl.innerHTML == 2 && exp == 4 || +lvl.innerHTML == 3 && exp == 5) {
				alert("Ваш уровень повышен!");
				lvl.innerHTML = +lvl.innerHTML + 1;
				exp = 0;
				window.open('newlvl.html?&' +race+"&"+ +lvl.innerHTML);
				window.close();

			}
			else{
				if (+lvl.innerHTML == 1) {
					alert("Получено '1 exp', до нового уровня: " + exp + "/3");
				}
				else if(+lvl.innerHTML == 2){
					alert("Получено '1 exp', до нового уровня: " + exp + "/4");
				}
				else if(+lvl.innerHTML == 3){
					alert("Получено '1 exp', до нового уровня: " + exp + "/5");
				}
			}
			alert("И вот пред вами новый монстр!");
			mheal.innerHTML = hwmheal;
		}
			if (+heal.innerHTML <= 0 ) {
			alert("Вы погибли в сражении!");
			document.location.href = "index.html";
			}
	if (+move.innerHTML == 0) {
		alert("Ходы закнчились!");
			document.location.href = "index.html";
		
	}
	}
