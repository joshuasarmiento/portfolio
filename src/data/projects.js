// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		nodata: false,
		id: 1,
		title: 'BLook',
		descrip: 'Mobile Booking Application',
		details: 'Project One',
		url: require(`../assets/img/Blook.png`),
	},
	{
		nodata: true,
		id: 2,
		title: 'CHED',
		descrip: 'Web-based application',
		details: 'Project Two',
		url: require(`../assets/img/chedDash.png`),
	},
	{
		nodata: true,
		id: 3,
		title: 'Porfolio',
		descrip: 'Responsive Website',
		details: 'Design One',
		url: require(`../assets/img/Design1.png`),
	},
	{
		nodata: true,
		id: 4,
		title: 'AgriCom',
		descrip: 'Web-based Ecommerce application for farmers',
		details: 'Design Two',
		url: require(`../assets/img/Design2.png`),
	},
];

export default projects;
