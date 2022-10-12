**CID:** 01879907

# Project
This repository is for the submission of your **Computing 2: Applications** coursework.

You should complete the proforma and populate this repository with your project submission.

* **Repository Creation Check:** Tuesday 4th May 18:00 – Update your CID in this file to check your submission.
* **Peer Assessment Deadline:** Tuesday 8th June 18:00
* **Final Submission Deadline:** Thursday 17th June 16:00

# Computing 2 Submission Proforma

For each section, write a maximum of 200 words.

## Brief
  In this numerical age, everyone is expected to know how to use a computer. However, for those who haven’t been using them for most of their life such as seniors, this can be a challenge. Indeed, when helping my grand-parents navigate on their computer, I have noticed they lack the basic vocabulary and understanding around computers.  
  This webapp was designed to give seniors the tools to gain freedom on their computer and participate in conversations. They can chose to learn the information prior to needing it or find out about a particular element when they encounter it. Seniors do not use their computer as often as the younger generations and information may be forgotten therefore a permanent source of information is the ideal solution. The goal was to replicate their computer screen to allow them to point at the elements rather than have to search for it using words.


## Coding
  Having already coded a bit prior to this year, I am aware that starting too big too early is daunting and often inefficient. Therefore, I started with very basic elements on my webapp before adding other features one by one to reach my end goal. To ensure each element worked with the previously written code, I would change one element at a time and test it. Initially, the code was written very explicitly to ensure the path taken worked. Once this was verified, functions were created and made more general to allow the use of one function on different files. This waterfall method proved to be quite efficient as I managed to achieve what I wanted faster than originally planned.
  I preferred learning about HTML, CSS and JavaScript while coding my webapp as this allowed me to learn different elements bit by bit, ensuring I understood it when implemented in my code. Sometimes, when encountering a more complex element, I would look at existing code/web apps on the internet to inspire myself and learn how they made theirs work. Often this helped me understand better how the different features interacted together than searching up the documentation for the particular element. 


## UX/UI
  This web app has been designed to be accessible for seniors. Therefore, the aim was to have no superfluous elements and ensure clarity. The buttons and text were made as big as possible to facilitate reading and clicking. A back button was added to allow easier navigation between the pages for seniors and allow them to access all the pages simply.
  To validate this design, several seniors were placed in front of the web app with no additional information on how to use it and observed to pinpoint any loopholes. Most seemed reluctant to click on several buttons as they were fearful of clicking something wrong. This also happened when facing their computer normally. Therefore to ensure they would get the information despite this lack of confidence, all elements were designed to show the information when hovered upon. After some time on the web app, a few users portrayed a significant gain of confidence navigating the web app and their computer.


## Data
  As my web app is majorly display based, the data processing is mostly the retrieval of the correct information from the data base via the server. I have separated the data into different JavaScript files, according to the page on which it will be displayed to facilitate the retrieval. Furthermore,  array dictionaries were used to sort the information according to the button id the information must be linked to. This methods make it easier to retrieve the accurate information at the key explicitly conveys the information contained in the array, making it more understandable when using it.
  For the icon quiz element of the web app, the scores must be kept in the data source when the user has obtained a higher score than previously. To do so, the dictionary is modified accordingly. This data will be saved until the program is restarted.


## Debugging
  The best way to debug a code is to avoid having any bugs in the first place. Therefore, as each element was added on individually, they were all tested upon implementation and the minor issues were easily resolved. As each element previously added had been proved to worked, only the current additions required modification to allow them to work with the existing code. The features were simplified as much as possible initially to 
  Sometimes, issues were proving to be more difficult and diverse approaches would be taken. The feature would be recoded with a different path or simplified. To confirm these worked, the alert function and console.log() were employed to view what was stored in the diverse variables at different times in the code. These were also used to view which piece of the code were ran efficiently. When debugging the diverse files, lines of code were not deleted but commented out to keep a trace and enable me to go back to previous attempts. (See Computing Debugging.docx for more details)


## Best Practice
  Over the weeks spent coding the web app, I learned and applied several process which granted me a greater efficiency. The best method was to separate the web app into different elements and features to allow me to tackle them one by one. By doing so, each could be debugged individually making this step easier. Each time an added part of the web app was made functional, a new version was saved to continue working from which allowed me to keep a trace of the previous code in case an element stopped working.
  As this web app prioritizes the display of information for seniors and each page had several elements, they were all sketched out on paper to begin with. Once the layout was validated, the HTML page was built, using CSS to obtain the desired aesthetic. The behavior of the page was then elaborated with JavaScript as detailed above.

