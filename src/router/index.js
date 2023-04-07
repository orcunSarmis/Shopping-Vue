import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home-My.vue"

const routes= [
	{
		path: "/",
		name: "Home",
		component: Home
	},
	{
		path: "/about",
		name: "About",
		component: () =>
		import ("../views/AboutMe.vue")
	}
];

const router = createRouter({
	history: createWebHashHistory(),
	routes
});

export default router;