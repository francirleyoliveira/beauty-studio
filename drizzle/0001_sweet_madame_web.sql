CREATE TABLE `bookings` (
	`id` varchar(64) NOT NULL,
	`userId` varchar(64) NOT NULL,
	`serviceId` varchar(64) NOT NULL,
	`professionalId` varchar(64) NOT NULL,
	`date` varchar(20) NOT NULL,
	`time` varchar(20) NOT NULL,
	`customerName` varchar(255) NOT NULL,
	`customerEmail` varchar(320) NOT NULL,
	`customerPhone` varchar(50) NOT NULL,
	`status` enum('pending','confirmed','cancelled','completed') NOT NULL DEFAULT 'pending',
	`notes` text,
	`createdAt` timestamp DEFAULT (now()),
	`updatedAt` timestamp DEFAULT (now()),
	CONSTRAINT `bookings_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `professionals` (
	`id` varchar(64) NOT NULL,
	`name` varchar(255) NOT NULL,
	`role` varchar(100) NOT NULL,
	`specialties` text,
	`experience` varchar(100),
	`description` text,
	`image` varchar(500),
	`rating` varchar(10),
	`reviews` varchar(10),
	`createdAt` timestamp DEFAULT (now()),
	CONSTRAINT `professionals_id` PRIMARY KEY(`id`)
);
--> statement-breakpoint
CREATE TABLE `services` (
	`id` varchar(64) NOT NULL,
	`name` varchar(255) NOT NULL,
	`category` varchar(100) NOT NULL,
	`description` text,
	`duration` varchar(50),
	`price` varchar(50),
	`popular` enum('yes','no') DEFAULT 'no',
	`createdAt` timestamp DEFAULT (now()),
	CONSTRAINT `services_id` PRIMARY KEY(`id`)
);
