import { ProjectBody } from "../types";

export const Bullet: ProjectBody = {
  title: "Bullet",
  sections: [
    {
      title: "Introduction",
      body: `The inspiration for Bullet came during the second year
            of my undergraduate studies. As most of the world slowly came
            to grips with the COVID-19 pandemic, people became eager to 
            see and spend time with each other. In several Discord servers
            with friends and classmates, I'd see the question "whos free 
            right now?" asked over and over again. I knew that, at least for
            class schedules, schools usually provided a calendar file that
            could be imported into other calendar apps, so I figured that I
            could make a service that ran in these Discord channels, and
            could make it way easier for people to find others who were free
            and available to meet up in person.`,
    },
    {
      title: "Objective",
      body: `Bullet was designed to be a Discord bot that allowed users to
        upload their course schedules, and then be able to see their own or their
        friends' schedules any time. With the increased prevalence of Discord in
        university settings, this was a great time for this new idea to be
        brought to life. Users would be able to upload new schedules, see their
        friends' schedules, and see whos free at any given time simply by asking
        "whos free". Bullet was also built to have some basic natural language
        functionality, so it could respond naturally to inquiries, such as specifying 
        the time—"whos free at 3?"`,
      imageURL: `${process.env.PUBLIC_URL}/portfolio/bullet/commands.png`,
      imageFirst: true,
    },
    {
      title: "Process",
      body: `Bullet was developed using Discord.py. I began by implementing the
        initial functionality, including uploading calendars and seeing schedules.
        To read the calendar files, I used the vobject library for Python, which
        enabled parsing the calendar files, as well as reading the events as 
        timezone aware datetime objects. Later, I connected Google calendar events
        as well, by using the public ICS url functionality, and parsing those
        files with the same generalized ICS file reading API I had implemented`,
    },
    {
      title: "Execution",
      body: `Initial development began by determining how to read ICS files. This 
        required investigation into many calendar APIs for Python. Initially, I had
        used the first ICalendar API I had found, but this led to some immediate problems.
        Importing events was working fine with the calendar provided by UBC. However, upon
        trying to upload an ICS file I had downloaded of other events from Google Calendar,
        I discovered that the library I had used had trouble standardizing between normal
        events and all-day events. After trial and error, I settled on the vobject library, as it was the 
        only one that was flexible enough to read a variety of different formats of 
        ICS files. Since the ICS standard was so flexible, it also made it much more difficult
        to parse, accounting for the different ways an event could be represented.`,
    },
    {
      imageURL: `${process.env.PUBLIC_URL}/portfolio/bullet/exec1.png`,
    },
    {
      body: `Eventually, the basic functionality was implemented. Users could upload
        their own calendar, see their schedule by pinging themselves, see other peoples'
        schedules by pinging them, and see whos free at any moment by asking "whos free"
        or sending a "?free" message into any chat. To account for privacy concerns, I made
        sure that the only calendars that could be shown in any given response were from 
        people who had access to the channels that the messages were being sent in. After
        this, I deployed it in a few servers, and people started using it immediately.`,
    },
    {
      body: `I was excited things were going well, so I showed one of my high school friends.
        He studied on the east coast at the University of Massachussetts. Confident in the program,
        I asked him to upload his calendar, and a new problem arose: timezones. This wasn't as easy
        as PST or EST, but it also involved accounting for daylight savings. The vobject library
        became extra useful, as it also allowed me to break down and account for different
        repeat rules, used to define repeating events in calendars.`,
      imageURL: `${process.env.PUBLIC_URL}/portfolio/bullet/timezone.png`,
    },
    {
      body: `At this point, things were going well, so I shifted my focus on design. I changed 
      the display of events from a long list of events to condensed cards. This provided a much
      more clear visual hierarchy, making schedules a lot more readable. I also began implementing
      tokenized language processing, breaking down each message into "word" tokens, and evaluating
      meaning based on the words. One of my proudest achievements was enabling the functionality
      to specify time and date in the future in the messages. Users could ask a question like 
      "whos free at 6", and Bullet would intelligently understand both the time (AM/PM) as well
      as the date, based on the time the message was sent.`,
      imageFirst: true,
    },
    {
      imageURL: `${process.env.PUBLIC_URL}/portfolio/bullet/ui.png`,
    },
    {
      body: `Lastly, as it became more used, my friends started suggesting features. One new feature
      was adding support for checking the weather. Many of my friends were also commuters, and so as
      their new needs arose, I found ways to make Bullet fit those additional needs. I also learned
      that Google Calendar had public ICS files, so I developed a system to be able to connect with
      Google Calendar files and sync directly with people's own calendars, making Bullet far
      more flexible and useful than just for university scheduling.`,
      imageURL: `${process.env.PUBLIC_URL}/portfolio/bullet/weather.png`,
    },
    {
      title: "Outcome",
      body: `Ultimately, Bullet was available for over 100 users across 4 discord servers, and
        in my eyes, it was a pretty big success. Development on the project has been on hiatus for
        a few months, especially as both myself and my friends are finishing up their time at university.
        However, this entire experience taught me not only how to make an interesting chatbot, but how
        to develop software with users in mind, how to listen to user feedback, and it definitely made
        me more aware of how important it is to be careful, since there's always a chance that something
        small to bite me later down the line.`,
      imageURL: `${process.env.PUBLIC_URL}/portfolio/bullet.png`,
    },
    {
      body: `Ultimately, Bullet was available for over 100 users across 4 discord servers, and
        in my eyes, it was a pretty big success. Development on the project has been on hiatus for
        a few months, especially as both myself and my friends are finishing up their time at university.
        However, this entire experience taught me not only how to make an interesting chatbot, but how
        to develop software with users in mind, how to listen to user feedback, and it definitely made
        me more aware of how important it is to be careful, since there's always a chance that something
        small to bite me later down the line.`,
      imageURL: `${process.env.PUBLIC_URL}/portfolio/bullet.png`,
    },
  ],
};
