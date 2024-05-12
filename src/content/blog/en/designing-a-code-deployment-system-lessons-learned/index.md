---
title: Designing a Code Deployment System：Reflections
customSlug: designing-a-code-deployment-system-lessons-learned
tags:
  - Deployment
  - Back-end Development
  - Web Development
snippet: In the early days, about three or four years ago, when frontend developers wanted to easily deploy to cloud services, most of them did so through PaaS platforms. At that time, Heroku was more popular. It required installing the Heroku CLI tool in your own project and using the command line to deploy to the service. I vaguely remember that I might have even set up CI/CD for this (this was before Github Actions), but now it's no longer necessary to go through such a hassle.
publishDate: 2024-04-24 18:06
category: Development
---

![deployment-flow](deployment-flow.png)

# Introduction

In the early days, about three or four years ago, when frontend developers wanted to easily deploy to cloud services, most of them did so through PaaS platforms. At that time, Heroku was more popular. It required installing the Heroku CLI tool in your own project and using the command line to deploy to the service. I vaguely remember that I might have even set up CI/CD for this (this was before Github Actions), but now it's no longer necessary to go through such a hassle.

Nowadays, most PaaS platforms, such as Render, Netlify, or Zeabur, which is the service developed by the speaker Yuanlin, allow us to directly create services on these platforms and set them up to obtain authorization from the Github Repo. As long as Github knows that the current branch has a new commit, the platform service will automatically pull the Repo, build, and deploy for us.

> Zeabur was founded in 2022 and has previously received angel round financing from Kirin Entrepreneurship. The company positions itself as a PaaS platform that provides one-click deployment services for independent developers and enterprise customers in the era of large models. Its main purpose is to help developers solve two types of pain points
> 
> 1.By encapsulating a series of deployment processes such as server rental, environment configuration, route configuration, domain name configuration, and TLS certificate application, and providing them to developers in a unified manner, the automation of application deployment and the simplification of service deployment workflows are achieved.
> 2.By adopting a "membership subscription + pay-per-use" model, it helps developers solve the problems of server leasing and hardware resource waste. 
>
> [Introduction from Hong Kong Silicon Valley's "Early Projects | Targeting Vercel as a Benchmark, Service Deployment PaaS Platform 'Zeabur' Aims at New Opportunities for Developer Tools in the Era of Large Models"》](https://www.hksilicon.com/articles/2294965)
> 

## Outline

The speaker starts from the simplest key point: what are the roles in a code deployment system? The developers who write the code and the users who actually use the website. From this perspective, the speaker begins to sort out the process.

### From the Developer's Perspective

- We have completed a project program.
- Then we upload it to Github. Before uploading to the cloud server, it needs to be built.
- What happens from the authorization of Github to the build process (question 1)?

When the build is complete, the build result may be a:
- Static Website (Static Files)
- Container Image
- Serverless Functions
- Finally, it is successfully uploaded to a certain place (question 2) and points to a domain.

### From the User's Perspective
- The user sends a request to visit the website.
- DNS begins to resolve, and DNS converts the domain name to the corresponding IP address.
- It may point to an IP through a CNAME Record (Domain) or an A Record (IP).
- We don't care what this IP is for now (question 3), but it must point to the place mentioned in question 2.

Then, in the process of sorting out the flow, the speaker sets three question points and gradually deconstructs these three question points for us.

### Where is that place?

First, we need to know what that certain place (question 2) is. In fact, it is the cloud service.

Static websites may be uploaded to：

- OSS (Object Storage Service) services, such as Amazon S3, GCP Storage, or Server folder.
- Container Images may be uploaded to Docker or Kubernetes.
- Serverless Functions may be on Cloud Functions, such as Lambda services.

(Since this lecture is part of a paid subscription, for more detailed content, please join the [E+ Growth Program](https://www.explainthis.io/zh-hant/e-plu). You will see the rest of the outline and reflections in the "Designing a Code Deployment System" discussion thread in the live discussion area.)

## Reflections

The speaker starts with "who is using our service" to identify the key roles and then draws out the process of how these roles begin to use the service, obscuring the key elements that may expand in the process.
I can understand the reason for obscuring first. If we start to expand directly, the audience will feel "who am I and where am I". After the expansion is complete, we will not be able to return to the context of these user stories.
And these key factors are the reasons we need to explore. In addition, the speaker also mentioned the concepts of cross-region and DDoS prevention. For more content, please refer to the [E+ Growth Program](https://www.explainthis.io/zh-hant/e-plu) (no commercial recommendation).