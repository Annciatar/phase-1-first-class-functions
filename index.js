function receivesAFunction(spy){
     spy();
}
function returnsANamedFunction(){
    return (function tennis(){
        return ('tennis');
    })
}

function returnsAnAnonymousFunction(){
return(function(){
    return '()';
});
}

