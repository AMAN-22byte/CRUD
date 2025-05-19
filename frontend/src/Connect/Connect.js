const API='http://localhost:3000/person'
export const getPeople = async()=>{
    try {
        const res= await fetch(API);
        return res.json();
    } catch (error) {
       console.error("Error getting people:", error);
    throw error;
    }
};

export const createPerson = async(person) =>{
    try {
        const res = await fetch(API,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(person)
        })
        return res.json();
    } catch (error) {
        console.error("Error getting people:", error);
    throw error;
    }
};

export const updatePerson = async(person) =>{
    try {
        const res = await fetch(`${API}/${person._id}`,{
        method:'PUT',
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify(person)
    })
    return res.json();
    } catch (error) {
        console.error("Error getting people:", error);
    throw error;
    }
    
};

export const deletePerson = async(id) =>{
    try {
        const res = await fetch(`${API}/${id}`,{
        method:'DELETE',
    })
    return res.json();
    } catch (error) {
        console.error("Error getting people:", error);
    throw error;
    }
    
}
