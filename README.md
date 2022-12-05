# my Personal Website
This is NOT "Homework" for the DevOps class!

![Good day](https://github.com/chenjinghao/chenjinghao.github.io/blob/4f6c4907aa7bfaa08e351d7973616234e05ee7ef/resouces/pictures/forWA.png "use Canva to design")

## About this website
This website is hosted on GitHub Page. Why?

Because it is **FREE!**

>Current Status: Still developing

<https://chenjinghao.github.io>

### Kill two birds with one stone

It was a project for the DevOps course in the NUS SGUS Fintech program. One of the suggestions was to build it in a way that we can continue to use even after graduation. Therefore, it is the perfect time to start making my website. 

I also believe there is no better way to demonstrate my skills to potential employers than through my website. 

>Learning more about NUS SGUS Fintech Program
>
>Visit [NUS FinTech SG Programme](https://ace.nus.edu.sg/nus-fintech-sg-programme/)

### FrontEnd

- Color scheme: Black & White, easy to read and black & white never go out of fashion.

- Interaction with viewers: 
    - Added **High Five button** on the landing page: when the mouse moves to the high five buttons, it will turn into a grab hand sign. It looks like a five. When the viewer clicks the high five button, it will turn into a spoke hand sign and show **"Live Long and prosper"**—the Vulcan salute from the Star Trek movie. 
    - Added **contact forms** on the landing page and resume page. There is nothing special about the contact form on the landing page. However, the contact form on the resume page will be picked up by Power Automation if the viewer submits a requires. 
        - Power Automation will store all filled-up information into an excel file. It will also send out an email containing my resume pdf file. Then, Power Automation will update the record to determine whether the response email has been sent out. 

- Subpages are instead hosted on the Notion page
    - Why? Easy to update & organize. Whenever I want to update my subpages, I only need to update them in my desktop application. I don't have to waste time writing code, push to GitHub and deploy into the server.**(i don't even need to press the save button!)** All of these will be done by Notion in the backend. Besides, Notion offers quite a lot of embeds Apps from external services. Take an Example of my Figma board on my resume page.

- Why third-party services listed below:
    - save time
    - consistency
    - reliability

### BackEnd

- GitHub Action
    - deploy.yml: this is a built-in workflow that deploys our updates into the GitHub page.

    - WhatsApp.yml: the file was found in GitHub Action Marketplace.
        - Check out the repository [here](https://github.com/ishween/whatsapp-push-notify-action)

        - It is simple to implement:
            1. Create a Twilio account, a $15 credit provided
            2. select **Message** -> **Try it out** -> **Send a WhatsApp message** in the Twilio console, follow the instruction to activate the Twilio sandbox through your WhatsApp
            3. Fetch Account Aid and Auth Token from Twilio and save them into the secrets of your repository. As well as your WhatsApp phone number. **Your repository** -> **Setting** -> **Secrets** -> **Actions**
            4. The name of those secrets should be **account_sid, auth_token, to_whatsapp_no** (format: +65********).
            
            5. Create a workflow in GitHub and paste it from the repository mentioned above. 


### Challenges & Problems

- **High Five Button:** Front Awesome offers an animation function for its icon. I tried to implement the handshaking effect and set the animation timing to 30s, but it failed. I have tried many times to solve the problem, but I still cannot figure out the problem. 

- **WhatsApp Notification:** Not all GitHub actions in its marketplace are created equal! Some of the solutions do not work for me. Most importantly, reading the author's repository will be better before implementing their solution.  

- **Power Automation** I have a problem attaching the PDF file in Power Automation. I plan to attach a resume in the auto-respond to email when people try to contact me through my resume webpage.

- **GitHub Page:** I should name my repository in the format username.github.io. Otherwise, it will appear as  username.github.io/your_repository_name. The problem was found when I tested my formsubmit contact form. 

### Learning
- GitHub Action for WhatsApp Notification: 
    - workflow yml file
        - name: the name of the workflow
        - on: triggers of the workflow, i.e. push: branches:[ "main"]
        - jobs: tasks to run. Each task contains: 
            - name of the task, 
            - run-on, type of runner, usually is ubuntu-latest 
            - steps: a sequence of tasks
    - the WhatsApp notification workflow I implemented
        - the yml activates another yml file (action.yml) in the repository
        - action.yml activate Dockerfile
        - Dockerfile set up the environment to run the python file (main.py)
        - main.py import package from Twilio, retrieve all secrets(mentioned in the BackEnd section above) and save in my repository. As well as format the message. 
        - after main.py, Twilio will send the formatted message to WhatsApp.
        - Process: workflow.yml -> action.yml -> Dockerfile -> main.py -> WhatsApp Message Notification

### What is Next?

- Fill up all necessary content, including the about me section, my past projects, and some small notes. 

- Implementing more functionalities into WhatsApp notifications (GitHub Action) 

- Format my auto-respond email to include polite greetings and emphasize my skill set.  

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
>my current status: Looking for a job

Visit my [LinkedIn](www.linkedin.com/in/adam-cjh) for my detail & latest update.

**OR**

Please email me: <Adam_CJH@Outlook.com>