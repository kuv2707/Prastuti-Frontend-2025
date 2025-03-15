// import axios from "axios";

export type Event = {
	title: string;
	subtitle: string;
	imgpath: string;
	eventInfo: string;
	sponsorInfo?: string;
	bullets?: string[];
	links?: { text: string; href: string }[];
	prize?: string;
	aboutSponsor?: string;
};

export type PrastutiEventName =
	| "codigo"
	| "hackoverflow"
	| "recognizance"
	| "simulim"
	| "consilium"
	| "oscillion"
	| "paperpresetation";

export type EventData = Record<PrastutiEventName, Event>;

const allEventsData = {
	codigo: {
		title: "Codigo",
		subtitle: "The Data Structures And Algorithms Event",
		imgpath: "./eventImages/codigo.jpg",
		eventInfo: `Codigo is a Competitive Programming
      event involving the application of
      various Data Structures and
      Algorithms. The event's primary focus is
      to check the students' problem-solving
      skills and applications of algorithms.`,
	},

	hackoverflow: {
		title: "Hackoverflow",
		subtitle: "The Web Development Event",
		imgpath: "./eventImages/hackoverflow.jpg",
		eventInfo: `Software has become an integral
      part of our lives for the past decade,
      leading to a tremendous boom in the
      opportunities and popularity of
      software development among
      engineers from all fields. With this
      event, we intend to give participants
      a kickstart in learning web
      development.`,
	},

	recognizance: {
		title: "Recognizance",
		sponsorInfo: `<p>Sponsored by &nbsp;<img src="https://techkriti.org/static/media/altair.ed263b778d4cbfb3cc91.jpg" style="height: 30px; width: 160px; display: inline;"></p>`,
		subtitle: "The Machine Learning Event",
		imgpath: "./eventImages/recognizance.jpg",
		eventInfo: `An event like Recognizance, the Machine
      Learning Event, will allow our students to
      learn new tools like machine learning and
      resources such as never-ending data to
      build more robust solutions even in the
      electrical domain. It will involve electrical
      applications like Load forecasting, Power
      production forecasting, Fault detection,
      Circuit Breakers, Smart Grid etc. 
      
      Dive into the world of data and machine learning
      with Altair's user-friendly platform for Data Science. 
      Explore code-free to code-friendly experiences and 
      build trust with interactive decision trees, model 
      simulators and other highly explainable features.`,
		bullets: [
			`Access data from various sources, including PDFs, 
      spreadsheets, and text files. Automate data preparation 
      tasks and transform raw data into clean, accurate 
      datasets in seconds.`,
			`Spot anomalies, trends, and outliers in seconds 
      with real-time data.`,
			`Streamline model creation with automated, visual, 
      and code-based approaches.`,
			`Easily train, evaluate, explain, and deploy 
      predictive and prescriptive models.`,
		],
		links: [
			{
				text: "For registration and more information",
				href: "https://unstop.com/hackathons/altair-data-science-contest-iit-bhu-931067",
			},
			{
				text: "To Download Rapidminer",
				href: "https://academy.rapidminer.com/pages/account-details",
			},
			{
				text: "To Learn Rapidminer",
				href: "https://academy.rapidminer.com/",
			},
		],
		prize: "Prize money : 15k",
		aboutSponsor:
			"Altair brings over 30+ years of expertise in Data Science and Data Preparation, delivering proven solutions across various industries such as BFSI, Retail, Manufacturing, and Engineering. With Altair RapidMiner, a robust desktop and cloud-based platform, including a new-generation SaaS Cloud platform, Altair enhances its end-to-end data analytics portfolio. This empowers customers to comprehensively understand, transform, act on, and automate their data. The primary aim of this contest is to encourage engineers to delve into Altair RapidMiner, making the use of this tool mandatory.",
	},

	simulim: {
		title: "Simulim",
		subtitle: "The Power Electronics Event",
		imgpath: "./eventImages/simulim.jpg",
		eventInfo: `Simulim focuses on the sophisticated technology
      connecting software algorithms to High power
      actuator drives. The event will introduce the
      participants to basic concepts of Power
      electronics such as standard waveforms,
      semiconductor switches, rectifiers, Converters,
      Inverters and safety devices. With the current
      standards of Quality and assurance in Industries,
      rigorous testing is a must for the development of
      high power devices. This is achieved with running
      repeated Simulations of the model, perfecting it
      at every stage. In the event the participants will
      learn to develop and optimize their models for
      particular task helping them to tackle the
      problems of Industries in future.`,
	},

	consilium: {
		title: "Consilium",
		subtitle: "The Digital Electronics Event",
		imgpath: "./eventImages/consilium.jpg",
		eventInfo: `Consilium aims to introduce young minds to the
      world of Electronic Design concepts and real
      world applications using hardware
      implementation. Students are first introduced to
      basic of Boolean algebra, Logic gates and Logic
      minimisation followed by Combinational and
      Sequential circuits. Apart from this we focus on
      developing skills for SoC(system on chip)
      designing, simulating these circuits and
      implementing them on FPGA using Verilog HDL.
      Using these concepts of Digital Design along
      with the hands on experience with hardware
      young minds will inspire to solve real world
      problems using Digital Technology.`,
	},

	oscillion: {
		title: "Oscillion",
		subtitle: "The Analog Electronics Event",
		imgpath: "./eventImages/oscillion.jpg",
		eventInfo: `The event aims to introduce the
      participants into the world of Analog
      Electronics and the systems it helps us
      create to interact with the real world.
      Participants will learn the working
      principles and the construction of RLC
      circuits, analog filters, amplifiers,
      converters, astable multivibrators and
      much more, along with applicative uses
      through CAD modelling.`,
	},

	paperpresetation: {
		title: "Paper Presentation",
		subtitle: "The Paper and Poster presentation Event",
		imgpath: "./eventImages/Paper.png",
		eventInfo: `Prastuti started as an All India Paper Presentation Event. Continuing its legacy we presents its workshop on Paper and Poster Presentation.Paper and poster presentation are the few skills which every engineer must have irrespective of the future field they are into. Paper and poster presentation convey to the world the work you have done and the contributions to a particular field. It is very important to inculcate such skills at a very young age as they take time to master.
      The workshop would give an introduction about different sections of paper and poster, the content to be written in each section.   
      This year Paper and Poster Presentation events won't be judged merely on the research, instead, they will be judged on the presentation skills. Students can present papers and posters on any project they have done in the fields of Electrical Engineering, Electronics Engineering, Robotics and any other which includes electrical or electronics.
      Hope to see you in large numbers and use this golden opportunity to inculcate the skills.`,
	},
};

export default allEventsData;
