// Projects data.
// Note: Here we are getting data from a js file, but in a different project I'll be fetching these projects from some srt of APIs.

const projects = [
	{
		nodata: false,
		live: false,
		id: 1,
		title: 'BLook',
		descrip: 'Mobile Application',
		details: 'Project One',
		url: require(`../assets/img/Blook.png`),
		titleDesc: 'Mobile Booking Application for Salons, Barber Shops, and Beauty Salons',
		date: 'Jun 2021 - Dec 2021',
		role: 'UI/UX Designer and Frontend Developer',
		image1: require('../assets/img/Blook.png'),
		image2: require('../assets/img/Blook/blookApps.png'),
		client: 'Ateneo De Naga University',
		objective: 'An application that can serve as a portal for salons, parlors, and barber shops on booking their appointments.',
		tools: ["Flutter", "Firebase", "Visual Studio Code", "Android Studio", "Figma", "Google Map API"],
		challenge: [
			"Booking systems are being used in an increasing number of venues. The majority of the booking system's features are not accessible tothe user or administrator. Even when purchasing anything online, the item is reserved for the potential buyer. The more resources and other dynamic elements a system possesses, the more processing must be performed.",
			"According to the findings of the usability test that was done in the areas of shop owners and clients, the users were able to appreciate the application. The client was able to book their desired services without having to walk to the shop. The shop owner was able to evaluate the appointments set by the user and accept or reject them in a timely manner.",
			"The test resulted in an overall positive response, with client users successfully completing the appointment schedule via the mobile application. Using the formula in calculating the SUS score, Client application got a average score of 75% while the shop owner application with the average score of 68%."		
		],
		repo: 'https://github.com/joshuasarmiento/blook_app',
		liveLink: '',
		contributor: [
			{
				"image": require('../assets/img/Blook/Contributors/JeffPic.jpg'),
				"link": 'https://jeffbanday.github.io/',
				"name": 'Jeff C. Banday',
			},
			{
				"image": require('../assets/img/Blook/Contributors/SaqPic.jpg'),
				"link": 'https://www.facebook.com/xxttian',
				"name": 'Christian A. Saquillo'
			},
			{
				"image": require('../assets/img/joshua.jpg'),
				"link": 'https://www.linkedin.com/in/joshuasarmiento/',
				"name": 'Joshua A. Sarmiento'
			}
		],
	},
	{
		nodata: false,
		live: false,
		id: 2,
		title: 'CHEDROV',
		descrip: 'Web application',
		details: 'Project Two',
		url: require(`../assets/img/chedDash.png`),
		titleDesc: 'CHED Application of Programs Management System',
		date: 'Jan 2022 - Jun 2022',
		role: 'Project Lead, UI/UX Designer, Frontend Developer',
		image1: require('../assets/img/CHED/CHEDReports.png'),
		image2: require('../assets/img/CHED/CHEDDashboard.png'),
		client: 'CHED Supervisor and Staff',
		objective: 'A web-based application for the processing of program applications by various Higher Education Institutions.',
		tools: ["Vue JS", "NodeJS", "Visual Studio Code", "Figma", "Figma", "Tailwind CSS", "Parse Server/Dashboard", "Laragon", "Robo 3T", "Mongo DB Compass"],
		challenge: [
			"The scope of this project is a web-based system composed of modules that handle the application of programs of HEIs. Including, but not limited to: Account Creation Module, Renewal Module, Initial Offering Module, Government Recognition Module, Certificate of Program Compliance Module, Report Generation Module and Notification Module The project is limited to digitizing and improving the efficiency of the current process of application of programs.",			
			"The current program application process causing a lot of concerns which are; documents are mixed up or even forgotten by the supervisors because it’s voluminous, supervisors sometimes forget to prepare follow-up letters for HEIs because of the unorganized documents, and HEIs operating programs even without the corresponding government authority, HEIs non-observance of the timelines causing a delay in application progress, and the Commission issuing Special Order for Graduation which all leads to delays in the issuance of corresponding government authority for HEIs.",			
			"The CHED Programs Application Management System was developed in order to have a more efficient and effective way of managing HEIs program applications. This system should take away the hassle of the manual application process that the CHED is currently implementing.",   
		],
	   repo: 'https://github.com/Sevsssssss/capp',	
	   liveLink: '',
	   contributor: [
		   {
			   "image": require('../assets/img/Blook/Contributors/JeffPic.jpg'),
			   "link": 'https://jeffbanday.github.io/',
			   "name": 'Jeff C. Banday',
		   },
		   {
			   "image": require('../assets/img/Blook/Contributors/SaqPic.jpg'),
			   "link": 'https://www.facebook.com/xxttian',
			   "name": 'Christian A. Saquillo'
		   },
		   {
			   "image": require('../assets/img/joshua.jpg'),
			   "link": 'https://www.linkedin.com/in/joshuasarmiento/',
			   "name": 'Joshua A. Sarmiento'
		   },
		   {
				"image": require('../assets/img/CHED/contributors/DuanePic.jpeg'),
				"link": 'https://www.linkedin.com/in/joshuasarmiento/',
				"name": 'Joshua A. Sarmiento'
			},
			{
				"image": require('../assets/img/CHED/contributors/SevPic.jpeg'),
				"link": 'https://www.linkedin.com/in/joshuasarmiento/',
				"name": 'Joshua A. Sarmiento'
			}
	   ],
	},
	{
		nodata: false,
		live: true,
		id: 3,
		title: 'Recipe Api',
		descrip: 'Web Application',
		details: '',
		url: require(`../assets/img/edaman.png`),
		titleDesc: 'Web Application Recipe Api',
		date: 'July 2022',
		role: 'Frontend Developer',
		image1: require('../assets/img/edaman.png'),
		image2: require('../assets/img/edaman/edamanLogin.png'),
		client: 'Frontend Developers',
		objective: 'A web application that consumes data coming from https://www.edamam.com/ API..',
		tools: ["Firebase", "Visual Studio Code", "Tailwind Css", "Vuejs", "Vuex"],
		repo: 'https://github.com/joshuasarmiento/RecipeAPI',
		liveLink: 'https://jocular-bavarois-008dc0.netlify.app/#/login',
		challenge: [
			'This web application is an assessment for frontend developers, building simple web applications and retrieving API data', 
			'The web application includes the following features: Signup and Login Page. Home page - display recipe data from /api/recipes/v2 endpoint, Lazy loading when displaying the data, Search recipe functionality, A page to view other details of a specific recipe, Logout functionality, Lazy Loading List (New) and Vue Toast (New)',
		],
		contributor: [{
				image: require('../assets/img/Blook/Contributors/JeffPic.jpg'),
				link: 'https://jeffbanday.github.io/',
				name: 'Jeff C. Banday',
			},
			{
				image: require('../assets/img/Blook/Contributors/SaqPic.jpg'),
				link: 'https://www.facebook.com/xxttian',
				name: 'Christian A. Saquillo'
			},
			{
				image: require('../assets/img/joshua.jpg'),
				link: 'https://www.linkedin.com/in/joshuasarmiento/',
				name: 'Joshua A. Sarmiento'
			}
		],
	},
];

export default projects;
