const fs = require("fs"); // file system


// Reading data form file:

// fs.readFile("sample.txt","utf8", (error, data)=>{
//     if(error){
//         console.log("error---",error)
//     }else{
//         console.log("data-----",data)
//     }
// })

// fs.readFileSync("sample.txt","utf8", (error, data)=>{
//     if(error){
//         console.log("error---",error)
//     }else{
//         console.log("data-----",data)
//     }
// })



// let data = fs.readFileSync("sample.txt","utf8");

// console.log("data----",data)

// create file:
// --------------


// fs.open("newFile.txt","w",(error, file)=>{
//     if(error){
//         console.log("error----",error)
//     }else{
//         console.log("file-----",file);
//         console.log("file created",)
//     }
// })

let string = `What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.

The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.

Where can I get some?
There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.

5
	paragraphs
	words
	bytes
	lists
	Start with 'Lorem
ipsum dolor sit amet...'
`;

// fs.writeFile("newFile.txt", string, (error)=>{
//     if(error){
//         console.log("error----",error)
//     }else{
//         console.log("file written Successfully",)
//     }
// })

let newText= "\nBhargava, Avinash, Anil, Koushik, Jaswanth, Vidya, Vasavi, Prem, Aravind";

// fs.appendFile("newFile.txt",newText,(error)=>{
//     if(error){
//         console.log("error----",error)
//     }else{
//         console.log("Data appended")
//     }
// })


let data = fs.readFileSync("sample.txt","utf8");
let data2 = fs.readFileSync("newFile.txt", "utf8");


// console.log("data------",data)
// console.log("data2----",data2)

let newData = `${data} \n------------@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@-----\n${data2}`;


// console.log("newData------",newData)


// fs.writeFile("newFile1.txt", newData, (error)=>{
//     if(error){
//         console.log("error----",error)
//     }else{
//         console.log("file written Successfully",)
//     }
// })

// delete file: unlink


// fs.unlink("newFile1.txt",(err)=>{
//     if(err) console.log("err---",err)
//     console.log("file deleted")
// })

// fs.rename("sample.txt", "renameFile.txt",(err)=>{
//     if(err) console.log("err---",err)
//     console.log("file renamed ")
// })


// fs.mkdir
// fs.readdir 
// fs.rmdir


// {recursive: true}