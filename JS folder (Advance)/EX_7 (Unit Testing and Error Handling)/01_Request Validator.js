function requestValidator(httpObj) {

    const arrOfMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    const arrOfVersion = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    const regexURI = /^[\w.]+$/g;
    const regexMessage = /[<>\\&'"]+/g;
    debugger
    if (!arrOfMethods.includes(httpObj.method)) {
        throw new Error('Invalid request header: Invalid Method');
    }

    if (!regexURI.test(httpObj.uri) && httpObj.uri !== '*' || !httpObj.uri) {
        throw new Error('Invalid request header: Invalid URI');
    }

    if (!arrOfVersion.includes(httpObj.version)) {
        throw new Error('Invalid request header: Invalid Version');
    }

    if (regexMessage.test(httpObj.message) || !httpObj.hasOwnProperty('message')) {
        throw new Error('Invalid request header: Invalid Message');
    }

    return httpObj;
}

console.log(
    requestValidator({
        method: 'GET',
        uri: 'svn.public.catalog',
        version: 'HTTP/1.1',
        message: ''
    }));