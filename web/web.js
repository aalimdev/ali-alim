// function toolsLinks(){
//     var x  = document.getElementById('tools');
//     // if(x.style.display === "none") {
//     //     x.style.display = "list-item";
//     // } else{
//     //     x.style.display = "none";
//     // }
//     x.innerHTML="<h2>TOOLS FOR PROGRAMMING</h2><a href='https://github.com/ali1xan' target='_blank'>GitHub - Ali1Xan</a><br><a href='https://www.evernote.com/shard/s368/client/snv?noteGuid=b1359883-2b9e-419a-b9de-dd959fc05f05&noteKey=97c0f19486d851b3&sn=https%3A%2F%2Fwww.evernote.com%2Fshard%2Fs368%2Fsh%2Fb1359883-2b9e-419a-b9de-dd959fc05f05%2F97c0f19486d851b3&title=Git' target='_blank'>Git - Evernote</a><br><a href='https://github.com/ali-alim' target='_blank'>GitHub - Ali-Alim</a><br><a href='https://guides.github.com/features/mastering-markdown/' target='_blank'>GitHub Markdown</a>";
// };

// function youCoders(){
//     var x = document.getElementById("youCoders");
//     x.innerHTML="<h2>YOUTUBE PROGRAMMERS</h2><a id='' href='https://www.youtube.com/c/TraversyMedia/playlists ' target='_blank'>Best Online Tutorials</a><br><a id='' href='https://www.youtube.com/c/codecademy/videos ' target='_blank'>CodeAcademy</a><br><a id='' href='https://www.youtube.com/wesbos' target='_blank'>WesBos From Canada</a><br><a id='' href='https://www.youtube.com/channel/UCRjiquPh4mjPNoOV9eCilXQ/playlists' target='_blank'>Engin Demirog From Turkey</a><br><a id='' href='https://www.youtube.com/c/itgid/playlists' target='_blank'>Alex Lushenko from Russia</a><br><a id='' href='https://www.youtube.com/c/programmingwithmosh/playlists ' target='_blank'>Mosh From Australia </a><br><a id='' href='https://www.youtube.com/c/DevEd/videos ' target='_blank'>Dev Ed from USA</a><br><a id='' href='https://www.youtube.com/c/TheCoderCoder/featured  ' target='_blank'>Coder Girl From USA </a><br><a id='' href='https://www.youtube.com/c/HowdyhoNet' target='_blank'>Хауди Хо - Просто об ИТ </a>";
 
// };

const colors = () => {
    const r = Math.floor(Math.random() * 255) + 50;
    const g = Math.floor(Math.random() * 255) + 100;
    const b = Math.floor(Math.random() * 255) + 150;
    return `rgb(${r}, ${g}, ${b})`;
};

const links = document.querySelectorAll('a');
for (let link of links) {
        link.addEventListener('click', function(){
        link.style.backgroundColor = colors();
        link.style.color="black";
        // duyme.style.fontSize = '31px';
    })
};


