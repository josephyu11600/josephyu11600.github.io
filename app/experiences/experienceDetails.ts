import { Experience, ExperienceType } from 'app/components/Experience';

export const experiences: Experience[] = [
	{
		date: 'August 2018 - May 2022',
		title: 'University of California, Berkeley',
		summary: "Bachelor's of Arts, Computer Science \n GPA: 3.80/4.0",
		type: ExperienceType.Education,
	},
	{
		date: 'June 2020 - August 2020',
		title: 'Listing Bird',
		summary:
			'Software Engineering Intern \n Skills:  NodeJS • NestJS • AngularJS • MongoDB',
		type: ExperienceType.Industry,
		bulleted_description: [
			'Developed API endpoints using NodeJS and NestJS to manage thousands of user and sales data in MongoDB',
			'Scripted a full-stack eBay fines and fees calculator feature for Listing Bird’s web application',
		],
	},
	{
		date: 'June 2021 - August 2021',
		title: 'Amazon',
		summary:
			'Software Engineer Intern \n Skills:  Java • Mockito • AWS • DynamoDB',
		type: ExperienceType.Industry,
		bulleted_description: [
			'Explored system design for a backend subnet list management service by researching the tradeoffs between using Amazon Lambda versus Elastic Kubernetes Service landing on the serverless architecture due to its improved integration with the simple queue service and API gateway.',
			"Improved Amazon network engineer's productivity by using AWS Lambda and API Gateway to build REST API endpoints to query for all network rules within an Amazon fulfillment center with filter options for device UUID, a group UUID that the device belonged to, and a device's function.",
		],
	},
	{
		date: 'July 2022 - May 2023',
		title: 'Nuro',
		summary:
			'Software Engineer \n Skills:  Go • gRPC • Protobuf • GCP • MySQL',
		type: ExperienceType.Industry,
		bulleted_description: [
			'Programmed and deployed gRPC endpoints that assign vehicles for 100+ orders/week by storing a vehicle-order assignment relationship in a MySQL database, generating routes using Google Maps API and sending generated geolocations to vehicles.',
			"Reduced on-call issues by 50% through developing gRPC endpoints in Go that computed time windows and routes from a vehicle's start to drop off location, and surfaced reasons for vehicle ineligibility to handle orders.",
			'Designed, and implemented a multi-stop trip generation feature which ingested order creation events from a pub/sub topic, queried a MySQL database for all previous orders within a 1km radius and used 4 orders to create a batch of stops that can be handled by a vehicle.',
		],
	},
	{
		date: 'June 2023 - July 2024',
		title: 'Applied Intuition',
		summary:
			'Software Engineer \n Skills: TypeScript • React • Python • Protobuf • PostgreSQL',
		type: ExperienceType.Industry,
		bulleted_description: [
			'Spearheaded the development of a yaml file manager using React, GraphQL, and MobX implementing RPC endpoints with Python to store the file contents and metadata in a PostgreSQL database.',
			'Developed an artifact management service that asynchronously downloads docker images and added frontend components to display download progress reducing sensor simulation start time by up to 20 minutes.',
			"Drove migration of docker images from Quay building out steps in CI/CD pipeline to copy images to customer's container registry; added APIs to track the image versions on customer clusters reducing image pull times by 10%.",
			'Enabled WebRTC streaming from a game engine on cloud by deploying a service that dynamically scales up pods running the engine. Added a TURN server and load balancer to ingest UDP traffic. Supported on 2 major cloud providers allows 10+ concurrent streams scaling with node pool size.',
		],
	},
	{
		date: 'August 2024 - May 2026',
		title: 'Georgia Institute of Technology',
		summary: "Master's of Science, Computer Science",
		type: ExperienceType.Education,
	},
];
