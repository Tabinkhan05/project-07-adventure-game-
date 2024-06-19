import inquirer from "inquirer";
//game variable
let enemies = ["vampire", "zombie", "qladiators", "assasin"];
let max_enemy_health = 75;
let enemy_attack_damage = 25;
//player variable
let hero_health = 100;
let attack_damage_to_enemy = 50;
let number_healing = 3;
let health_healing_amount = 30;
let health_healing_drop_chance = 50;
let game_running = true;
console.log("welcome to deadzone");
game: while (game_running) {
    let enemy_health = Math.floor(Math.random() * max_enemy_health + 1);
    let enemy_index = Math.floor(Math.random() * enemies.length);
    let enemy = enemies[enemy_index];
    console.log(`# ${enemy} has appeared #  \n`);
    while (enemy_health > 0) {
        console.log(`your health ${hero_health}`);
        console.log(`${enemy} health : ${enemy_health}`);
        let options = await inquirer.prompt([{
                name: "answer",
                type: "list",
                message: "what would you like to do?",
                choices: ["1.attack", "2.take health healing", "3.escape"]
            }]);
        if (options.answer == "1.attack") {
            let attack_damage_to_enemy = 50;
            let damage_to_hero = Math.floor(Math.random() * enemy_attack_damage);
            enemy_health -= attack_damage_to_enemy;
            hero_health -= damage_to_hero;
            console.log(`you strike ${enemy} for ${attack_damage_to_enemy}`);
            console.log(`${enemy} strike you for ${damage_to_hero} damage.`);
            if (hero_health < 1) {
                console.log("you have taken too much damage. you are too weak to continue");
                break;
            }
        }
        else if (options.answer == "2. take health healing") {
            if (number_healing > 0) {
                hero_health += health_healing_amount;
                number_healing--;
                console.log(`you used healing for ${health_healing_amount}`);
                console.log(`you now have ${hero_health} health`);
                console.log(`you have ${number_healing} healing left`);
            }
            else {
                console.log(`you have no health healing left. defeat enemy for a chance get health healing `);
            }
        }
        else if (options.answer == "3.escape") {
            console.log(`you run away from ${enemy}`);
            continue game;
        }
    }
    if (hero_health < 1) {
        console.log(`you are out from battle`);
        break;
    }
    console.log(`${enemy} was defeated`);
    console.log(`you have ${hero_health} health`);
    let random_number = Math.floor(Math.random() * 100 + 1);
    if (random_number < health_healing_drop_chance) {
        number_healing++;
        console.log(`enemy gave you healing`);
        console.log(`your health is ${hero_health}`);
        console.log(`your health is ${number_healing}`);
    }
    let useroption = await inquirer.prompt([{
            name: "answer",
            type: "list",
            message: "what would you like to do now",
            choices: ["1.continue", "2.exit"]
        }]);
    if (useroption.answer == "1.continue") {
        console.log("you are continued for your adventure ");
    }
    else {
        console.log("you succesfully ext from deadzone");
        break;
    }
    console.log("thank you for playing.  \n");
}
