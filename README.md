# Stomble Contact List

Stomble Contact List is a project that aims to provide a convenient and efficient way to manage and organize your contacts. It utilizes React Native with Expo router for the frontend, while the backend is powered by Node.js, Express.js, AWS EC2, and MongoDB. This README will guide you through the steps required to set up and run the project.

## Prerequisites
Before you can start using Stomble Contact List, make sure you have the following software and tools installed:

- [Expo app](https://expo.dev/) installed on your device. You can search for it on the app store for your operating system.
- [Node.js](https://nodejs.org/en) installed on your machine.
- Access to an AWS EC2 instance with MongoDB set up.
## Getting Started
To set up and run Stomble Contact List, follow the steps below:

### 1. Frontend Setup
1. Clone or download the project repository.

2. Open a terminal and navigate to the project's frontend folder.

3. Install the required dependencies by running the following command:

```shell
npm install
```

4. Once the dependencies are installed, start the program using Expo CLI with the following command:

```shell
expo-cli start --tunnel
```

5. Expo CLI will start a development server and provide a QR code.

### 2. Frontend Usage
1. On your device, open the Expo app and scan the QR code provided by Expo CLI.
2. The app will be built and launched on your device.

**Note:** If you make changes to the frontend code, you will need to restart the frontend using the Expo CLI command mentioned above.

### 3. Backend Setup
1. Open a terminal and navigate to the project's backend folder.

2. Execute the following command to connect to your AWS EC2 instance:

```shell
ssh -i "StombleKey.pem" ubuntu@ec2-13-211-126-106.ap-southeast-2.compute.amazonaws.com
```

3. Change to the StombleDatabase directory:

```shell
cd StombleDatabase
```

4. Start the backend by running the following command:

```shell
node .
```

### 4. Restart Frontend

To use the backend with the frontend, you need to restart the frontend. Follow the "Frontend Usage" instructions mentioned above.
