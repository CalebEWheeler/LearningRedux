//Learning how to model REDUX to a real scenario with ACTION CREATORS

//CREATE POLICY, CREATE CLAIM, DELETE POLICY

console.clear();

//Simulates people dropping off a form (Action Creators)
const createPolicy = (name, amount) => {
    return { //Action (a form in our analogy)
        type: 'CREATE_POLICY',
        payload: {
            name: 'Alex',
            amount: 20
        }
    };
};

//Simulates a person creating a claim
const createClaim = (name, amountOfMoneyToCollect) => {
    return {
        type: 'CREATE_CLAIM',
        payload: {
            name: name,
            amountOfMoneyToCollect: amountOfMoneyToCollect
        }
    }
}

//Simulates people deleting a policy
const deletePolicy = (name) => {
    return {
        type: 'DELETE_POLICY',
        payload: {
            name: name
        }
    }
}

