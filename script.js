// const terminal = document.getElementById("terminal");

// document.addEventListener("keydown", () => {
//      terminal.textContent += "Tirth Patel\n";  // or just " " if you don't want new lines
//      terminal.scrollTop = terminal.scrollHeight;
// });

let str = `struct group_info init_groups = { .usage = ATOMIC_INIT(2) };

struct group_info *groups_alloc(int gidsetsize){

	struct group_info *group_info;

	int nblocks;

	int i;



	nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCK;

	/* Make sure we always allocate at least one indirect block pointer */

	nblocks = nblocks ? : 1;

	group_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER);

	if (!group_info)

		return NULL;

	group_info->ngroups = gidsetsize;

	group_info->nblocks = nblocks;

	atomic_set(&group_info->usage, 1);



	if (gidsetsize <= NGROUPS_SMALL)

		group_info->blocks[0] = group_info->small_block;

	else {

		for (i = 0; i < nblocks; i++) {

			gid_t *b;

			b = (void *)__get_free_page(GFP_USER);

			if (!b)

				goto out_undo_partial_alloc;

			group_info->blocks[i] = b;

		}

	}

	return group_info;



out_undo_partial_alloc:

	while (--i >= 0) {

		free_page((unsigned long)group_info->blocks[i]);

	}

	kfree(group_info);

	return NULL;

}



EXPORT_SYMBOL(groups_alloc);



void groups_free(struct group_info *group_info)

{

	if (group_info->blocks[0] != group_info->small_block) {

		int i;

		for (i = 0; i < group_info->nblocks; i++)

			free_page((unsigned long)group_info->blocks[i]);

	}

	kfree(group_info);

}



EXPORT_SYMBOL(groups_free);



/* export the group_info to a user-space array */

static int groups_to_user(gid_t __user *grouplist,

			  const struct group_info *group_info)

{

	int i;

	unsigned int count = group_info->ngroups;



	for (i = 0; i < group_info->nblocks; i++) {

		unsigned int cp_count = min(NGROUPS_PER_BLOCK, count);

		unsigned int len = cp_count * sizeof(*grouplist);



		if (copy_to_user(grouplist, group_info->blocks[i], len))

			return -EFAULT;



		grouplist += NGROUPS_PER_BLOCK;

		count -= cp_count;

	}

	return 0;

}



/* fill a group_info from a user-space array - it must be allocated already */

s|`;

const mainStr = ["struct group_info init_groups = { .usage = ATOMIC_INIT(2) };\n", "struct group_info *groups_alloc(int gidsetsize){\n", "struct group_info *group_info;\n", "int nblocks;\n", "int i;", "nblocks = (gidsetsize + NGROUPS_PER_BLOCK - 1) / NGROUPS_PER_BLOCK;"
	, "/* Make sure we always allocate at least one indirect block pointer */",
	`
	nblocks = nblocks ? : 1;`,
	`	group_info = kmalloc(sizeof(*group_info) + nblocks*sizeof(gid_t *), GFP_USER);`,
	`	if (!group_info)`,
	`
		return NULL;` ,
	`	group_info->ngroups = gidsetsize;`,
	`	group_info->nblocks = nblocks;`,
	`
	atomic_set(&group_info->usage, 1);`,
	`
	atomic_set(&group_info->usage, 1);`,
	`<br><br>`

]
let count = 0;

document.addEventListener("DOMContentLoaded", () => {
	document.querySelector(".first-main").style.display = "block"
})

document.getElementById("bu1").addEventListener("click", () => {
	document.querySelector(".first-main").style.display = "none"
})



let bool = 1;

document.getElementById("main-manu").addEventListener("click", () => {
	if (bool == 1) {
		document.getElementById("manu-1").style.animationName = "Manu1"
		document.getElementById("manu-2").style.animationName = "Manu2"
		document.getElementById("manu-3").style.animationName = "Manu3"
		document.getElementById("manu-1").style.animationDirection = "normal"
		document.getElementById("manu-2").style.animationDirection = "normal"
		document.getElementById("manu-3").style.animationDirection = "normal"
		document.getElementById("manu-1").style.background = "white"
		document.getElementById("manu-3").style.background = "white"
		document.getElementById("manu-2").style.background = "white"
		document.getElementById("manu-1").style.color = "black"
		document.getElementById("manu-2").style.color = "black"
		document.getElementById("manu-3").style.color = "black"

		bool = 0;
	}
	else {
		document.getElementById("manu-1").style.animationName = "Manu1-after"
		document.getElementById("manu-1").style.animationDirection = "reverse"
		document.getElementById("manu-2").style.animationName = "Manu2-after"
		document.getElementById("manu-2").style.animationDirection = "reverse"
		document.getElementById("manu-3").style.animationName = "Manu3-after"
		document.getElementById("manu-3").style.animationDirection = "reverse"
		document.getElementById("manu-1").style.background = "green"
		document.getElementById("manu-3").style.background = "green"
		document.getElementById("manu-2").style.background = "green"
		document.getElementById("manu-1").style.color = "white"
		document.getElementById("manu-2").style.color = "white"
		document.getElementById("manu-3").style.color = "white"
		bool = 1;
	}
})

document.getElementById("Tbk-1").addEventListener("click", () => {
	document.body.style.background = "black"
	document.querySelector(".first-main").style.background = "white"
	document.querySelector(".second-main").style.background = "white"
})
document.getElementById("Tbk-2").addEventListener("click", () => {
	document.body.style.background = "white"
	document.querySelector(".first-main").style.background = "black"
	document.querySelector(".second-main").style.background = "black"
})
document.getElementById("Tbk-3").addEventListener("click", () => {
	document.body.style.background = "red"
})
document.getElementById("Tbk-4").addEventListener("click", () => {
	document.body.style.background = "orange"
})
document.getElementById("Tbk-5").addEventListener("click", () => {
	document.body.style.background = "rgb(208, 255, 0)"
	alert("Please Change the Font color if Your font color is yellow Green (Default)")
})
document.getElementById("Tbk-6").addEventListener("click", () => {
	document.body.style.background = "blue"
})
document.getElementById("Tbk-7").addEventListener("click", () => {
	document.body.style.background = "yellowgreen"
	alert("Please Change the Font color if Your font color is yellow Green (Default)")
})
document.getElementById("Tbk-8").addEventListener("click", () => {
	document.body.style.background = "pink"
	alert("Please Change the Font color if Your font color is yellow Green (Default)")
})


document.getElementById("manu-2").addEventListener("click", () => {
	document.querySelector(".second-main").style.display = "block"
})

document.getElementById("TbkN-1").addEventListener("click", () => {
	document.body.style.color = "black"
})
document.getElementById("TbkN-2").addEventListener("click", () => {
	document.body.style.color = "white"
})
document.getElementById("TbkN-3").addEventListener("click", () => {
	document.body.style.color = "red"
})
document.getElementById("TbkN-4").addEventListener("click", () => {
	document.body.style.color = "orange"
})
document.getElementById("TbkN-5").addEventListener("click", () => {
	document.body.style.color = "rgb(208, 255, 0)"
})
document.getElementById("TbkN-6").addEventListener("click", () => {
	document.body.style.color = "blue"
})
document.getElementById("TbkN-7").addEventListener("click", () => {
	document.body.style.color = "yellowgreen"
})
document.getElementById("TbkN-8").addEventListener("click", () => {
	document.body.style.color = "pink"
})
const main = document.getElementById("main");

function pageScroll() {
	window.scrollBy(0, 1);
	scrolldelay = setTimeout(pageScroll, 10);
}
// main.scrollTop = main.scrollHeight;/
const In_Second = setTimeout(() => {
	Second();
}, 1000);

document.getElementById("manu-3").addEventListener("click", () => {
	main.textContent = ""
	count = 0;
	clearTimeout(In_Second())
})
function Second() {
	main.innerHTML += str
	main.scrollTop = main.scrollHeight;
	pageScroll()
	In_Second()
}

main.scrollTop = main.scrollHeight;
document.addEventListener("keydown", () => {
	if (count < mainStr.length) {

		const terminal = document.getElementById("main"); // Assuming "terminal" is the same as "main"

		main.innerHTML += mainStr[count] + "<br>";
		count += 1;

		// Automatic scroll to bottom
		main.scrollTop = main.scrollHeight;
	}
	else {
		function blinck() {
			main.innerHTML += "stay :)"
			for (let i = 0; i < 10; i++) {
				setTimeout(() => {
					main.innerHTML += "."
				}, 1200)
			}
			main.innerHTML += "<br>"
			main.scrollTop = main.scrollHeight;
		}
		blinck()
		Second()
	}
});
document.getElementById("Cro").addEventListener("click", () => {
	document.querySelector(".second-main").style.display = "none"
})