var user = prompt(
		"You're Hamlet, you're father's been murdered. You have confronted the killer Smittywerbenjagermanjensen, you are facing each other with knifes. Do you choose to STAB, THROW, TALK")
		.toUpperCase();
switch (user) {
	case 'STAB':
		var speed = prompt("Are you fast?");
		var power = prompt("Are you strong?");
		var skill = prompt("Do you have experience with handling knifes?");
		if (speed && !power && skill) {
			console.log("You jump for a quick slice, Smitty attempts to dodge, you anticpated it and the knife punctures his rib cage.");
		} else if (speed && power && !skill) {
			console
					.log("Smitty lunges, the dagger hits your stomach, you wince. After a quick moment to regain stength you grab his hand, yank him towards you plunging your weapon into his sternum.");
		} else if (!speed && power && skill) {
			console
					.log("Smitty observes how slow you are, he makes a move, in a few seconds you've already pinned him. Your skill and power overcome his speed.");
		} else if (!speed && !power && skill) {
			console
					.log("");
		} else if (speed && power && skill) {
			console
					.log("Try again tough guy, no one is all three.");
		} else if (speed && !power && !skill) {
			console
					.log("");
		} else if (!speed && !power && !skill) {
			console
					.log("");
		} else {
			console
					.log("");
		}
	
		break;

case 'THROW':

	var experience = prompt("");

	var power2 = prompt("");

	var personality = prompt("");

	var intellect = prompt("");

	var reason = prompt("");

	var fitness = prompt("");

	var friends = prompt("");

	if (intellect || !intellect) {

		console
				.log("");

	}

case 'TALK':

	var news = prompt("");

	var knowledge = prompt("");

	var intellect = prompt("");

	if (news && knowledge && intellect) {

		console
				.log("");

	}

	else if (!news && knowledge && intellect) {

		console
				.log("");

	}

	else if (news && knowledge && !intellect) {

		console
				.log("");

	}

	else if (news && !knowledge && intellect) {

		console
				.log("");

	}

	else if (news && !knowledge && !intellect) {

		console
				.log("");

	}

	else if (!news && !knowledge && !intellect) {

		console
				.log("");

	}

	else if (!news && !knowledge && intellect) {

		console
				.log("");

	}

	else {

		console
				.log("");

	

	}

	break;

default:

	console
			.log("");

}


