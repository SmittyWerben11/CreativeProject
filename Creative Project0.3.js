var user = prompt(
		"You're Hamlet, you're father's been murdered. You have confronted the killer Smittywerbenjagermanjensen, you are facing each other with knives. Do you choose to STAB or TALK")
		.toUpperCase();
switch (user) {
case 'STAB':
	var speed = prompt("Are you fast?");
	var power = prompt("Are you strong?");
	var skill = prompt("Do you have experience with handling knifes?");
	if (speed && !power && skill) {
		prompt("You jump for a quick slice, Smitty attempts to dodge, you anticpated it and the knife punctures his rib cage.");
	} else if (speed && power && !skill) {
		prompt("Smitty lunges, the dagger hits your stomach, you wince. After a quick moment to regain stength you grab his hand, yank him towards you plunging your weapon into his sternum.");
	} else if (!speed && power && skill) {
		prompt("Smitty observes how slow you are, he makes a move, in a few seconds you've already pinned him. Your skill and power overcome his speed.");
	} else if (!speed && !power && skill) {
		prompt("Skillfull, but lacking in Power and Speed, he overpowers you and your vision fades to black.");
	} else if (speed && power && skill) {
		prompt("Try again tough guy, no one is all three.");
	} else if (speed && !power && !skill) {
		prompt("Fast, but lacking in Power and Skill, you can run, but you can't hide. You lose.");
	} else if (!speed && !power && !skill) {
		prompt("Did you really think that would work...");
	} else {
		prompt("You died.");
	}

	break;


/*case 'THROW':

	var Arc = prompt("");
	var Power = prompt("");
	var Experience = prompt("");
	var Prediction = prompt("");


	}

	
	/*
case 'TALK':
	var Lexie = prompt("Are you Lexie?")
	var Seighn = prompt("Are you Seighn?")
	var Ethan = prompt("Are you Ethan?")
	var Jadern = prompt("Are you Jadern?");
	
	if (Jadern) {
		prompt("Jadern: You attempt to insult Smitty by telling him he ain't got nothin' on you, he shrugs and stabs you anyway.");
	}
	
	else if (Lexie) {
		prompt("You tell Smitty you have nerve damage and cannot hold a knife, he shrugs and stabs you anyway.")
	}
	
	else if (Ethan) {
		prompt("You ask if he plays Minecraft, he replies no and stabs you.")
	}


	else if (Seighn){
		prompt("You mutter, Hail Trump, he demands you speak louder, you begin hurling bricks payed for by Mexico")
	}
	
	*/
	
	
case 'TALK':
	var who = prompt("Are you Lexie, Seighn, Ethan, or Jadern?")
	
	if (who == ("Jadern")) {
		prompt("You attempt to insult Smitty by telling him he ain't got nothin' on you, he shrugs and stabs you anyway.");
	}
	
	else if (who == ("Lexie")) {
		prompt("You tell Smitty you have nerve damage and cannot hold a knife, he shrugs and stabs you anyway.")
	}
	
	else if (who == ("Ethan")) {
		prompt("You ask if he plays Minecraft, he replies no and stabs you.")
	}


	else if (who == ("Seighn")){
		prompt("You mutter, Hail Trump, he demands you speak louder, you begin hurling bricks payed for by Mexico")
	}
	
	
	
	
	
	
	break;

default:

	console.log("");

}
