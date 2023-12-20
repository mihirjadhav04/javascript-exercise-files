// MOST USED LOOP ON AARAY!

const coding = ["JS", "Python", "React", "Flutter", "Django"]

coding.forEach( (item, index, arr) => {
    console.log(item, index, arr);
});



const my_coding = [
    {
        languageName: "Python",
        languageFileName: "py"
    },
    {
        languageName: "Javascript",
        languageFileName: "js"
    },
    {
        languageName: "Text",
        languageFileName: "txt"
    },
]

my_coding.forEach( (item) => {
    console.log(item.languageName);
})