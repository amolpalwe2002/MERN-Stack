const stdRecords = [  
    {  
       name:'Arun',
       gender:'Male',
       physics:88,
       maths:87,
       english:78
    },
    {  
       name:'Rajesh',
       gender:'Male',
       physics:96,
       maths:100,
       english:95
    },
    {  
       name:'Moorthy',
       gender:'Male',
       physics:89,
       maths:90,
       english:70
    },
    {  
       name:'Raja',
       gender:'Male',
       physics:30,
       maths:25,
       english:40
    },
    {  
       name:'Usha',
       gender:'Female',
       physics:67,
       maths:45,
       english:78
    },
    {  
       name:'Priya',
       gender:'Female',
       physics:56,
       maths:46,
       english:78
    },
    {  
       name:'Sundar',
       gender:'Male',
       physics:12,
       maths:67,
       english:67
    },
    {  
       name:'Kavitha',
       gender:'Female',
       physics:78,
       maths:71,
       english:67
    },
    {  
       name:'Dinesh',
       gender:'Male',
       physics:56,
       maths:45,
       english:67
    },
    {  
       name:'Hema',
       gender:'Female',
       physics:71,
       maths:90,
       english:23
    },
    {  
       name:'Gowri',
       gender:'Female',
       physics:100,
       maths:100,
       english:100
    },
    {  
       name:'Ram',
       gender:'Male',
       physics:78,
       maths:55,
       english:47
    },
    {  
       name:'Murugan',
       gender:'Male',
       physics:34,
       maths:89,
       english:78
    },
    {  
       name:'Jenifer',
       gender:'Female',
       physics:67,
       maths:88,
       english:90
    }
 ];

const input = document.getElementById("input");
const btn = document.getElementById("search");

const container = document.getElementById("container");

let name, gender, physics, maths, english;

const createRecord = (data) => {
    
data.forEach((std) => {
    const stdRecord = document.createElement("div");
    stdRecord.setAttribute("id", "stdRecord");
        name = std.name;
        gender = std.gender;
        physics = std.physics;
        maths = std.maths;
        english = std.english;

        stdRecord.innerHTML = `Name: ${name} <br /> Gender: ${gender} <br /> Physics: ${physics} <br /> Maths: ${maths} <br /> English: ${english}`;

        container.append(stdRecord);
    
})
}
createRecord(stdRecords);

btn.addEventListener("click", () => {
    const filteredData = stdRecords.filter((std) => {
        return std.name.startsWith(input.value);
    });
    container.innerHTML = "";
    createRecord(filteredData);
});








