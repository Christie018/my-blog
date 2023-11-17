---
title: 'Synk CTF 2023 WriteUp'
excerpt: 'With this CTF, I was able to get more experience with solving web and pwn capture the flag challenges.

This CTF also gave me a chance to get some exposure to the Synk platform. It allows me as a Bug Bounty Hunter, CTF advocate, and open source development contributor, to find and automatically fix vulnerabilities in code, open source dependencies, containers, and IaC. Overall, I was able to see how to incorporate this tool powered by Snyk’s and DeepCode AI into my code reviews, and vulnerability scanning process.'
coverImage: '/assets/blog/hello-world/Sunflower-Background-.jpg'
date: '2020-03-16T05:35:07.322Z'
author:
  name: Mattalynn Darden
  picture: '/assets/blog/authors/Mattalynn_Darden.jpg'
ogImage:
  url: '/assets/blog/hello-world/Sunflower-Background-.jpg'
---

This CTF was provided by Snyk. With the Snyk platform, you can find and automatically fix vulnerabilities in your projects for free. I used Snyk this time to detect vulnerabilities in this CTF challenge to uncover hidden flags faster. Snyk has a quick and easy installation with really helpful documentation. It's dependencies include node.js and python3. Once you have these packages installed you can finish your CLI Snyk installation with the simple command npm install snyk. The CLI also requires for you to have a free online Snyk account to authenticate with in order to run tests locally.

Once I got my local environment ready to start using Snyk's CLI tool, I got into to trying to pawn this invisible-ink web application. In this web application CTF challenge, there's two files provided to you: the index.js and package.json page.

The challenge also offers you a url link to access to web application.

You can interact with this webpage by using curl. By default, curl uses the GET HTTP request method to retrieve information from the web application. The web application will send an error message if you use the GET message, you have to use the curl -X POST switch to post data to the /echo path. The post method submits data to the web server, causing a change in state or side effects on the server's side.  Once you use curl to send the post request, the server allows you to interact with it and sends back this message.

To get a better understanding of the main code, the package.json file shows what's used and the dependencies that are needed to run the web application. Take note of the lodash library and version number. 

On the other hand, we can take a look at index.js to see what the source code does. The main takeaway from this file is that lodash is loaded into an underscore object. This portion of the code merges the lodash library into the out object with the contents of the request. If the POST HTTP request sends the flag value as true to the server, the flag will get outputted onto the screen with the rest of the response message instead of saying "flag":"disabled".

Now that we've had a chance to check out the functionality of the web application's service. We can start taking a look at how to get the flag by taking advantage our ability to input these post requests that get read by the host server.

This is where I was able to use Snyk to help me quickly find vulnerabilities in my code. I downloaded CTF challenge source code files to my local environment. Then I changed directories into where these files were stored. Lastly, I ran the snyk test command to use this tool to check the source code for CVEs.

Now we've got some good leads on potential exploits to use. This saved me a lot of time googling and doing OS INT during the reconnaissance phase. I'll definitely be utilizing this tool into my dev environment and when going through future CTF challenges and bug bounties.

Snyk seems to be complaining about prototype pollution and even has some links to check out. They give some good backstory on how using the lodash.merge method can leave web application environments susceptible to prototype pollution.

As explained by Synk, Prototype Pollution is a vulnerability affecting JavaScript and refers to the ability to inject properties into existing JavaScript objects. JavaScript allows all Object attributes to be altered, including their magical attributes such as __proto__. An attacker can manipulate these attributes to overwrite a JavaScript application object by injecting other values. Properties are then inherited by all the JavaScript objects through the prototype chain. When that happens, this leads to either denial of service by triggering JavaScript exceptions, alters the application source code to force the code path that the attacker injects, thereby leading to remote code execution.

My understanding of prototype pollution is that because JS is prototype-based, when new objects are created, they carry over the properties and methods of the prototype object with it's own basic functionalities. The exploit lies in the fact of when you set the key flag to true in the prototype, every object application wide will be altered. Although this inheritance might make a web programmers life easier, it ultimately makes it vulnerable and exploitable in older versions of the lodash library.

While Snyk's explanations of the vulnerability was very extensive with different attack paths, their findings focused on being able to spot and remediate this vulnerability in code. Me being the script kiddie I am, I wanted to see if I could find some kind of exploit script or attack code. With some more OS INT, I was able to track down a github repository with a demonstration of the _.merge pollution vulnerability - score! 

Wrapping up the challenge now by inputting the exploit script into the curl post request like this, and we get our flag!!

Now that challenge is done, and you can see how easy it is to run snyk in your local environment. It definitely saved me some time.

Not only did this challenge teach me how to utilize Snyk, it allowed me to learn more about prototype pollution and about locking dependencies for a web application with package-lock.json. My main take away is that while keeping dependency versions locked doesn't break your apps functionality, it might allow newly found security vulnerabilities to be your code for longer.
