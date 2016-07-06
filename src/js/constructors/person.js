function Person (facets) {
    var person = this;
    person.cool = facets ? facets.cool || false : false;
    person.feed = function(dog){
        dog.hungry = false;
    };
    person.pet = function(dog){
        dog.status = 'happy';
    };
};

export {Person};
