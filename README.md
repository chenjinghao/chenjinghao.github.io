# my Personal Website
This is NOT a "Homework" for DevOps class!

![Good day](resouces\pictures\forWA.png "use Canva to design")

## About this website
This website is hosting on GitHub Page.Why?

Because it is **FREE!**

>Current Status: Still developing

<https://chenjinghao.github.io>

### Kill two birds with one stone

It was a project for DevOps course in NUS SGUS Fintech program. One of the suggestion was build it in a way that we can contiues use even after our graduation. Therefore, it is a perfect timing to start making my personal website. 

I also believe that there is not better way to demostrate my skills to my potential employers trough my personal website. 

>Learning more about NUS SGUS Fintech Program
>
>Visit [NUS FinTech SG Programme](https://ace.nus.edu.sg/nus-fintech-sg-programme/)

### FrontEnd

- Color scheme: Black & White, easy to read and black & white never go out of fashion.

- Interaction with viewers: 
    - Added **High Five button** in landing page: when mouse move to the high five buttion, it will turn into a grab hand sign. It look like a five. When viewer click the high five button, it will turn into a spoke hand sign and show **"Live Long and prosper"**. The Vulcan salute from Star Trek movie. 
    - Added **contact forms** in landing page and resume page. There is nothing special about contact form in landing page. However, the contact form in resume page will be pick up by Power Automation if viewer submit a requires. 
        - Power Automation will store all filled up information into excel file. As well, it will then send out a email containing my resume pdf file. Then, Power Automation will again update the record whether the respond email been send out already. 

- Subpages are instead hosting in Notion page
    - Why? Easy to update & organize. Whenever I want to update my subpages, I only need to update them in my notion desktop application. I don't have to waste time to write code, and push to github and deploy into the server.**(i don't even need to press the save button!)** ALl of these will done by Notion in the backend. Beside that, Notion offer quite a lot of embeds Apps from external service. Take Example of my figma board in my resume page.

- Why third part services listed below:
    - save time
    - consistency
    - reliability

### BackEnd

- GitHub Action
    - deploy.yml: this is a build-in workflow that deploy our updates into GitHub page.

    - WhatsApp.yml: the file was found in GitHub Action Marketplace.
        - Check out the repository [here](https://github.com/ishween/whatsapp-push-notify-action)

        - It is simple to implement:
            1. Create twilio account, $15 credit provided
            2. select **Message** -> **Try it out** -> **Send a WhatsApp message** in Twilio console, follow the instruction to activate twilio sandbox through your WhatsApp
            3. Fetch Account Aid and Auth Token from Twilio and save them into secrets of your repository. As well as your whatsapp phone number. **Your repository** -> **Setting** -> **Secrets** -> **Actions**
            4. The name of those screts should be **account_sid, auth_token, to_whatsapp_no** (format: +65********).
            
            5. Create a workflow in Github and paste from the repository mentioned above. 


### Challenges & Problems

- **High Five Button:** Front Awesome offer animation function for its icon. I tried to implement the hand shaking effect and set the animation timing to 30s, but it fail. I have tried many time to solve the problem, and still cannot figure out what is the problem. 

- **WhatsApp Notification:** No all github action in its marketplace are created equal! Some of the solution does not work for me. Most importantly, it will be better to read the author's repository before implement his/her solution.  

- **Power Automation** Currently I have problem with attach PDF file in Power Automation. My plan is to attach a resume in the auto respond email when people try to contact me through my resume webpage.

- **GitHub Page:** I should name my repository in format as username.github.io. Otherwise, it will appear username.github.io/your_repository_name. Problem found when I testing my formsubmit contact form. 

### Learning
- GitHub Action for WhatsApp Notification: 
    - workflow yml file
        - name: the name of the workflow
        - on: triggers of the workflow i.e. push: branches:["main"]
        - jobs: tasks to run. each task containing: 
            - name of the task, 
            - run-on, type of runner, usually is ubuntu-latest 
            - steps: a sequence of tasks
    - the whatsapp notification workflow I implemented
        - the yml activate another yml file (action.yml) in the repository
        - action.yml activate Dockerfile
        - Dockerfile set up the environment to run the python file (main.py)
        - main.py import package from twilio, retrive all secrets(mention in BackEnd section above) save in my respository. As well, format the message. 
        - after main.py, the twilio will send the formated message to our whatsapp.


### What is Next?

- Fill up all necessary content, that including about me section, my past projects, and some small notes. 

- Implementing more functionalities into WhatsApp notification (GitHub Action) 

- Format my auto respond email to including polite greeding and emphazing my skil set.  

***

### External services used
- [Bootstrap](https://getbootstrap.com/docs/5.2/getting-started/introduction/)

- [Font Awesome](https://fontawesome.com/)

- [FormSubmit.co](https://formsubmit.co/)

- [GitHub](https://github.com/)
    - GitHub Action
    - GitHub Page

- [Microsoft Office](https://www.office.com)
    - Excel
    - Power Automation
    - Form

- [Notion](https://www.notion.so/)

- [Canva](https://www.canva.com/)

***
## Contact me
>my current status: Looking for job

Visit my [LinkedIn](www.linkedin.com/in/adam-cjh) for my detail & latest update.

**OR**

Email me: <Adam_CJH@Outlook.com>