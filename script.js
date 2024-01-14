const apiUrl='https://api.github.com/users/username';
const photo=document.getElementById("profileImage");
const Nam=document.getElementById("name");
const followers=document.getElementById("followers");
const following=document.getElementById("following");
const profileName=document.querySelector('input[type="text"]');
const Mylists=document.getElementById("repos");

// console.log(Mylists);

const getData= async(apiUrl)=>{
    const response=await fetch(`https://api.github.com/users/${profileName.value}`);
    const finalData=await response.json();
    // console.log(finalData);

    photo.src=finalData.avatar_url;
    Nam.innerText=finalData.name;
    followers.innerText="Followers "+finalData.followers;
    following.innerText="Following "+finalData.following;

    // console.log(finalData.repos_url)
    const allRepo=await fetch(`https://api.github.com/users/${profileName.value}/repos`);
    const finalAllRepo=await allRepo.json();
    // console.log(finalAllRepo);

    // const totalLists=Mylists.getElementsByTagName('li');
    // console.log(totalLists);
    // for(let i=0;i<totalLists.length;i++){
    //     totalLists[i].innerText=finalAllRepo[i].name;
    // }

    const totalList=document.querySelectorAll('#repos li');
    console.log(totalList);
    let ind=0;
    totalList.forEach((list)=>{
        console.log("inside");
        list.innerText=finalAllRepo[ind].name;
        ind++;
    })


    console.log(finalAllRepo[0].name);
    console.log(finalAllRepo[1].name);
    console.log(finalAllRepo[2].name);


    profileName.value="";

}

document.getElementById("btn").addEventListener("click",()=>{
    getData(apiUrl);
    // profileName.value="";
})

// https://avatars.githubusercontent.com/u/112848622?s=96&v=4