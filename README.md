**Introduction:**
This project is to demonstrate creating a test framework for sample application using wdio

	• IDE Used: Visual Studio code
	• Programming language: typescript
	• Automation Tool: WebdriverIO
	• Build/Dependency Management Tool: package.json

**Prerequisties:**

	• node -v 10.0.0 and above
	• npm -v 6.0.0 and above
	• npm install node
	• npm i tsc -g
	• npm install >> ./node_modules (dependencies should be downloaded)
	• Update package.json to run test as under scripts section : npx wdio run wdio.conf.ts
	• Update package.json to view report under scripts section :allure generate --clean [allure_output_dir] && allure open "


**How to run test:
Case 1: To run test locally**
	• Update services tag of wdio.conf.ts to 'chromedriver'
	• On the cli enter the command: npm test
	• Reporting:
		○ Spec : view the reports in the cli
		○ Allure: run the following commands: allure generate --clean & allure open
		![image](https://user-images.githubusercontent.com/83858835/118402770-0a07f300-b689-11eb-8e27-e1c1e56952e7.png)
**Case 2: To run test on Docker**
**Method 1:**
	• Update services tag of wdio.conf.ts to 'docker'
	• On the cli enter docker-compose up to start the engine
	• Once the engine & corresponding nodes are up, enter npm test
**Method 2:**
	• Update services tag of wdio.conf.ts to 'docker'
	• On the cli enter docker build -t <Name>:<version> .
		○ Ex: docker build -t wdiochrome:v6 .
	• Once the build is done and image is created:
		![image](https://user-images.githubusercontent.com/83858835/118402777-168c4b80-b689-11eb-8d25-806d1e8b320a.png)
	• Enter npm test to start the execution
