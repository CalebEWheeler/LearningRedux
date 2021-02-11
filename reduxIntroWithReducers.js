//Learning how to model REDUX to a real scenario with ACTION CREATORS

console.clear();
//TODO: ACTION CREATORS
//Simulates people dropping off a form (Action Creators)
const createPolicy = ( name, amount ) => {
    return { //Action (a form in our analogy)
        type: 'CREATE_POLICY',
        payload: {
            name: 'Alex',
            amount: 20
        }
    };
};

//Simulates a person creating a claim
const createClaim = ( name, amountOfMoneyToCollect ) => {
    return {
        type: 'CREATE_CLAIM',
        payload: {
            name: name,
            amountOfMoneyToCollect: amountOfMoneyToCollect
        }
    }
}

//Simulates people deleting a policy
const deletePolicy = ( name ) => {
    return {
        type: 'DELETE_POLICY',
        payload: {
            name: name
        }
    }
}

//TODO: REDUCERS (departments) = take existing data and an action,
// then modify and return that data based on the contents of an ACTION

//goal is to update the list of claims with a passed action
const claimsHistory = ( oldListOfClaims = [], action ) => {
    if (action.type === 'CREATE_CLAIM') {
        //we care about this action (FORM)
        return [...oldListOfClaims, action.payload];
    }

    //we don't care about the action (FORM)
    return oldListOfClaims;
}

const accounting = ( bagOfMoney, action ) => {
    if (action.type === 'CREATE_CLAIM') {
        return bagOfMoney - action.payload.amountOfMoneyToCollect
    }
    else if (action.type === 'CREATE_POLICY') {
        return bagOfMoney + action.payload.amount
    }

    return bagOfMoney;
}

const policies = ( listOfPolicies = [], action ) => {
    if (action.type === 'CREATE_POLICY') {
        return [...listOfPolicies, action.payload.name];
    }
    else if (action.type === 'DELETE_POLICY') {
        return listOfPolicies.filter(name => name !== action.payload.name);
    }

    return listOfPolicies;
}

