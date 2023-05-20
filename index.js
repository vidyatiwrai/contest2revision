const usersList = [
    {
        id: 1,
        name: "Aravind",
        age: 22,
        profession: "developer"
    },
    {
        id: 2,
        name: "Karthik",
        age: 20,
        profession: "developer"
    },
    {
        id: 3,
        name: "Aniket",
        age: 21,
        profession: "admin"
    },
    {
        id: 4,
        name: "Vansh Gupta",
        age: 22,
        profession: "admin"
    }
]

const filterButton = document.getElementById("filter");
const select = document.getElementsByTagName("select")[0];
const container = document.getElementById("cards-container"); 
const form = document.getElementById("user-form");

function filterUsers(){
    const selectedValue = select.value; 
    if(!selectedValue){
        alert("Please select one option")
        return ;
    }

    // write the code to filter from the array and append them into users-container
    container.innerHTML = '';

   const result =  usersList.filter((user) => {
        if(user.profession === selectedValue) return true ;
        return false ;
    })

    /*

    <div class="user-card">
        <p>1.</p>
        <p>Name: John</p>
        <p>Profession: <b>Developer</b></p>
        <p>Age: <b>18</b></p>
    </div>

    */
   const createParaWithInnerText = (label, value) => {
    const p = document.createElement("p");
    p.innerText = `${label} : ${value}`
    return p;
   }

    result.forEach((user, index) => {
        const div = document.createElement("div");
        div.className = "user-card" ;
        const p1 = document.createElement("p");
        p1.innerText = (index + 1) +".";
        let paraList = [p1];
        for(let i in user) {
            if(i !== "id")
                paraList.push(createParaWithInnerText(i, user[i]))
        }
        paraList.forEach((p) => {
            div.appendChild(p);
        })
        container.appendChild(div);
    })
}

function addNewUser(e){
    e.preventDefault();
    // console.log(e.target.age, e.target["age"].value)
    const user = {
        name: e.target["name"].value,
        age: e.target["age"].value,
        profession: e.target["profession"].value
    }
    usersList.push(user);
    filterUsers();
}

filterButton.addEventListener("click", filterUsers)
form.addEventListener("submit", addNewUser )
