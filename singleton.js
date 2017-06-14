
let instance;

let getInstance = () => {
    if (instance){
        return instance;
    }

    instance = {
        someAction: ()=> { console.log('some action'); }
    }

    return instance;
}

export default getInstance();