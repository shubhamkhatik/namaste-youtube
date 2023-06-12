export const generateRandomName= ()=>{
    const names = ["deepesh", "kunal", "bharat", "mayur", "Atul", "chikya", "ajay", "Ambika", "Akanksha", "rohit", "rahul", "Bhavana", "Anjali", "Divya", "Esha", "Farhan", "Gaurav", "hitman", "Ishaan", "Jhanvi", "Kapil", "Lata", "Madhuri", "Nehal", "Omkar", "Pranav", "Rajat", "Sahil", "Tanvi", "Urvashi", "Varun", "Yash", "Zainab", "Aayush", "Chirag", "Daksha", "Eshita"]
    return names[Math.floor(Math.random() * names.length)];
}



export const makeRandomMessage=()=> {
    const messages = [
        "Great content, really enjoying the stream! 😃",
        "Thanks for sharing this information, it's really important 😍",
        "You're doing an amazing job, keep up the great work! 👏",
        "This is one of the best streams I've watched in a while, thank you! 🤩",
        "I'm learning so much from this, thank you for sharing your knowledge 🧠",
        "I love how interactive this stream is, it really feels like a community ❤️",
        "Wow, this is fascinating. I can't wait to learn more 🤔",
        "Thank you for taking the time to do this, it's really appreciated 🙏",
        "This is a really important topic, thank you for shedding light on it 💡",
        "This is the kind of content I've been looking for, thank you! 😎",
        "This is amazing! 😍",
        "Thank you for creating this awesome content! 🤗",
        "I'm really enjoying this stream, thanks for doing it! 👍",
        "This is exactly what I needed to hear today, thank you! 🙌",
        "I'm learning so much from this, thank you for sharing your expertise! 🤓",
        "You're making a real difference with this content, keep it up! 👏",
        "I'm blown away by how informative this stream is, thank you! 🤯",
        "This is the highlight of my day, thank you for doing this! 🌞",
        "I appreciate the effort you're putting into this, thank you! 🤗",
        "You're a fantastic host, keep up the great work! 😃",
        "This is so interesting, I can't wait to see what's next! 🤔",
        "I'm really impressed by your knowledge, thank you for sharing it! 🧠",
        "You're doing an amazing job of explaining this, thank you! 👍",
        "This is such an important topic, thank you for bringing attention to it! 💪",
        "I'm really enjoying the interactive elements of this stream, thank you! 🤩",
        "This is exactly what I needed to hear today, thank you! 😊",
        "I'm blown away by the depth of knowledge being shared here, thank you! 🤓",
        "You're making a real difference with this content, keep it up! 🙌",
        "I'm loving this stream, thank you for doing it! 😍",
        "This is exactly the kind of content I was hoping for, thank you! 😎",
        "I'm learning so much from this, thank you for sharing your expertise! 👏",
        "This is so well put together, thank you for the effort you're putting in! 🤗",
        "I'm really impressed by the quality of this content, thank you! 🌟",
        "This is an eye-opening stream, thank you for doing it! 👀",
        "I can't believe how much I'm learning from this, thank you! 🤯",
        "You're doing a fantastic job of keeping us engaged, thank you! 👌",
        "This is so valuable, thank you for creating it! 💎",
        "I'm really enjoying this stream, thank you for doing it! 😃",
        "This is such an important topic, thank you for bringing it to light! 💡",
        "I'm loving the positive energy of this stream"
    ]          
      
    return messages[Math.floor(Math.random() * messages.length)];
}
