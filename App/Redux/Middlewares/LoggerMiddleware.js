const LoggerMiddleware = store => next => action => {
    console.log(`%c Dispatch Action : ${action.type} , with payload : `, 'background: #222; color: #bada55' , action.payload);
    
    //往下一個middleware API 傳遞
    let result = next(action);
    console.log(`%c Next State:`,'background: #222; color: #bada55', store.getState());
    return result;
};

export default LoggerMiddleware; 
